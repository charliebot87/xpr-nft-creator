import { useState, useEffect, useRef } from 'react';
import { withUAL } from '@libs/ual-compat';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { CircleNotch, Cube, Lightning, CheckCircle } from 'phosphor-react';

import { Modal } from '@components/Modal';
import { appName } from '@configs/globalsConfig';

import { pluginInfo } from './config';

const AA_ENDPOINT = 'https://xpr.api.atomicassets.io';

interface TemplateItem {
  template_id: string;
  name: string;
  issued_supply: string;
  max_supply: string;
  schema_name: string;
  immutable_data?: { name?: string; img?: string };
}

interface ModalState {
  title: string;
  message?: string;
  details?: string;
  transactionsIDs?: string[];
}

function QuickMint({ ual }: { ual: any }) {
  const router = useRouter();
  const { chainKey } = router.query;
  const modalRef = useRef<any>(null);

  // Step state
  const [collections, setCollections] = useState<string[]>([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('');

  const [schemas, setSchemas] = useState<string[]>([]);
  const [loadingSchemas, setLoadingSchemas] = useState(false);
  const [selectedSchema, setSelectedSchema] = useState('');

  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(
    null
  );

  const [recipient, setRecipient] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState<ModalState>({ title: '' });

  const accountName = ual?.activeUser?.accountName;

  // Fetch user's collections on login
  useEffect(() => {
    if (!accountName) {
      setCollections([]);
      setSelectedCollection('');
      return;
    }

    setLoadingCollections(true);
    setCollections([]);
    setSelectedCollection('');
    setSchemas([]);
    setSelectedSchema('');
    setTemplates([]);
    setSelectedTemplate(null);
    setRecipient(accountName);

    fetch(
      `${AA_ENDPOINT}/atomicassets/v1/collections?authorized_account=${accountName}&limit=100&order=desc&sort=created`
    )
      .then((r) => r.json())
      .then((data) => {
        const names = (data.data || []).map(
          (c: { collection_name: string }) => c.collection_name
        );
        setCollections(names);
        if (names.length === 1) setSelectedCollection(names[0]);
      })
      .catch(() => setCollections([]))
      .finally(() => setLoadingCollections(false));
  }, [accountName]);

  // Fetch schemas when collection selected
  useEffect(() => {
    if (!selectedCollection) {
      setSchemas([]);
      setSelectedSchema('');
      setTemplates([]);
      setSelectedTemplate(null);
      return;
    }

    setLoadingSchemas(true);
    setSchemas([]);
    setSelectedSchema('');
    setTemplates([]);
    setSelectedTemplate(null);

    fetch(
      `${AA_ENDPOINT}/atomicassets/v1/schemas?collection_name=${selectedCollection}&limit=100`
    )
      .then((r) => r.json())
      .then((data) => {
        const names = (data.data || []).map(
          (s: { schema_name: string }) => s.schema_name
        );
        setSchemas(names);
        if (names.length === 1) setSelectedSchema(names[0]);
      })
      .catch(() => setSchemas([]))
      .finally(() => setLoadingSchemas(false));
  }, [selectedCollection]);

  // Fetch templates when schema selected
  useEffect(() => {
    if (!selectedCollection || !selectedSchema) {
      setTemplates([]);
      setSelectedTemplate(null);
      return;
    }

    setLoadingTemplates(true);
    setTemplates([]);
    setSelectedTemplate(null);

    fetch(
      `${AA_ENDPOINT}/atomicassets/v1/templates?collection_name=${selectedCollection}&schema_name=${selectedSchema}&limit=100&order=desc&sort=created`
    )
      .then((r) => r.json())
      .then((data) => {
        const items: TemplateItem[] = (data.data || []).map((t: any) => ({
          template_id: t.template_id,
          name: t.immutable_data?.name || `Template #${t.template_id}`,
          issued_supply: t.issued_supply,
          max_supply: t.max_supply,
          schema_name: t.schema_name,
          immutable_data: t.immutable_data,
        }));
        setTemplates(items);
        if (items.length === 1) setSelectedTemplate(items[0]);
      })
      .catch(() => setTemplates([]))
      .finally(() => setLoadingTemplates(false));
  }, [selectedCollection, selectedSchema]);

  async function handleMint() {
    if (!selectedTemplate || !recipient || quantity < 1 || !ual?.activeUser)
      return;

    setSubmitting(true);
    try {
      const actions = Array.from({ length: quantity }, () => ({
        account: 'atomicassets',
        name: 'mintasset',
        authorization: [
          {
            actor: accountName,
            permission: 'active',
          },
        ],
        data: {
          authorized_minter: accountName,
          collection_name: selectedCollection,
          schema_name: selectedTemplate.schema_name,
          template_id: parseInt(selectedTemplate.template_id),
          new_asset_owner: recipient,
          immutable_data: [],
          mutable_data: [],
          tokens_to_back: [],
        },
      }));

      const result = await ual.activeUser.signTransaction(
        { actions },
        { blocksBehind: 3, expireSeconds: 60 }
      );

      const txId = result?.transactionId || result?.transaction_id;

      modalRef.current?.openModal();
      setModal({
        title: 'Mint Successful!',
        message: `Minted ${quantity} NFT${
          quantity > 1 ? 's' : ''
        } from template #${selectedTemplate.template_id} to ${recipient}.`,
        transactionsIDs: txId ? [txId] : [],
      });
    } catch (error: any) {
      modalRef.current?.openModal();
      setModal({
        title: 'Mint Failed',
        message:
          error?.cause?.json?.error?.details?.[0]?.message ||
          error?.message ||
          'Transaction failed.',
        details: JSON.stringify(error, undefined, 2),
      });
    }
    setSubmitting(false);
  }

  function handleLogin() {
    ual?.showModal();
  }

  // Max mintable = max_supply - issued_supply (0 max_supply = unlimited)
  const maxMintable = selectedTemplate
    ? parseInt(selectedTemplate.max_supply || '0') > 0
      ? parseInt(selectedTemplate.max_supply) -
        parseInt(selectedTemplate.issued_supply)
      : 500
    : 500;

  const canMint =
    !!selectedCollection &&
    !!selectedSchema &&
    !!selectedTemplate &&
    !!recipient &&
    quantity >= 1 &&
    quantity <= maxMintable;

  const SelectWrapper = ({
    label,
    children,
    loading,
  }: {
    label: string;
    children: React.ReactNode;
    loading?: boolean;
  }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-white">{label}</label>
      <div className="relative">
        {children}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {loading ? (
            <CircleNotch
              size={16}
              className="animate-spin"
              style={{ color: '#00ff88' }}
            />
          ) : (
            <span className="text-neutral-500 text-xs">▼</span>
          )}
        </div>
      </div>
    </div>
  );

  const selectStyle = (enabled: boolean) => ({
    background: 'rgb(15,15,15)',
    border: `1px solid ${
      enabled ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.08)'
    }`,
    color: enabled ? '#fff' : '#666',
    opacity: enabled ? 1 : 0.6,
  });

  if (!accountName) {
    return (
      <>
        <Head>
          <title>{`${pluginInfo.name} - ${appName}`}</title>
        </Head>
        <div className="mx-auto my-14 text-center">
          <div
            className="inline-flex p-4 rounded-full mb-6"
            style={{
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.3)',
            }}
          >
            <Lightning size={40} style={{ color: '#00ff88' }} />
          </div>
          <h2 className="headline-2">Quick Mint</h2>
          <p className="body-1 mt-2 mb-6 text-neutral-400">
            Connect your wallet to mint NFTs instantly
          </p>
          <button type="button" className="btn" onClick={handleLogin}>
            Connect Wallet
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="container flex flex-col gap-10 pb-16 max-w-2xl mx-auto">
      <Head>
        <title>{`${pluginInfo.name} - ${appName}`}</title>
      </Head>

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))',
            border: '1px solid rgba(0,255,136,0.3)',
            boxShadow: '0 0 20px rgba(0,255,136,0.1)',
          }}
        >
          <Lightning size={32} style={{ color: '#00ff88' }} />
        </div>
        <div>
          <h1
            className="headline-1"
            style={{
              color: '#00ff88',
              textShadow: '0 0 20px rgba(0,255,136,0.5)',
            }}
          >
            {pluginInfo.name}
          </h1>
          <span className="body-1 text-neutral-400">
            One-click NFT minting from your collections
          </span>
        </div>
      </div>

      {/* Mint Card */}
      <div
        className="rounded-2xl p-6 sm:p-8 flex flex-col gap-6"
        style={{
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(0,255,136,0.15)',
          boxShadow: '0 0 40px rgba(0,255,136,0.05)',
        }}
      >
        {/* Step 1 — Collection */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold font-mono px-2 py-0.5 rounded"
              style={{
                background: 'rgba(0,255,136,0.1)',
                color: '#00ff88',
                border: '1px solid rgba(0,255,136,0.2)',
              }}
            >
              01
            </span>
            <span className="text-sm font-bold text-neutral-300">
              Collection
            </span>
          </div>
          <SelectWrapper label="" loading={loadingCollections}>
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              disabled={loadingCollections || collections.length === 0}
              className="w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer pr-10"
              style={selectStyle(!loadingCollections && collections.length > 0)}
            >
              {loadingCollections ? (
                <option>Loading your collections...</option>
              ) : collections.length === 0 ? (
                <option>No authorized collections found</option>
              ) : (
                <>
                  <option value="">Select a collection...</option>
                  {collections.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </>
              )}
            </select>
          </SelectWrapper>
        </div>

        {/* Step 2 — Schema */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold font-mono px-2 py-0.5 rounded"
              style={{
                background: selectedCollection
                  ? 'rgba(0,255,136,0.1)'
                  : 'rgba(255,255,255,0.04)',
                color: selectedCollection ? '#00ff88' : '#555',
                border: `1px solid ${
                  selectedCollection
                    ? 'rgba(0,255,136,0.2)'
                    : 'rgba(255,255,255,0.06)'
                }`,
              }}
            >
              02
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: selectedCollection ? '#e0e0e0' : '#555' }}
            >
              Schema
            </span>
          </div>
          <SelectWrapper label="" loading={loadingSchemas}>
            <select
              value={selectedSchema}
              onChange={(e) => setSelectedSchema(e.target.value)}
              disabled={
                !selectedCollection || loadingSchemas || schemas.length === 0
              }
              className="w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer pr-10"
              style={selectStyle(
                !!selectedCollection && !loadingSchemas && schemas.length > 0
              )}
            >
              {!selectedCollection ? (
                <option>Select a collection first</option>
              ) : loadingSchemas ? (
                <option>Loading schemas...</option>
              ) : schemas.length === 0 ? (
                <option>No schemas found</option>
              ) : (
                <>
                  <option value="">Select a schema...</option>
                  {schemas.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </>
              )}
            </select>
          </SelectWrapper>
        </div>

        {/* Step 3 — Template */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold font-mono px-2 py-0.5 rounded"
              style={{
                background: selectedSchema
                  ? 'rgba(0,255,136,0.1)'
                  : 'rgba(255,255,255,0.04)',
                color: selectedSchema ? '#00ff88' : '#555',
                border: `1px solid ${
                  selectedSchema
                    ? 'rgba(0,255,136,0.2)'
                    : 'rgba(255,255,255,0.06)'
                }`,
              }}
            >
              03
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: selectedSchema ? '#e0e0e0' : '#555' }}
            >
              Template
            </span>
          </div>
          <SelectWrapper label="" loading={loadingTemplates}>
            <select
              value={selectedTemplate?.template_id || ''}
              onChange={(e) => {
                const tpl = templates.find(
                  (t) => t.template_id === e.target.value
                );
                setSelectedTemplate(tpl || null);
              }}
              disabled={
                !selectedSchema || loadingTemplates || templates.length === 0
              }
              className="w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer pr-10"
              style={selectStyle(
                !!selectedSchema && !loadingTemplates && templates.length > 0
              )}
            >
              {!selectedSchema ? (
                <option>Select a schema first</option>
              ) : loadingTemplates ? (
                <option>Loading templates...</option>
              ) : templates.length === 0 ? (
                <option>No templates found</option>
              ) : (
                <>
                  <option value="">Select a template...</option>
                  {templates.map((t) => {
                    const issued = parseInt(t.issued_supply);
                    const max = parseInt(t.max_supply);
                    const remaining =
                      max > 0 ? ` — ${max - issued} remaining` : ' — unlimited';
                    return (
                      <option key={t.template_id} value={t.template_id}>
                        {t.name} (#{t.template_id}){remaining}
                      </option>
                    );
                  })}
                </>
              )}
            </select>
          </SelectWrapper>

          {/* Template preview */}
          {selectedTemplate && (
            <div
              className="mt-3 rounded-xl p-4 flex items-center gap-4"
              style={{
                background: 'rgba(0,255,136,0.04)',
                border: '1px solid rgba(0,255,136,0.1)',
              }}
            >
              <Cube size={20} style={{ color: '#9945FF' }} />
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">
                  {selectedTemplate.name}
                </div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">
                  Template #{selectedTemplate.template_id} ·{' '}
                  {parseInt(selectedTemplate.issued_supply).toLocaleString()}{' '}
                  minted
                  {parseInt(selectedTemplate.max_supply) > 0
                    ? ` / ${parseInt(
                        selectedTemplate.max_supply
                      ).toLocaleString()} max`
                    : ' (unlimited)'}
                </div>
              </div>
              <CheckCircle size={20} style={{ color: '#00ff88' }} />
            </div>
          )}
        </div>

        {/* Recipient */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold font-mono px-2 py-0.5 rounded"
              style={{
                background: selectedTemplate
                  ? 'rgba(0,255,136,0.1)'
                  : 'rgba(255,255,255,0.04)',
                color: selectedTemplate ? '#00ff88' : '#555',
                border: `1px solid ${
                  selectedTemplate
                    ? 'rgba(0,255,136,0.2)'
                    : 'rgba(255,255,255,0.06)'
                }`,
              }}
            >
              04
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: selectedTemplate ? '#e0e0e0' : '#555' }}
            >
              Recipient
            </span>
          </div>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value.toLowerCase())}
            placeholder="XPR account name"
            className="w-full px-4 py-3 rounded-xl text-sm font-mono"
            style={{
              background: 'rgb(15,15,15)',
              border: `1px solid ${
                recipient ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.08)'
              }`,
              color: '#fff',
              outline: 'none',
            }}
          />
          {recipient && recipient !== accountName && (
            <p className="text-xs text-yellow-500 mt-1.5 ml-1">
              ⚠ Minting to a different account: {recipient}
            </p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold font-mono px-2 py-0.5 rounded"
              style={{
                background: recipient
                  ? 'rgba(0,255,136,0.1)'
                  : 'rgba(255,255,255,0.04)',
                color: recipient ? '#00ff88' : '#555',
                border: `1px solid ${
                  recipient ? 'rgba(0,255,136,0.2)' : 'rgba(255,255,255,0.06)'
                }`,
              }}
            >
              05
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: recipient ? '#e0e0e0' : '#555' }}
            >
              Quantity
            </span>
            {selectedTemplate && (
              <span className="text-xs text-neutral-600 ml-auto">
                max {maxMintable > 500 ? '500' : maxMintable} per tx
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-lg font-bold text-lg transition-all"
              style={{
                background: 'rgba(0,255,136,0.05)',
                border: '1px solid rgba(0,255,136,0.2)',
                color: '#00ff88',
              }}
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value) || 1;
                setQuantity(
                  Math.max(1, Math.min(v, Math.min(maxMintable, 500)))
                );
              }}
              min={1}
              max={Math.min(maxMintable, 500)}
              className="flex-1 text-center py-2.5 rounded-xl font-mono text-lg font-bold"
              style={{
                background: 'rgb(15,15,15)',
                border: '1px solid rgba(0,255,136,0.2)',
                color: '#00ff88',
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={() =>
                setQuantity((q) => Math.min(Math.min(maxMintable, 500), q + 1))
              }
              className="w-10 h-10 rounded-lg font-bold text-lg transition-all"
              style={{
                background: 'rgba(0,255,136,0.05)',
                border: '1px solid rgba(0,255,136,0.2)',
                color: '#00ff88',
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Summary */}
        {canMint && (
          <div
            className="rounded-xl p-4"
            style={{
              background: 'rgba(0,255,136,0.04)',
              border: '1px solid rgba(0,255,136,0.12)',
            }}
          >
            <div className="flex flex-wrap gap-5 text-sm">
              <div>
                <div className="text-xs text-neutral-500 mb-1">Collection</div>
                <div
                  className="font-mono font-bold"
                  style={{ color: '#00ff88' }}
                >
                  {selectedCollection}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Template</div>
                <div className="font-mono font-bold text-white">
                  #{selectedTemplate?.template_id}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Recipient</div>
                <div className="font-mono font-bold text-white">
                  {recipient}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Quantity</div>
                <div
                  className="font-mono font-bold"
                  style={{ color: '#00ff88' }}
                >
                  {quantity}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mint Button */}
        <button
          type="button"
          onClick={handleMint}
          disabled={!canMint || submitting}
          className="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-3"
          style={{
            background:
              canMint && !submitting
                ? 'linear-gradient(135deg, rgba(0,255,136,0.25), rgba(0,200,100,0.1))'
                : 'rgba(0,255,136,0.03)',
            border: `1px solid ${
              canMint && !submitting
                ? 'rgba(0,255,136,0.5)'
                : 'rgba(0,255,136,0.08)'
            }`,
            color: canMint && !submitting ? '#00ff88' : 'rgba(0,255,136,0.25)',
            boxShadow:
              canMint && !submitting ? '0 0 30px rgba(0,255,136,0.2)' : 'none',
            cursor: canMint && !submitting ? 'pointer' : 'not-allowed',
          }}
        >
          {submitting ? (
            <>
              <CircleNotch size={20} className="animate-spin" />
              Minting {quantity} NFT{quantity > 1 ? 's' : ''}...
            </>
          ) : (
            <>
              <Lightning size={20} />
              Mint {quantity} NFT{quantity > 1 ? 's' : ''}{' '}
              {recipient && recipient !== accountName ? `→ ${recipient}` : ''}
            </>
          )}
        </button>
      </div>

      <Modal ref={modalRef} title={modal.title}>
        <p className="body-2 mt-2 text-neutral-300">{modal.message}</p>
        {modal.details && (
          <pre
            className="mt-4 p-3 rounded-lg text-xs font-mono overflow-auto max-h-40 text-red-400"
            style={{
              background: 'rgba(255,0,0,0.05)',
              border: '1px solid rgba(255,0,0,0.1)',
            }}
          >
            {modal.details}
          </pre>
        )}
        {modal.transactionsIDs?.map((tx) => (
          <Link
            className="flex py-2 underline underline-offset-2"
            key={tx}
            href={`https://explorer.xprnetwork.org/transaction/${tx}`}
            target="_blank"
            style={{ color: '#00ff88' }}
          >
            <span className="break-all font-mono text-sm">{tx}</span>
          </Link>
        ))}
      </Modal>
    </div>
  );
}

export default withUAL(QuickMint);

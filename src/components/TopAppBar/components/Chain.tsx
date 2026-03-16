import Link from 'next/link';

interface ChainComponentProps {
  chainKey: string;
}

export function Chain({ chainKey }: ChainComponentProps) {
  return (
    <Link href={`/${chainKey}/`} className="flex gap-2 items-center py-2">
      <img
        width={36}
        height={36}
        src="/app-logo.png"
        alt="NFT Creator"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-mono font-bold text-sm" style={{ color: '#00ff88' }}>
          NFT Creator
        </span>
        <span className="text-[10px] font-mono text-neutral-500">
          by charliebot
        </span>
      </div>
    </Link>
  );
}

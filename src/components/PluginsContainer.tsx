import Link from 'next/link';
import { Parachute, PuzzlePiece, Coins, ChartLine } from 'phosphor-react';

export function PluginsContainer({ plugins, chainKey }) {
  const handleIcons = (plugin) => {
    switch (plugin) {
      case 'airdrop':
        return <Parachute size={40} />;
      case 'token-airdrop':
        return <Coins size={40} />;
      case 'analytics':
        return <ChartLine size={40} />;
      default:
        return <PuzzlePiece size={40} />;
    }
  };

  return (
    <>
      {plugins.map((item) => (
        <div key={item.plugin}>
          {item.page === 'plugins' && (
            <Link
              href={{
                pathname: `/${chainKey}/plugins/${item.plugin}`,
                query: { type: 'default' },
              }}
              className="glass-card flex flex-col w-full justify-center items-center gap-md cursor-pointer p-8 group"
            >
              <div className="flex flex-row items-center gap-8 text-white rounded-md w-full">
                <div className="p-3.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                    color: '#0a0a0a',
                  }}
                >
                  {handleIcons(item.plugin)}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="headline-2 group-hover:neon-text transition-all duration-300">{item.label}</span>
                  <span className="body-2 text-neutral-400">{item.description}</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </>
  );
}

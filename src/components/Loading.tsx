export function Loading() {
  return (
    <div className="container mx-auto my-10 flex w-fit h-fit justify-center items-center gap-4 p-4">
      <div className="matrix-spinner">
        <div className="matrix-spinner-outer" />
        <div className="matrix-spinner-inner" />
        <div className="matrix-spinner-dot" />
      </div>
      <p className="neon-text font-bold animate-text-glow">Loading...</p>
    </div>
  );
}

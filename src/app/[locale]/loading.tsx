export default function Loading() {
  return (
    <div className="fixed top-16 left-0 right-0 z-50 h-0.5">
      <div className="h-full bg-[var(--accent)] animate-pulse" style={{ width: "30%" }} />
    </div>
  );
}

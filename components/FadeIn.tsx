type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  return (
    <div
      className={`fade-in ${className}`}
      style={
        {
          "--fade-delay": `${delay}s`,
          "--fade-duration": `${duration}s`,
          "--fade-x": `${x}px`,
          "--fade-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

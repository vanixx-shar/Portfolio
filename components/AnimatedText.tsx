type AnimatedTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const characters = Array.from(text);

  return (
    <p aria-label={text} className={className}>
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          className="animated-char"
          style={{ "--char-delay": `${Math.min(index * 0.012, 1.6)}s` } as React.CSSProperties}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </p>
  );
}

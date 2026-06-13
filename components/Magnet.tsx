type MagnetProps = {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
};

export default function Magnet({ children, className = "" }: MagnetProps) {
  return <div className={`magnet-frame ${className}`}>{children}</div>;
}

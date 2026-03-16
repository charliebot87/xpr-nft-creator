interface CardContainerProps {
  children: React.ReactNode;
  style?: string;
}
export function CardContainer({ children, style }: CardContainerProps) {
  return (
    <div
      className={
        style ||
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
      }
    >
      {children}
    </div>
  );
}

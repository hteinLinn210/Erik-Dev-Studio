interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 py-8 md:px-10 md:py-10 lg:py-30 ${className}`}
    >
      {children}
    </div>
  );
};

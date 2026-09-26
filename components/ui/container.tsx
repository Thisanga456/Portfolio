import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1392px] px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}


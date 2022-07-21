import { memo } from "react";

interface IHeaderProps {
  children?: React.ReactNode;
}

export const Header = memo(function Header({ children }: IHeaderProps) {
  return (
    <div className="h-20 bg-gray-300 font-semibold text-center justify-center flex text-xl items-center">
      {children}
    </div>
  );
});

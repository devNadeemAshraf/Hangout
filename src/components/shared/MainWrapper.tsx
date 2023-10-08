import { ReactNode } from "react";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full flex items-center justify-center px-4">
      {children}
    </main>
  );
};

export default MainWrapper;

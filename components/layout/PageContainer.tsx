
import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="mx-auto min-h-screen max-w-md px-4 pt-4 pb-24">
      {children}
    </main>
  );
}


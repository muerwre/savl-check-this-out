import { FC, PropsWithChildren } from "react";

import { Container } from "~/common/ui/Container";

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export { MainLayout };

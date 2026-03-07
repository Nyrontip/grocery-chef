import Header from "./Header";
import Footer from "../recipe/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  showHeaderFooter?: boolean;
}

export default function AppLayout({ children, showHeaderFooter = true }: AppLayoutProps) {
  if (!showHeaderFooter) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

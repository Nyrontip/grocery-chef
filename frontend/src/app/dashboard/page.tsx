import Header from "@/components/shared/Header";
import PageTitle from "@/components/dashboard/PageTitle";
import Tabs from "@/components/dashboard/Tabs";
import RecipesGrid from "@/components/dashboard/RecipesGrid";
import Footer from "@/components/dashboard/Footer";

import "@/styles/dashboard.css";

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="container">
        <PageTitle />
        <Tabs />
        <RecipesGrid />
      </main>

      <Footer />
    </>
  );
}

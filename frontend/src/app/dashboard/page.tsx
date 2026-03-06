import "@/styles/dashboard.css";

import Header from "@/components/dashboard/Header";
import Tabs from "@/components/dashboard/Tabs";
import RecipesGrid from "@/components/dashboard/RecipesGrid";
import Footer from "@/components/dashboard/Footer";

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="title">
          <h1>Mi Cocina</h1>
          <p>Gestiona y descubre tus platos favoritos.</p>
        </div>

        <Tabs />

        <RecipesGrid />
      </main>

      <Footer />
    </>
  );
}

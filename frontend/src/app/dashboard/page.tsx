"use client";

import Header from "@/components/shared/Header";
import PageTitle from "@/components/dashboard/PageTitle";
import Tabs from "@/components/dashboard/Tabs";
import RecipesGrid from "@/components/dashboard/RecipesGrid";
import Footer from "@/components/dashboard/Footer";

import "@/styles/dashboard.css";

import { useEffect, useMemo, useState } from "react";
import {
  getAllRecipes,
  getFavoriteRecipes,
  toggleFavorite,
  type Recipe,
} from "@/services/recipes";

export default function DashboardPage() {
  const [tab, setTab] = useState<"all" | "favorites">("all");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const token = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    return localStorage.getItem("token") ?? undefined;
  }, []);

  useEffect(() => {
    let alive = true;

    async function load() {
      setError(null);
      setLoading(true);

      try {
        const data =
          tab === "favorites"
            ? await getFavoriteRecipes(token)
            : await getAllRecipes(token);

        if (alive) setRecipes(data);
      } catch (err: any) {
        if (alive) setError(err?.message ?? "Error cargando recetas");
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, [tab, token]);

  useEffect(() => {
    const message = sessionStorage.getItem("toast");
    if (!message) return;
    sessionStorage.removeItem("toast");
    setToast(message);
    const t = window.setTimeout(() => setToast(null), 2500);
    return () => window.clearTimeout(t);
  }, []);

  async function handleToggleFavorite(id: number) {
    try {
      const updated = await toggleFavorite(id, token);
      setRecipes((prev) =>
        prev
          .map((r) =>
            r.id === id ? { ...r, ...updated, Ingredients: r.Ingredients } : r
          )
          .filter((r) => (tab === "favorites" ? r.isFavorite : true))
      );
    } catch (err: any) {
      setError(err?.message ?? "No se pudo actualizar favorito");
    }
  }

  const gridItems = recipes.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description ?? "",
    isFavorite: r.isFavorite,
    ingredients: r.Ingredients ?? [],
  }));

  const emptyMessage =
    tab === "favorites"
      ? "Aún no tienes recetas favoritas. Marca algunas con la estrella."
      : "Aún no tienes recetas. Crea tu primera receta para verla aquí.";

  return (
    <>
      <Header />

      <main className="container">
        {toast && <p className="dashboard-state">{toast}</p>}
        <PageTitle />
        <div className="dashboard-content">
          <Tabs value={tab} onChange={setTab} />
          {error && <p className="error-text">{error}</p>}
          {loading ? (
            <p className="dashboard-state">Cargando...</p>
          ) : gridItems.length === 0 ? (
            <div className="recipes">
              <div className="empty-box">{emptyMessage}</div>
            </div>
          ) : (
            <RecipesGrid recipes={gridItems} onToggleFavorite={handleToggleFavorite} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/shared/Header";
import Hero from "@/components/recipe/Hero";
import IngredientsCard from "@/components/recipe/IngredientsCard";
import StepsCard from "@/components/recipe/StepsCard";
import Footer from "@/components/recipe/Footer";

import {
  deleteRecipe,
  getRecipeById,
  toggleFavorite,
  type Recipe,
} from "@/services/recipes";

import "@/styles/recipe.css";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export default function RecipePage({ params }: RecipePageProps) {
  const { id } = React.use(params);
  const recipeId = Number(id);
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token") || undefined;
        const data = await getRecipeById(recipeId, token);

        if (!cancelled) setRecipe(data);
      } catch (e) {
        const message =
          e instanceof Error ? e.message : "Error cargando la receta";
        if (!cancelled) setError(message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (!Number.isFinite(recipeId)) {
      setError("ID de receta inválido");
      setLoading(false);
      return;
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [recipeId]);

  async function handleToggleFavorite() {
    if (!recipe) return;

    // Actualización optimista inmediata
    const newFavoriteState = !recipe.isFavorite;
    setRecipe((prev) =>
      prev ? { ...prev, isFavorite: newFavoriteState } : null,
    );

    try {
      const token = localStorage.getItem("token") || undefined;
      const updated = await toggleFavorite(recipeId, token);

      // Sincroniza con el estado real del servidor por si falló
      setRecipe((prev) =>
        prev ? { ...prev, isFavorite: updated.isFavorite } : null,
      );
    } catch (e) {
      // Revierte si hubo error
      setRecipe((prev) =>
        prev ? { ...prev, isFavorite: !newFavoriteState } : null,
      );
      const message =
        e instanceof Error ? e.message : "Error actualizando favorito";
      setError(message);
    }
  }

  async function handleDelete() {
    if (!window.confirm("¿Eliminar esta receta?")) return;

    try {
      setSaving(true);
      const token = localStorage.getItem("token") || undefined;
      await deleteRecipe(recipeId, token);

      sessionStorage.setItem("toast", "Receta eliminada");
      router.push("/dashboard");
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Error eliminando la receta";
      setError(message);
    } finally {
      setSaving(false);
    }
  }

  function handleBack() {
    router.back();
  }

  function handleEdit() {
    router.push(`/recipes/${recipeId}/edit`);
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="detail-container">
          <div className="detail-actions">
            <button type="button" className="back-btn" onClick={handleBack}>
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Volver</span>
            </button>

            <div className="header-buttons">
              <button
                type="button"
                className={recipe?.isFavorite ? "icon-btn active" : "icon-btn"}
                onClick={handleToggleFavorite}
                disabled={loading}
              >
                <span className="material-symbols-outlined">star</span>
              </button>

              <button
                type="button"
                className="icon-btn delete"
                onClick={handleDelete}
                disabled={saving || loading}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>

              <button
                type="button"
                className="edit-btn"
                onClick={handleEdit}
                disabled={saving || loading}
              >
                Edit Recipe
              </button>
            </div>
          </div>

          {loading ? (
            <p className="dashboard-state">Cargando...</p>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : recipe ? (
            <>
              <Hero
                title={recipe.title}
                description={recipe.description || ""}
              />

              {saving && <p className="dashboard-state">Guardando...</p>}

              <div className="grid">
                <div className="left-column">
                  <IngredientsCard ingredients={recipe.Ingredients || []} />
                </div>

                <div className="right-column">
                  <StepsCard
                    steps={(recipe.steps || "")
                      .split("\n")
                      .map((s) => s.trim())
                      .filter(Boolean)}
                  />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <Footer />
    </>
  );
}

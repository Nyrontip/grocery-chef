"use client";

import { useRouter } from "next/navigation";

type FormActionsProps = {
  onCancel?: () => void; // opcional, si no se pasa hace redirect
  isSubmitting?: boolean; // desactiva botones si true
  submitLabel?: string; // texto del botón submit
};

export default function FormActions({
  onCancel,
  isSubmitting = false,
  submitLabel = "Guardar receta",
}: FormActionsProps) {
  const router = useRouter();

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="actions">
      <button
        type="button"
        className="cancel-btn"
        onClick={handleCancel}
        disabled={isSubmitting}
      >
        Cancelar
      </button>

      <button type="submit" className="save-btn" disabled={isSubmitting}>
        <span className="material-symbols-outlined">
          {isSubmitting ? "hourglass_empty" : "save"}
        </span>
        {isSubmitting ? "Guardando..." : submitLabel}
      </button>
    </div>
  );
}

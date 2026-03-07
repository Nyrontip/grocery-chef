type FormActionsProps = {
  onCancel: () => void;
  isSubmitting?: boolean;
  submitLabel?: string;
};

export default function FormActions({
  onCancel,
  isSubmitting = false,
  submitLabel = "Guardar receta",
}: FormActionsProps) {
  return (
    <div className="actions">
      <button type="button" className="cancel-btn" onClick={onCancel}>
        Cancelar
      </button>

      <button type="submit" className="save-btn" disabled={isSubmitting}>
        <span className="material-symbols-outlined">save</span>
        {submitLabel}
      </button>
    </div>
  );
}

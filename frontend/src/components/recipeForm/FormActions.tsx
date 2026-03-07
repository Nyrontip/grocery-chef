import { useRouter } from "next/navigation";

type Props = {
  loading?: boolean;
};

export default function FormActions({ loading = false }: Props) {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/dashboard");
  };

  return (
    <div className="actions">
      <button 
        type="button" 
        className="cancel-btn"
        onClick={handleCancel}
        disabled={loading}
      >
        Cancelar
      </button>

      <button type="submit" className="save-btn" disabled={loading}>
        <span className="material-symbols-outlined">
          {loading ? "hourglass_empty" : "save"}
        </span>
        {loading ? "Guardando..." : "Guardar receta"}
      </button>
    </div>
  );
}

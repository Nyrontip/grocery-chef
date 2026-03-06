type Props = {
  label: string;
  icon: string;
  type: string;
  placeholder: string;
};

export default function InputField({ label, icon, type, placeholder }: Props) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <div className="input-container">
        <span className="material-symbols-outlined">{icon}</span>

        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

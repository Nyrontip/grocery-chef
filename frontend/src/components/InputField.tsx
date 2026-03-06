type Props = {
  label?: string;
  type: string;
  placeholder: string;
  icon: string;
};

export default function InputField({ label, type, placeholder, icon }: Props) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}

      <div className="input-box">
        <span className="material-symbols-outlined icon">{icon}</span>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

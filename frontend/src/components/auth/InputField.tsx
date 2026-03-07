type Props = {
  label?: string;
  name?: string;
  type: string;
  placeholder: string;
  icon: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InputField({
  label,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
}: Props) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}

      <div className="input-box">
        <span className="material-symbols-outlined icon">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

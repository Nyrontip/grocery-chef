type Props = {
  label: string;
  icon: string;
  type: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InputField({
  label,
  icon,
  type,
  placeholder,
  name,
  value,
  onChange,
}: Props) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <div className="input-container">
        <span className="material-symbols-outlined">{icon}</span>

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

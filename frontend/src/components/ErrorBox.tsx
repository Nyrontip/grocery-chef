type Props = {
  message: string;
};

export default function ErrorBox({ message }: Props) {
  return (
    <div className="error-box">
      <span className="material-symbols-outlined">error</span>
      <p>{message}</p>
    </div>
  );
}

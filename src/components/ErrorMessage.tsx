export default function ErrorMessage({ message }: { message: string }) {
  return <div className="error"><span>❌</span>{message}</div>;
}

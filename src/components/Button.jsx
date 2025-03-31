export default function Button({ type, children }) {
  return (
    <button className={type === "primary" && "button__primary"}>
      {children}
    </button>
  );
}

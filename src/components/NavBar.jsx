export default function NavBar() {
  return (
    <nav
      className={
        "bg-primary flex pl-[5em] pr-[5em] pt-[1em] pb-[1em] justify-between items-center shadow-md sticky top-0"
      }
    >
      <h2 className={"text-white text-3xl font-semibold"}>Arcanium</h2>
      <ul className={"text-white flex gap-[1em]"}>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
      </ul>
    </nav>
  );
}

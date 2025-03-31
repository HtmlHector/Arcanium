import Button from "../../components/Button.jsx";

export default function HeroSection() {
  return (
    <section className={"hero flex flex-col h-dvh"}>
      <aside
        className={
          "flex-[1.3] flex justify-center items-center flex-col gap-[1.2rem] cta"
        }
      >
        <h1
          className={"text-6xl font-bold text-center leading-19"}
          style={{ width: "20ch" }}
        >
          Find your perfect home, Your way.
        </h1>
        <p
          className={"text-[1.1rem] text-gray-500 text-center"}
          style={{ width: "65ch" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim
        </p>
        <Button type={"primary"}>Learn More</Button>
      </aside>
      <aside className={"flex-[1.3] p-5"}>
        <div className={"bg-white h-full bg-red-400"}>
          <h2>Hello</h2>
        </div>
      </aside>
    </section>
  );
}

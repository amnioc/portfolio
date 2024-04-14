import Image from "next/image";

export default function Welcome() {
  return (
    <section
      className="p-5 mt-10 border-solid border-pink-700 border-2 flex"
      id="top"
    >
      <img
        src="../assets/images/nico.jpg"
        alt="Nico smiling"
        width={150}
        height={150}
        className="rounded-2xl p-3"
      />
      <aside className="p-5">
        <h2 className=" text-purple-800 font-extrabold text-2xl">Hi,</h2>
        I'm a Junior Front End Developer with a passion for inclusion of{" "}
        <i className="text-l">all</i> users.
        <aside className="text-purple-heart-800 decoration-2">
          Welcome to my portfolio page.
        </aside>
      </aside>
    </section>
  );
}

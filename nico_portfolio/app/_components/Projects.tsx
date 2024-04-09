export default function Projects() {
  return (
    <section
      id="projects"
      className="border-2 border-web-orange-600 text-purple-heart-900 p-10 mt-10 place-self-stretch"
    >
      <ul>
        <h3 className="text-2xl">Projects</h3>
        <li className="project">
          <h4>Project 1</h4>
          <a href="www.google.com">View Project 1 Here</a>
          <aside>
            Highlights included learning how to integrate memory recall!
          </aside>
          Tech Stack: A, B, C
        </li>
        <li className="project">
          <h4>Project 2</h4>
          <a href="www.google.com">View Project 2 Here</a>
          <aside>
            Highlights included learning how to integrate memory recall!
          </aside>
          Tech Stack: A, B, C
        </li>
        <li className="project">
          <h4>Project 3</h4>
          <a href="www.google.com">View Project 3 Here</a>
          <aside>
            Highlights included learning how to integrate memory recall!
          </aside>
          Tech Stack: A, B, C
        </li>
      </ul>
    </section>
  );
}

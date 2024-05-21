export default function Projects() {
  return (
    <section
      id="projects"
      className="border-2 border-web-orange-600 text-purple-heart-900 p-10 mt-10 place-self-stretch"
    >
      <ul>
        <h3 className="text-2xl">Projects</h3>
        <li className="flex-wrap project">
          <section className="flex justify-between">
            <h4 className="text-xl font-bold text-web-orange-700">
              Chill Clicks
            </h4>
            <aside className="inline border-2 border-web-orange-700 bg-purple-heart-600 p-1">
              <a
                href="https://chill-clicks.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-web-orange-300 font-semibold"
              >
                Click to play Chill Clicks
              </a>
            </aside>
          </section>
          <section>
            A colour and auditory stimming (self-stimulating) app built in
            response to conversations with neurodivergent users.
          </section>
          <b>Tech Stack:</b> React, TypeScript, HTML5, CSS Modules.
        </li>
        <li className="flex-wrap project">
          <section className="flex justify-between">
            <h4 className="text-xl font-bold text-web-orange-700">
              Random Dice Roller
            </h4>
            <aside className="inline border-2 border-web-orange-700 bg-purple-heart-600 p-1">
              <a
                href="https://chance-roll.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-web-orange-300 font-semibold"
              >
                Click to roll some dice!
              </a>
            </aside>
          </section>
          <section>
            A one page React App with functionality to roll X number of dice
            with Y total sides, inspired by tabletop roleplaying gameplay.
          </section>
          <b>Tech Stack:</b> React, HTML5, CSS3.
        </li>
        <li className="flex-wrap project">
          <section className="flex justify-between">
            <h4 className="text-xl font-bold text-web-orange-700">PROJECT 3</h4>
            <aside className="inline border-2 border-web-orange-700 bg-purple-heart-600 p-1">
              <a
                href="https://chill-clicks.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-web-orange-300 font-semibold"
              >
                Click to play Chill Clicks
              </a>
            </aside>
          </section>
          <section>
            A colour and auditory stimming (self-stimulating) app built in
            response to conversations with neurodivergent users.
          </section>
          <b>Tech Stack:</b> React, TypeScript, HTML5, CSS Modules.
        </li>
      </ul>
    </section>
  );
}

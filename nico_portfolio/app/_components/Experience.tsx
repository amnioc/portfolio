export default function Experience() {
  return (
    <section
      id="experience"
      className="border-2 border-web-orange-600 text-purple-heart-900 p-10 mt-10 place-self-stretch"
    >
      <ol>
        <h3 className="text-2xl">Experience</h3>
        <li className="experience border-2 border-purple-heart-600 p-5 mt-3">
          <h4 className="text-xl font-semibold text-purple-heart-700">Freelance Software Developer</h4>
          <aside className="text-l font-bold text-web-orange-700">Remote, 2023</aside>
          <section className="mt-3">
            <ul className="list-disc ml-5">
              <li>Developed engaging donation form for local charity with Customer Relationship Management (CRM) integration.</li>
              <li>Communicated with client to understand and identify minimum viable product (MVP).</li>
              <li>Provided regular updates over email and video call, managing expectations whilst prioritising user experiene.</li>
              <li>Continued professional development, self-learning new technologies and researching best options to implement.</li>
            </ul>
          </section>
        </li>
        <li className="experience border-2 border-purple-heart-600 p-5 mt-3">
        <h4 className="text-xl font-semibold text-purple-heart-700">Trainee Software Developer</h4>
        <aside className="text-l font-bold text-web-orange-700">Northcoders, January 2023 - May 2023</aside>
          <section className="mt-3">
            <ul className="list-disc ml-5">
              <li>Completed 13-week industry-leading full-stack software engineering bootcamp with an emphasis on coding fundamentals and industry best practices. </li>
              <li>Key competencies: JavaScript, React, Node, Express, PSQL, TDD, HTML, CSS.</li>
              <li>Utilised documentation and formatting tools to ensure code quality is high, easy to read and reduce errors.</li>
              <li>Developed solo and group projects with CRUD (Create, Read, Update, Delete) functionality.</li>
            </ul>
          </section>
        </li>
        <li className="experience border-2 border-purple-heart-600 p-5 mt-3">
          <h4>Job Title 3</h4>
          <section className="mt-3">
            Date
            <br></br> Location
            <ul className="list-disc ml-5">
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
            </ul>
          </section>
        </li>
      </ol>
    </section>
  );
}

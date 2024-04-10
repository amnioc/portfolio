export default function Contact() {
  return (
    <form className="border-2 border-web-orange-600 p-5 mt-3 w-full max-w-full flex-col flex-grow">
      <h3 id="contact">Contact Me</h3>
      <label className="" htmlFor="name">
        Your Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Patricia Persona"
        />
      </label>

      <label className="block" htmlFor="email">
        Your Email Address:
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@contact.com"
        />
      </label>

      <label className="block" htmlFor="message">
        Your Message:
        <textarea
          name="message"
          id="message"
          placeholder="Hi Nico! I've got a job you may be suitable for..."
        />
      </label>
    </form>
  );
}

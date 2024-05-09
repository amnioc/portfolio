import { useRef } from "react";
import { Form } from "semantic-ui-react";


export default function Contact() {

  const form = useRef();
const sendEmail= () => {
  console.log(form.current)
  // e.preventDefault();

  // emailjs
  //   .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
  //     publicKey: 'YOUR_PUBLIC_KEY',
  //   })
  //   .then(
  //     () => {
  //       console.log('SUCCESS!');
  //     },
  //     (error) => {
  //       console.log('FAILED...', error.text);
  //     },
  //   );
};




  return (
    
    <Form ref={form} className="border-2 border-web-orange-600 p-5 mt-3 w-full max-w-full flex flex-col gap-2 text-purple-heart-700">
      <h3 id="contact" className=" text-2xl text-purple-heart-900">Contact Me</h3>
      <label className="grid grid-cols-2" htmlFor="name">
        Your Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Patricia Persona"
          className="pl-1"
        />
      </label>

      <label className="grid grid-cols-2" htmlFor="email">
        Your Email Address:
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@contact.com"
          className="pl-1"
        />
      </label>

      <label className="grid grid-cols-2" htmlFor="message">
        Your Message:
        <textarea
          name="message"
          id="message"
          placeholder="Hi Nico! I've got a job you may be suitable for..."
          className="pl-1"
        />
      </label>
      <button type="submit" id="send" className="border-2 border-purple-heart-600 text-web-orange-50 bg-purple-800 p-2" onClick={sendEmail}>Send Query</button>
    </Form>
  );
}

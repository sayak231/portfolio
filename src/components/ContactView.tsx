import { useState } from "react";
import { send } from "emailjs-com";
import Shake from "../assets/icons/Shake";
import { emailJSIds } from "../constants/emailjs-constants";

const ContactView = () => {
  const { SERVICE_ID, TEMPLATE_ID, USER_ID } = emailJSIds;
  const [toSend, setToSend] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then(() => {
        setMessage("Message sent successfully!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch(() => {
        setMessage("Message failed to send!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
    setToSend({
      user_name: "",
      user_email: "",
      user_subject: "",
      message: "",
    });
  };
  return (
    <>
      <div className="left">
        <Shake className="shake" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            value={toSend.user_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            value={toSend.user_email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            value={toSend.user_subject}
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="Message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
          <span>{message}</span>
        </form>
      </div>
    </>
  );
};

export default ContactView;

import { useState } from "react";
import { send } from "emailjs-com";
import Shake from "../assets/icons/Shake";
import { emailJSIds } from "../constants/emailjs-constants";
import WaveLoader from "./WaveLoader";

const ContactView: React.FC = () => {
  const { SERVICE_ID, TEMPLATE_ID, USER_ID } = emailJSIds;
  const [toSend, setToSend] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newSendObject = { ...toSend, [e.target.name]: e.target.value };
    const flag = Object.values(newSendObject).every((value) => value !== "");
    if (flag) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
    setToSend(newSendObject);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then(() => {
        setMessage("Thank you for the message 😄");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        setLoading(false);
        setIsFormFilled(false);
      })
      .catch(() => {
        setMessage("Message failed to send 😔");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        setLoading(false);
        setIsFormFilled(false);
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
            rows={3}
            placeholder="Message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button
            className={isFormFilled ? "" : "disabled"}
            disabled={!isFormFilled}
            type="submit"
          >
            {loading ? (
              <WaveLoader height="45px" width="45px" />
            ) : (
              <span className="send-caption">Send</span>
            )}
          </button>
          <span>{message}</span>
        </form>
      </div>
    </>
  );
};

export default ContactView;

import { forwardRef } from "react";
import ContactView from "../components/ContactView";

const Contact = forwardRef<HTMLDivElement>((_, contactRef) => {
  return (
    <div ref={contactRef} id="contact">
      <ContactView />
    </div>
  );
});

export default Contact;

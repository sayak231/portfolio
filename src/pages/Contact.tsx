import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((_, contactRef) => {
  return (
    <div ref={contactRef} id="contact">
      Contact
    </div>
  );
});

export default Contact;

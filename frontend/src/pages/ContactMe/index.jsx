import React from "react";
import { useRef } from "react";
import Layout from "../../layouts";
import classes from "./contactme.module.css";

const ContactMe = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const messageRef = useRef();

  const sendContactDetails = async (dataToSend) => {
    const response = await fetch("/api/contact-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const responseBody = await response.json();
    if (!responseBody.error) {
      console.log(responseBody.message);
    }
  };

  const ContactFormSubmitHandler = (e) => {
    e.preventDefault();
    const sendingData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: contactRef.current.value,
      message: messageRef.current.value,
    };
    console.log(sendingData);
    sendContactDetails(sendingData);
  };

  return (
    <Layout>
      <section className={classes.mainSection}>
        <form onSubmit={ContactFormSubmitHandler}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" ref={nameRef} name="FullName" id="fullname" />
          <br />
          <label htmlFor="Email">email</label>
          <input type="text" ref={emailRef} name="Email" id="Email" />
          <br />
          <label htmlFor="number">Contact Number ( optional )</label>
          <input type="text" ref={contactRef} name="number" id="number" />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            ref={messageRef}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>submit</button>
        </form>
      </section>
    </Layout>
  );
};

export default ContactMe;

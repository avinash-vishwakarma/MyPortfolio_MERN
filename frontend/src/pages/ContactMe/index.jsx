import React from "react";
import { useRef } from "react";
import Container from "../../components/ui/Container";
import Layout from "../../layouts";
import classes from "./contactme.module.css";
import { Icon } from "@iconify/react";

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
      <section className={classes.contactSectionContainer}>
        <Container>
          <div className={classes.pageTitle}>
            <h1 className="blue">Contact me</h1>
            <p>
              I am available for freelance work or <br />
              job opportunities feel free to contact me
            </p>
          </div>

          <div className={classes.contentBox}>
            <section className={classes.contactDetailsSection}>
              <form
                onSubmit={ContactFormSubmitHandler}
                className={classes.contactForm_container}
              >
                <input
                  type="text"
                  ref={nameRef}
                  name="FullName"
                  id="fullname"
                  placeholder="FullName or Organization"
                />
                <input
                  type="text"
                  ref={emailRef}
                  name="Email"
                  id="Email"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  ref={contactRef}
                  name="number"
                  id="number"
                  placeholder="Contact Number ( optional )"
                />
                <textarea
                  name="message"
                  ref={messageRef}
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message..."
                ></textarea>
                <button>send message</button>
              </form>
            </section>
            <section className={classes.contactDetailsSection}>
              <div className={classes.contactDeails_box}>
                <div
                  className={`${classes.contactDetails_logoCircle} bg-extra-dark`}
                >
                  <Icon icon="material-symbols:mark-email-unread-outline" />
                </div>
                <div className={classes.contactDetails_content}>
                  <h4>Email Address</h4>
                  <p>avinashvishwakarma.code@gmail.com</p>
                </div>
              </div>
              <div className={classes.contactDeails_box}>
                <div
                  className={`${classes.contactDetails_logoCircle} bg-extra-dark`}
                >
                  <Icon icon="material-symbols:perm-phone-msg" />
                </div>
                <div className={classes.contactDetails_content}>
                  <h4>Contact Number</h4>
                  <p>+91 7000789511</p>
                </div>
              </div>
              <div className={classes.contactDeails_box}>
                <div
                  className={`${classes.contactDetails_logoCircle} bg-extra-dark`}
                >
                  <Icon icon="mdi:address-marker" />
                </div>
                <div className={classes.contactDetails_content}>
                  <h4>Home Address</h4>
                  <p>Hemunagar bilaspur ( C.G )</p>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

// const temp = (
//   <section className={classes.mainSection}>

//   </section>
// );

export default ContactMe;

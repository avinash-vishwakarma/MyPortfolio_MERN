import React from "react";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import classes from "./Dashboard.module.css";

const ContactMessages = () => {
  const { data, error, isLoading, request } = useFetch();

  useEffect(() => {
    console.log("fetching data dashboard");
    request("/api/admin-contact-message");
  }, [request]);

  return (
    <>
      {!isLoading &&
        data &&
        data.data.map((message) => {
          return (
            <div key={message._id} className={classes.messageBox}>
              <h4>{message.name}</h4>
              <h5> Email : {message.email}</h5>
              {message.number && <h5>number : {message.number} </h5>}
              <h5>message</h5>
              <p>{message.message}</p>
            </div>
          );
        })}

      {isLoading && <p>loading</p>}

      {error && <p>someting went wrong</p>}
    </>
  );
};

export default ContactMessages;

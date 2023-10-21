"use client";

import { useState } from "react";
import axios from "axios";

// Images
import contactImg from "@/assets/images/contact.jpg";

// -----------

// to handle sending form message
type serverStateType = {
  submitting: boolean;
  status?: {
    ok: boolean;
    msg: string;
  } | null;
};

type formDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialFormData: formDataType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  const [serverState, setServerState] = useState<serverStateType>({
    submitting: false,
    status: null,
  });

  /**
   * Change {formData} variable when user input data
   *
   * @param e change event in form inputs
   */
  const handleDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Handle the http request we sent to send our message (that user wrote)
   * and give message to the user to know what happened, is the message sent or not.
   *
   * @param ok if message has been sent or not
   * @param msg the message to be shown to the user
   */
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFormData(initialFormData);
    }
    setTimeout(() => {
      setServerState((prev: serverStateType) => ({ ...prev, status: null }));
    }, 3000);
  };

  /**
   * Submitting message when user clock send button.
   *
   * The user will add his formspree end point here.
   *
   * @param e form submit event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submitting Form
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xgebyqqz", // user formspree endpoint
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        handleServerResponse(true, "Message Has Been Send");
      })
      .catch((r) => {
        handleServerResponse(false, "Error occuars while sending");
      });
  };

  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            Stay in touch with as
          </h1>

          <img className="page-featured-image" src={contactImg.src} alt="" />

          <div className="one_half">
            <p>
              Bearable only through love hydrogen atoms bits of moving fluff
              culture shores of the cosmic ocean paroxysm of global death rich
              in heavy atoms with pretty stories for which there’s little good
              evidence something incredible is waiting to be known not a sunrise
              but a galaxyrise shores of the cosmic ocean inconspicuous motes.
            </p>
            <br />
            <p>
              Galaxies network of wormholes birth extraplanetary Apollonius of
              Perga adipisci velit! Muse about descended from astronomers.
            </p>
            <br />
            <p className="my-info">
              <span>Address:</span> New York, NY, United States <br />
              <span>Phone:</span> +1 234-567-890 <br />
              <span>Hours:</span> 6:00 am – 2:00 am
            </p>
            <br />

            <div className="social-holder">
              <a className="social-text" href="https://www.twitter.com/">
                TWITTER
              </a>
              <a className="social-text" href="https://www.facebook.com/">
                FACEBOOK
              </a>
              <a className="social-text" href="https://www.instagram.com/">
                INSTAGRAM
              </a>
            </div>
          </div>

          <div className="one_half last">
            <form className="contact-form" onSubmit={handleSubmit}>
              <p>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData["name"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  pattern="(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                  required
                  value={formData["email"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData["subject"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  value={formData["message"]}
                  onChange={handleDataChange}
                ></textarea>
              </p>
              <p className="contact-submit-holder">
                <input type="submit" value="SEND" />
              </p>
              {(serverState.submitting || serverState.status?.msg) && (
                <p className="respond-message">
                  {serverState.submitting
                    ? "Sending message"
                    : serverState.status
                    ? serverState.status?.msg
                    : ""}
                </p>
              )}
            </form>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {

    const defaultFormData = {name: "", email: "", message: ""};
    const [formData, setFormData] = useState(defaultFormData)
    const [hasFormSubmitted, setHasFormSubmitted] = useState(false);

    function onChange(e) {
      setFormData({...formData, [e.target.id]: e.target.value});
    }

    async function handleSubmit(e) {
      e.preventDefault();

      try {
        let res = await fetch("./contact-form.php", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        let resJson = await res.json();
        if (res.status === 200) {
          if (resJson.success) {
            setHasFormSubmitted(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    
    if (hasFormSubmitted) {
      return (
        <section className={styles["contact-form"]} id="contact">
          <div className="container">
              <h2>Thank you. I'll be in touch soon.</h2>
          </div>
        </section>
      );
    } else {
      return (
        <section className={styles["contact-form"]} id="contact">
          <div className="container">
            <h2>Wanna say hello? <span className="highlight">Contact me</span></h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles["input-group"]}>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Name"
                    value={formData.name} onChange={e => onChange(e)} />
              </div>
              <div className={styles["input-group"]}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Email"
                    value={formData.email} onChange={e => onChange(e)} />
              </div>
              <div className={styles["input-group"]}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Message"
                    value={formData.message}onChange={e => onChange(e)}>
                  </textarea>
              </div>
              <button>Send message</button>
            </form>
          </div>
        </section>
      );
    }
}

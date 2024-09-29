import React, { useState } from "react";
import "../style.css";

const Contact = () => {
  const [Val, setVal] = useState({ name: "", email: "", contact: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const dataObject = { ...Val, [e.target.name]: e.target.value };
    setVal(dataObject);
  };

  return (
    <>
      <div class="container">
        <form class="contact-form" onSubmit={handleSubmit}>
          <h1>Contact me</h1>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />

          <label for="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            required
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>

        <div class="contact-details">
          <h1>My contact info</h1>
          <div>
            <h3>Name:</h3>
            <h5>Kiran vethekar</h5>
          </div>
          <div>
            <h3>Email:</h3>
            <h5><a href="mailto:kiran.vethekar@gmail.com">kiran.vethekar@gmail.com</a></h5>
          </div>

          <div>
            <h3>Contact number:</h3>
            <h5>8329390310</h5>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Contact;

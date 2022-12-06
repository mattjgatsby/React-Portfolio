import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form className="col-5 mx-auto">
        <div className="form-group">
          <label className="custom_font_size">Email address</label>
          <input
            type="email"
            className="form-control shadow-lg p-3 bg-white rounded"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text other_font_size">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="custom_font_size">Name</label>
          <input
            type="text"
            className="form-control shadow-lg p-3 bg-white rounded"
          />
        </div>
        <div className="form-group">
          <label className="custom_font_size">Enter Message Here</label>
          <textarea
            className="form-control shadow-lg p-3 bg-white rounded"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

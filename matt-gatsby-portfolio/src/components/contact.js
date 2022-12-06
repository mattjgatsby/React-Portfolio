import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="col-5 mx-auto">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control shadow-lg p-3 bg-white rounded"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input
          type="text"
          class="form-control shadow-lg p-3 bg-white rounded"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Enter Message Here</label>
        <textarea
          class="form-control shadow-lg p-3 bg-white rounded"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Contact;

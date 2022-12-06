import React from "react";

function Contact() {
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
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control shadow-lg p-3 bg-white rounded"
          id="exampleInputPassword1"
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

import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import emailjs from 'emailjs-com'
import { Form, Input, TextArea, Button } from "semantic-ui-react"
import Swal from 'sweetalert2'

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const SERVICE_ID = "**************";
  const TEMPLATE_ID = "*******";
  const USER_ID = "****************"

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
    }
  return (
    // <div>
    //   <form className="col-5 mx-auto">
    //     <div className="form-group">
    //       <label className="custom_font_size">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control shadow-lg p-3 bg-white rounded"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //       />
    //       <small id="emailHelp" className="form-text other_font_size">
    //         We'll never share your email with anyone else.
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label className="custom_font_size">Name</label>
    //       <input
    //         type="text"
    //         className="form-control shadow-lg p-3 bg-white rounded"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label className="custom_font_size">Enter Message Here</label>
    //       <textarea
    //         className="form-control shadow-lg p-3 bg-white rounded"
    //         id="exampleFormControlTextarea1"
    //         rows="3"
    //       ></textarea>
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>

  );
}

export default Contact;

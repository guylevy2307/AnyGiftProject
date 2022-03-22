import React from "react";
import "../Styles/SignUpForm.css";
import { useState } from "react";

function SignUpForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Address</label>
        <input placeholder="Email Address"></input>
        <label htmlFor="exampleInputPassword1">Password</label>
        <input placeholder="Password"></input>
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input placeholder="Confirm Password"></input>
        <label htmlFor="exampleInputName">First Name</label>
        <input htmlFor="exampleInputName" placeholder="First Name"></input>

        <label htmlFor="exampleInputName">Last Name</label>
        <input htmlFor="exampleInputName" placeholder="Last Name"></input>

        <label htmlFor="exampleInputPhone">Phone</label>
        <input htmlFor="exampleInputPhone" placeholder="Phone" />

        <label htmlFor="exampleInputAdderss">Adderss</label>
        <input htmlFor="exampleInputAdderss" placeholder="Adderss" />

        <button>Sign Up</button>
      </div>
    </form>
  );
}

export default SignUpForm;

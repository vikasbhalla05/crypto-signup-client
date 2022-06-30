import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "../signin.css";
import { useNavigate } from 'react-router-dom';
const host = "https://crypto-sign-up.herokuapp.com";

const PersonalInfo = () => {

  let redirect = useNavigate();

  let [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    // phoneNumber: "",
    // country: "",
    // bankVer: "",
  });

  // let { step } = state;

  // let nextStep = () => {
  //   step++;
  // };

  // let prevStep = () => {
  //   step--;
  // };

  function handleChange(e) {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e) => {
    // Default options are marked with *
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({fullName: state.fullName, email: state.email,password: state.password})
    });
    let json = await response.json(); // parses JSON response into native JavaScript objects
    if(json.success){
        localStorage.setItem('token', json.authToken);
        console.log(json.authToken);
      redirect("/");
      alert("Sucessfully signed up check console")
    }
    else{
      alert("Sign up Issue");
    }
  };


  return (
    <>
      {/* <div> */}
      {/* <span onClick={step>1 && prevStep()}>back</span> */}

      {/* <p className="textRight">
          Already have an account?{" "}
          <span style={{ color: "#1565D8" }}>Sign In</span>
        </p> */}
      {/* </div> */}

      <div style={{ margin: "20px 0px" }}>
        <h1>Register Individual Account!</h1>
        <p className="textLeft">
          For the purpose of industry regulation, your details are <br />
          required.
        </p>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            className="outlined"
            name="fullName"
            label="Full Name"
            type="text"
            margin="normal"
            onChange={handleChange}
            value={state.fullName}
            required
          />
          <TextField
            className="outlined"
            name="email"
            label="Email"
            type="email"
            margin="normal"
            onChange={handleChange}
            value={state.email}
            required
          />
          <TextField
            className="outlined"
            name="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={handleChange}
            value={state.password}
            required
          />
          <FormControlLabel
            id="outlined"
            control={<Checkbox required />}
            label="I Agree to Terms & Conditions"
          />
        </div>

        <Button
        onClick={submitForm}
          type="submit"
          variant="contained"
          className="continueBtn"
          disableElevation
        >
          {" "}
          Register Account
        </Button>

        <p
          style={{
            color: "grey",
            fontSize: "10px",
            textAlign: "center",
            width: "80%",
          }}
        >
          Or
        </p>

        <Button
          variant="outlined"
          className="continueBtn"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <FaGoogle />
          <span>Register with Google</span>
        </Button>
      </Box>
    </>
  );
};

export default PersonalInfo;

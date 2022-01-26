import React from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { register } from "../../services/userServices";
import { useHistory } from 'react-router-dom'
const firstNameRegex = /^[A-Z]{1}[a-z]{1,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =
  /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
const passwordRegex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

function SignUp() {
  let history = useHistory();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [regexPattern, setRegexPattern] = React.useState({
    firstNameBorder: false,
    lastNameBorder: false,
    emailBorder: false,
    passwordBorder: false,
  });

  const [regexHelperText, setRegexHelperText] = React.useState({
    firstNameText: "Enter First Name",
    lastNameText: "Enter Last Name",
    emailText: "You can use letters, numbers & periods",
    passwordText:
      "Use 8 or more characters with a mix of letters, numbers & symbols",
  });

  const redirect = () =>{
    history.push("/SignIn")
  }
  
  function takeFirstName(e) {
    setFirstName(e.target.value);
  }

  function takeLastName(e) {
    setLastName(e.target.value);
  }

  function takeEmail(e) {
    setEmail(e.target.value);
  }

  function takePassword(e) {
    setPassword(e.target.value);
  }

  const Next = () => {
    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === ""
    ) {
      setRegexPattern((regexPattern) => ({
        ...regexPattern,
        firstNameBorder: true,
        lastNameBorder: true,
        emailBorder: true,
        passwordBorder: true,
      }));
      setRegexHelperText((regexHelperText) => ({
        ...regexHelperText,
        firstNameText: "Enter First Name",
        lastNameText: "Enter Last Name",
        emailText: "Enter Your Email",
        passwordText: "Enter The Password",
      }));
    } else {
      const firstNameValidation = firstNameRegex.test(firstName);
      const lastNameValidation = lastNameRegex.test(lastName);
      const emailValidation = emailRegex.test(email);
      const passwordValidation = passwordRegex.test(password);

      if (
        firstNameValidation &&
        lastNameValidation &&
        emailValidation &&
        passwordValidation
      ) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          firstNameBorder: false,
          lastNameBorder: false,
          emailBorder: false,
          passwordBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          firstNameText: "",
          lastNameText: "",
          emailText: "",
          passwordText: "",
        }));
      }

      if (!firstNameValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          firstNameBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          firstNameText: "Must have Atleast 1 Uppercase letter.",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          firstNameBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          firstNameText: "Enter First Name",
        }));
      }

      if (!lastNameValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          lastNameBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          lastNameText: "Must have Atleast 1 Uppercase letter.",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          lastNameBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          lastNameText: "Enter Last Name",
        }));
      }

      if (!emailValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "Email Must Contain User Name And Domain Name.",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "You can use letters, numbers & periods",
        }));
      }

      if (!passwordValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          passwordBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          passwordText:
            "Password Must Contain Atleast 1 Uppercase and Minimum 8 Characters.",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          passwordBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          passwordText:
            "Use 8 or more characters with a mix of letters, numbers & symbols",
        }));
      }
      if (
        firstNameValidation === true &&
        lastNameValidation === true &&
        emailValidation === true &&
        passwordValidation === true
      ) {
        let object = {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
        };
        register(object, (error, response) => {
          if (error) {
            console.log(error);
          } else {
            console.log(response.data);
          }
          console.log(object);
        });
      }
    }
    
  };

  return (
    <div className="body">
      <div className="signup">
        <div className="columnflex">
          <div className="img">
            <img src={require(".//image.png")} alt="google"></img>
          </div>
          <div className="text">Create your Google Account</div>
          <br />
          <div className="text1">to continue to Gmail</div>
          <br className="gap" />
          <div className="fields">
            <TextField
              id="firstname"
              label="First name"
              size="small"
              variant="outlined"
              helperText={regexHelperText.firstNameText}
              onChange={takeFirstName}
              error={regexPattern.firstNameBorder}
            />
            <TextField
              id="lastname"
              label="Last name"
              size="small"
              variant="outlined"
              helperText={regexHelperText.lastNameText}
              onChange={takeLastName}
              error={regexPattern.lastNameBorder}
            />
          </div>
          <br />
          <div className="email">
            <TextField
              id="mail"
              label="Email"
              size="small"
              variant="outlined"
              helperText={regexHelperText.emailText}
              onChange={takeEmail}
              error={regexPattern.emailBorder}
            />
          </div>
          <br />
          <div className="fields">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              size="small"
              autoComplete="current-password"
              helperText={regexHelperText.passwordText}
              onChange={takePassword}
              error={regexPattern.passwordBorder}
            />
          </div>
          <br />
          <div className="checkbox">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show password"
            />
          </div>
          <div className="button">
            <Button onClick={redirect}>Sign in instead</Button>
            <Button variant="contained" onClick={Next}>
              Next
            </Button>
          </div>
        </div>
        <div className="logo">
          <img src={require(".//signuplogo1.png")} alt="google"></img>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

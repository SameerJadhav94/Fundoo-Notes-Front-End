import React from "react";
import "./Sign_In.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const emailRegex =
  /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
const passwordRegex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [regexPattern, setRegexPattern] = React.useState({
    emailBorder: false,
    passwordBorder: false,
  });
  const [regexHelperText, setRegexHelperText] = React.useState({
    emailText: "",
    passwordText: "",
  });

  function takeEmail(e) {
    setEmail(e.target.value);
  }

  function takePassword(e) {
    setPassword(e.target.value);
  }

  const Submit = () => {
    if (email === "" && password === "") {
      setRegexPattern(regexPattern =>({
        ...regexPattern,
        emailBorder: true,
        passwordBorder: true,
      }));
      setRegexHelperText(regexHelperText => ({
        ...regexHelperText,
        emailText: "Enter Your Email",
        passwordText: "Enter The Password",
      }));
    } else {
      const emailValidation = emailRegex.test(email);
      const passwordValidation = passwordRegex.test(password);

      if (emailValidation && passwordValidation) {
        setRegexPattern(regexPattern => ({
          ...regexPattern,
          emailBorder: false,
          passwordBorder: false,
        }));
        setRegexHelperText(regexHelperText =>({
          ...regexHelperText,
          emailText: "",
          passwordText: "",
        }));
      }
      if (!emailValidation) {
        console.log("emailTest3", emailValidation);
        setRegexPattern(regexPattern =>({ ...regexPattern, emailBorder: true }));
        setRegexHelperText(regexHelperText=>({
          ...regexHelperText,
          emailText: "Enter A Valid Email",
        }));
      } else {
        console.log("emailTest2", emailValidation);
        setRegexPattern(regexPattern=>({ ...regexPattern, emailBorder: false }));
        setRegexHelperText(regexHelperText=>({ ...regexHelperText, emailText: "" }));
      }
      if (passwordValidation) {
        console.log("passwordTest2", passwordValidation);
        setRegexPattern(regexPattern=>({ ...regexPattern, passwordBorder: false }));
        setRegexHelperText(regexHelperText=>({ ...regexHelperText, passwordText: "" }));
      } else {
        console.log("passwordTest3", passwordValidation);
        setRegexPattern(regexPattern=>({ ...regexPattern, passwordBorder: true }));
        setRegexHelperText(regexHelperText=>({
          ...regexHelperText,
          passwordText:
            "Password Must Not Be Less Than 8 Characters And Must Contain One Uppercase, One Lowercase and One Numeric.",
        }));
      }
    }
  };
  return (
    <div className="body">
      <div className="Login">
        <div className="img">
          <img src={require(".//image.png")} alt="google" />
        </div>
        <div className="PageName">
          <span>Sign in</span>
        </div>
        <div className="text">
          <TextField
            id="email"
            label="Email"
            size="medium"
            variant="outlined"
            margin-bottom="10px"
            helperText={regexHelperText.emailText}
            onChange={takeEmail}
            error={regexPattern.emailBorder}
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            size="medium"
            autoComplete="current-password"
            helperText={regexHelperText.passwordText}
            onChange={takePassword}
            error={regexPattern.passwordBorder}
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <br />
        </div>
        <div className="buttons">
          <Button size="small" href="#text-buttons">
            Create account
          </Button>
          <Button size="small" onClick={Submit} variant="contained">
            Sign in
          </Button>
        </div>
        <div className="forgotPassword">
          <Button size="small" href="#text-buttons">
            Forgot password?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

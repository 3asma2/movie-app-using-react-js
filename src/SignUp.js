
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./css/style.css";
import { Container } from "react-bootstrap";

const SignUp = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPass: "",
  });

  const [err, setErr] = useState({
    nameV: null,
    emailV: null,
    usernameV: null,
    passwordV: null,
    confirmPassV: null,
  });

  const handelSubmet = (e) => {
    e.preventDefault();
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

  const changeValue = (e) => {
    if (e.target.name === "name") {
      setInfo({
        ...info,
        name: e.target.value,
      });

      setErr({
        ...err,
        nameV: e.target.value.length === 0 ? "please name is requared" : null,
      });
    } else if (e.target.name === "email") {
      setInfo({
        ...info,
        email: e.target.value,
      });

      setErr({
        ...err,
        emailV:
          e.target.value.length === 0
            ? "please email is requared"
            : !isValidEmail(e.target.value)
            ? "Provide a valid email address"
            : null,
      });
    } else if (e.target.name === "uname") {
      setInfo({
        ...info,
        username: e.target.value,
      });

      setErr({
        ...err,
        usernameV:
          e.target.value.length === 0
            ? "please username is requared"
            : hasWhiteSpace(e.target.value)
            ? "Provide username should not have spaces"
            : null,
      });
    } else if (e.target.name === "psw") {
      setInfo({
        ...info,
        password: e.target.value,
      });
      setErr({
        ...err,
        passwordV:
          e.target.value.length === 0
            ? "please password is required"
            : e.target.value.length < 8
            ? "passwoed should be equal or more than 8 character"
            : null,
      });
    }

    else if (e.target.name === "Cpsw") {
      setInfo({
        ...info,
        confirmPass: e.target.value,
      });
      setErr({
        ...err,
        confirmPassV:
          e.target.value.length === 0
            ? "please you should confirm your password"
            : e.target.value !== info.password
            ? "confirm password doesnot match password"
            : null,
      });
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e, ch) => {
    if (e.target.name === "ch") {
      setPasswordShown(!passwordShown);
    }
  };

  return (
    <>
      <Container>
        <h2 className="s1">SIGN UP</h2>

        <form onSubmit={(e) => handelSubmet(e)}>
          <div className="container">
            <label htmlFor="name">
              <b className="pp"> Your Name</b>
            </label>
            <input className="ppp"
              type="text"
              placeholder="your name"
              name="name"
              required
              value={info.name}
              onChange={(e) => changeValue(e)}
            />
            <small className="text-danger">{err.nameV}</small>
            <br />
            <label htmlFor="email">
              <b className="pp"> Your Email</b>
            </label>
            <input className="ppp"
              type="text"
              placeholder="your email"
              name="email"
              required
              value={info.email}
              onChange={(e) => changeValue(e)}
            />
            <small className="text-danger">{err.emailV}</small>
            <br />
            <label htmlFor="uname">
              <b className="pp">User Name</b>
            </label>
            <input className="ppp"
              type="text"
              placeholder="your username"
              name="uname"
              required
              value={info.username}
              onChange={(e) => changeValue(e)}
            />
            <small className="text-danger">{err.usernameV}</small>
            <br />
            <label htmlFor="psw">
              <b className="pp">Password</b>
            </label>
            <input className="ppp"
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              name="psw"
              required
              value={info.password}
              onChange={(e) => changeValue(e)}
            />
            <small className="text-danger">{err.passwordV}</small>
            <br />
            <label htmlFor="Cpsw">
              <b className="pp">Confirm Password</b>
            </label>
            <input className="ppp"
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              name="Cpsw"
              required
              value={info.confirmPass}
              onChange={(e) => changeValue(e)}
            />
            <small className="text-danger">{err.confirmPassV}</small>
            <br />
            <button type="submit">SignUp</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
  
 
  
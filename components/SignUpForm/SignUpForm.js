import Container from "../UI/Container";
import React, { useState } from "react";
import { useRef } from "react";
import LoadingState from "../UI/LoadingState";
import classes from "./SignUpForm.module.css";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

async function createUser(firstname, lastname, email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ firstname, lastname, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }

  return data;
}

const SignUpForm = () => {
  const [loadedPlace, setLoadedPlace] = useState(true);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailinputRef = useRef();
  const passwordinputRef = useRef();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredFirstName = firstnameRef.current.value;
    const enteredLastName = lastnameRef.current.value;
    const enteredEmail = emailinputRef.current.value;
    const enteredPassword = passwordinputRef.current.value;
    setLoadedPlace(false);

    const result = await createUser(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredPassword
    );
    if (!result.error) {
      router.replace("/Login");
    }
    console.log(result);
  }
  return (
    <Fragment>
      <Container>
        <div className={classes.tcont}>
          <h1 className={classes.logo}>SendCash</h1>
          <h1 className={classes.head}>Create an Account</h1>
          <p className={classes.desc}>
            Create an Account with Us to Start Experiencing Boarderless
            Payments.
          </p>
        </div>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.namecont}>
            <div className={classes.field}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                ref={firstnameRef}
                autoComplete="off"
              />
            </div>
            <div className={classes.field}>
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                ref={lastnameRef}
                autoComplete="off"
              />
            </div>
          </div>
          <div className={classes.efield}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              ref={emailinputRef}
              autoComplete="off"
            />
          </div>
          <div className={classes.efield}>
            <label htmlFor="password">Passsword</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              ref={passwordinputRef}
              autoComplete="off"
            />
          </div>
          <button>
            {loadedPlace && <span>Create Account</span>}
            {!loadedPlace && (
              <span>
                <LoadingState />
              </span>
            )}
          </button>
          <p className={classes.notice}>
            I already have an account?
            <span className={classes.noticetext}>
              <Link href="/Login">
                <a>Login</a>
              </Link>
            </span>
          </p>
        </form>
      </Container>
    </Fragment>
  );
};

export default SignUpForm;

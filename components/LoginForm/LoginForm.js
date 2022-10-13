import Container from "../UI/Container";
import classes from "./LoginForm.module.css";
import { Fragment } from "react";
import { signIn } from "next-auth/client";
import { useRef } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const emailinputRef = useRef();
  const passwordinputRef = useRef();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailinputRef.current.value;
    const enteredPassword = passwordinputRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      router.replace("/Dashboard");
    }

    console.log(result);
  }
  return (
    <Fragment>
      <Container>
        <div className={classes.tcont}>
          <h1 className={classes.logo}>SendCash</h1>
          <h1 className={classes.head}>Login to your Account</h1>
          <p className={classes.desc}>
            Welcome back! Login to your Account to continue
          </p>
        </div>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.efield}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              ref={emailinputRef}
            />
          </div>
          <div className={classes.efield}>
            <label htmlFor="password">Passsword</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              ref={passwordinputRef}
            />
          </div>
          <button>
            <span>Login</span>
          </button>
        </form>
      </Container>
    </Fragment>
  );
};

export default LoginForm;

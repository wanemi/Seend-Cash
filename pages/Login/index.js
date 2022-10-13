import Hero from "../../components/UI/Hero";
import Head from "next/head";
import classes from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={classes.signup}>
      <Head>
        <title>Login to your SendCash Account</title>
        <meta name="description" content="Login to sendCash" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <LoginForm />
    </div>
  );
};

export default Login;

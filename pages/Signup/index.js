import Hero from "../../components/UI/Hero";
import Head from "next/head";
import classes from "./SignUp.module.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Signup = () => {
  return (
    <div className={classes.signup}>
      <Head>
        <title>Create a SendCash Account</title>
        <meta
          name="description"
          content="Sign up on send cash"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <SignUpForm />
    </div>
  );
};

export default Signup;

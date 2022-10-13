import classes from "./Register.module.css";
import Link from "next/link";
import { useSession } from "next-auth/client";

const Register = () => {
  const [session, loading] = useSession();
  return (
    <section className={classes.section}>
      <p className={classes.introtext}>Getting started</p>
      <h2 className={classes.headtext}>
        Get set up and start spending with your card in minutes.
      </h2>
      <div className={classes.steps}>
        <div className={classes.box}>
          <h4>Register in minutes</h4>
          <p>
            Sign up online, or in our app with an email address, or a Google,
            Facebook or Apple account.
          </p>
        </div>
        <div className={classes.box}>
          <h4>Verify your identity</h4>
          <p>
            All you need to receive money or order a card is your government ID.
          </p>
        </div>
        <div className={classes.box}>
          <h4>Top up your account</h4>
          <p>
            You can add money using your bank account, Apple Pay, credit/debit
            card.
          </p>
        </div>
      </div>
      {!session && (
        <Link href="/Signup">
          <a>Getting started</a>
        </Link>
      )}
    </section>
  );
};

export default Register;

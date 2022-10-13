import classes from "./SixthSection.module.css";
import Link from "next/link";
import { useSession } from "next-auth/client";

const SixthSection = () => {
  const [session, loading] = useSession();
  return (
    <section className={classes.sixth}>
      <div className={classes.head}>
        <h2>Payments truly boardeless</h2>
        <p>
          Join over 2,000,000 people using SendCash to send money, pay bills and
          manage their money better today
        </p>
        {session && (
          <Link href="/Dashboard">
            <a>Dashboard</a>
          </Link>
        )}
        {!session && (
          <Link href="/Signup">
            <a>Let's get started</a>
          </Link>
        )}
      </div>
      <div className={classes.map}>
        <img src="/images/mapbase.png" alt="learn" className={classes.image} />
      </div>
    </section>
  );
};

export default SixthSection;

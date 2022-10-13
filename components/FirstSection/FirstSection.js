import classes from "./FirstSection.module.css";
import Link from "next/link";
import { useSession } from "next-auth/client";

const FirstSection = () => {
  const [session, loading] = useSession();
  return (
    <section className={classes.first}>
      <div className={classes.htext}>
        <h1>A New Era in Mobile Virtual Payment</h1>
        <p>
          Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub
          roof party. Meggings cred before they sold out messenger bag, ugh
          fashion axe Pitchfork tousled freegan asymmetrical literally twee
          Thundercats.
        </p>
        {session && (<Link href="/Dashboard">
          <a>Dashboard</a>
        </Link>)}
        {!session && (<Link href="/Signup">
          <a>Let's get started</a>
        </Link>)}
      </div>
      <div className={classes.logos}>
        <div className={classes.image}>
          <img
            src="/images/google.png"
            className={classes.brand}
            alt="google-logo"
          />
        </div>
        <div className={classes.image}>
          <img
            src="/images/microsoft.png"
            className={classes.brand}
            alt="microsoft-logo"
          />
        </div>
        <div className={classes.image}>
          <img
            src="/images/walmart.png"
            className={classes.brand}
            alt="walmart-logo"
          />
        </div>
        <div className={classes.image}>
          <img
            src="/images/fedex.png"
            className={classes.brand}
            alt="fedex-logo"
          />
        </div>
      </div>
      <div className={classes.curl}>
        <img src="/images/curl.png" className={classes.op} alt="fedex-logo" />
      </div>
    </section>
  );
};

export default FirstSection;

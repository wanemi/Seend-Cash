import DashboardHeader from "../../components/Header/DashboardHeader";
import DashboardFooter from "../../components/Footer/DashboardFooter";
import classes from "./Activity.module.css";
import { Fragment } from "react";
import Link from "next/link";

const Activity = () => {
  return (
    <Fragment>
      <DashboardHeader />
      <main>
        <section className={classes.section}>
          <div className={classes.img}>
            <img src="/images/saving.png" alt="transfer" />
          </div>
          <p className={classes.text}>
            This is where you'll see your activity and transactions.
          </p>
          <div className={classes.btn}>
            <Link href="/Dashboard/Send">
              <a>Send money</a>
            </Link>
          </div>
        </section>
      </main>
      <DashboardFooter />
    </Fragment>
  );
};

export default Activity;

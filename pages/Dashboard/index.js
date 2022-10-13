import DashboardHeader from "../../components/Header/DashboardHeader";
import Head from "next/head";
import DashboardFooter from "../../components/Footer/DashboardFooter";
import classes from "./Dashboard.module.css";
import { Fragment } from "react";
import { getSession } from "next-auth/client";
import Link from "next/link";

const Dashboard = () => {
  return (
    <Fragment>
      <DashboardHeader />
      <Head>
        <title>Send money to anywhere in the world</title>
        <meta
          name="description"
          content="The fastest and easiest way to send money to anywhere in the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <section className={classes.dashb}>
          <div className={classes.fdash}>
            <div className={classes.htext}>
              <h1>Send Money to anywhere in the world</h1>
              <p>
                Tempor, cras volutpat quam auctor. Faucibus ac consequat risus
                in egestas nam. Mauris praesent quis vitae cursus pretium sem ac
                quisque. Aliquam pulvinar amet, nisl, commodo, arcu turpis.
              </p>
            </div>
            <div className={classes.globe}>
              <img src="/images/globe.png" alt="transfer" />
            </div>
          </div>
          <div className={classes.activity}>
            <h2>Recent Activity</h2>
            <p>
              See when money comes in, and when it goes out. You'll find your
              recent SendCash activity here.
            </p>
            <Link href="/Dashboard/Activity">
              <a className={classes.sign}>Show All</a>
            </Link>
          </div>
        </section>
      </main>
      <DashboardFooter />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Dashboard;

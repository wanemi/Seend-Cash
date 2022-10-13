import classes from "./DashboardHeader.module.css";
import { useState } from "react";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ResponsiveNav from "./ResponsiveNav";
import BackDrop from "./BackDrop";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "next-auth/client";

const DashboardHeader = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  const router = useRouter();

  function logoutHandler() {
    signOut();
  }
  return (
    <Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <ResponsiveNav>
          <nav className={classes.drawer}>
            <ul className={classes.links}>
              <li>
                <Link href="/Dashboard">
                  <a className={classes.routes}>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/Dashboard/Send">
                  <a className={classes.routes}>Send</a>
                </Link>
              </li>
              <li>
                <button className={classes.sign} onClick={logoutHandler}>
                  <span >Log Out</span>
                </button>
              </li>
            </ul>
          </nav>
        </ResponsiveNav>
      )}
      <header className={classes.mainheader}>
        <div className={classes.dash}>
          <div className={classes.th}>
            <Link href="/">
              <a>SendCash</a>
            </Link>
          </div>

          <div className={classes.ditem}>
            <Link href="/Dashboard">
              <a>Dashboard</a>
            </Link>
          </div>
          <div className={classes.ditem}>
            <Link href="/Dashboard/Send">
              <a>Send</a>
            </Link>
          </div>
        </div>

        <div className={classes.ricon} onClick={openDrawer}>
          <GiHamburgerMenu className={classes.dricon} />
        </div>

        <nav className={classes.nav}>
          <ul>
            <li>
              <button className={classes.sign} onClick={logoutHandler}>
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default DashboardHeader;

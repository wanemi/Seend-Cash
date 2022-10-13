import React, { useState } from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
import BackDrop from "./BackDrop";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSession, signOut } from "next-auth/client";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  const [session, loading] = useSession();

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
              {!session && !loading && (
                <li>
                  <Link href="/Login">
                    <a className={classes.sign}>Login</a>
                  </Link>
                </li>
              )}
              {!session && !loading && (
                <li>
                  <Link href="/Signup">
                    <a className={classes.sign}>Sign Up</a>
                  </Link>
                </li>
              )}
              {session && (
                <li>
                  <Link href="/Dashboard">
                    <a className={classes.log}>Dashboard</a>
                  </Link>
                </li>
              )}
              {session && (
                <li>
                  <button className={classes.sign}onClick={logoutHandler}>
                    <span >Logout</span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </ResponsiveNav>
      )}
      <header className={classes.mainheader}>
        <div className={classes.th}>
          <Link href="/">
            <a>SendCash</a>
          </Link>
        </div>
        <div className={classes.ricon} onClick={openDrawer}>
          <GiHamburgerMenu className={classes.dricon}/>
        </div>

        <nav className={classes.nav}>
          <ul>
            {!session && !loading && (
              <li>
                <Link href="/Login">
                  <a className={classes.log2}>Login</a>
                </Link>
              </li>
            )}
            {!session && !loading && (
              <li>
                <Link href="/Signup">
                  <a className={classes.sign}>Sign Up</a>
                </Link>
              </li>
            )}
            {session && (
              <li>
                <Link href="/Dashboard">
                  <a className={classes.log2}>Dashboard</a>
                </Link>
              </li>
            )}
            {session && (
              <li>
                <button className={classes.sign} onClick={logoutHandler}>
                  <span >Logout</span>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;

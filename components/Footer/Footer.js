import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.fline2}>
        <h1>SendCash</h1>
        <p>Copyright © 2022 SendCash</p>
        <p>All rights reserved</p>
      </div>
      <div className={classes.fline}>
        <h2>Company</h2>
        <p>About Us</p>
        <p>Terms</p>
        <p>Pricing</p>
        <p>Blog</p>
      </div>
      <div className={classes.fline}>
        <h2>Support</h2>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
      </div>
      <div className={classes.fline}>
        <h2>Stay Up todate</h2>
      </div>
    </footer>
  );
};

export default Footer;

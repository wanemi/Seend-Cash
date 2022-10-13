import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.curl}>
        <img src="/images/curl.png" className={classes.op} alt="fedex-logo" />
      </div>
    </div>
  );
};

export default Hero;

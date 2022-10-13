import classes from "./ThirdSection.module.css";

const ThirdSection = () => {
  return (
    <section className={classes.third}>
      <h1>Send Money to anywhere in the world at anytime</h1>
      <div>
        <img src="/images/mapbase.png" alt="learn" className={classes.map}/>
      </div>
    </section>
  );
};

export default ThirdSection;

import classes from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <section className={classes.second}>
      <h2>Welcome to boardeless payment</h2>
      <p>Explore the abilities of payment boarderlessly</p>
      <div className={classes.boder}>
        <div className={classes.service}>
          <div className={classes.option}>
            <div className={classes.imgcont}>
              <img
                src="/images/transfer.png"
                className={classes.element}
                alt="transfer"
              />
            </div>
            <div className={classes.text}>
              <h3>Boardeless Transfers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum porta magna at blandit a.
              </p>
            </div>
          </div>
          <div className={classes.option}>
            <div className={classes.imgcont}>
              <img
                src="/images/bill.png"
                className={classes.element}
                alt="bill"
              />
            </div>
            <div className={classes.text}>
              <h3>Pay Utility bills</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum porta magna at blandit a.
              </p>
            </div>
          </div>
          <div className={classes.option}>
            <div className={classes.imgcont}>
              <img
                src="/images/head.png"
                className={classes.element}
                alt="header"
              />
            </div>
            <div className={classes.text}>
              <h3>Headline</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum porta magna at blandit a.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.mapcont}>
          <img src="/images/map.png" className={classes.earth} alt="learn" />
          <div className={classes.person1}>
            <img src="/images/Ellipse 7.png" alt="learn" />
          </div>
          <div className={classes.person2}>
            <img src="/images/Ellipse 8.png" alt="learn" />
          </div>
          <div className={classes.person3}>
            <img src="/images/Ellipse 9.png" alt="learn" />
          </div>
          <div className={classes.person4}>
            <img src="/images/Ellipse 10.png" alt="learn" />
          </div>
          <div className={classes.person5}>
            <img src="/images/Ellipse 16.png" alt="learn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

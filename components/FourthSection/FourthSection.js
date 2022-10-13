import classes from "./FourthSection.module.css";

const FourthSection = () => {
  return (
    <section className={classes.fourth}>
      <div className={classes.ellips}>
        <img src="/images/Logos.png" alt="learn" className={classes.space} />
      </div>
      <div className={classes.services}>
        <h3>Welcome to boardeless payment</h3>
        <p>Explore the abilities of payment boarderlessly</p>
        <div className={classes.service}>
          <div className={classes.option}>
            <div className={classes.imgcont}>
              <img src="/images/transfer.png" alt="transfer" className={classes.element}/>
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
              <img src="/images/bill.png" alt="bill" className={classes.element}/>
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
              <img src="/images/head.png" alt="header" className={classes.element}/>
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
      </div>
    </section>
  );
};

export default FourthSection;

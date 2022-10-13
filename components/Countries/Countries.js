import classes from "./Countries.module.css";
import BackDrop from "../UI/BackDrop";
import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Countries = (props) => {
  return (
    <Fragment>
      <BackDrop onClick={props.onClick}>
        <section className={classes.modal}>
          <h2>Select Currency</h2>
          <ul>
            <li>
              <button onClick={props.Gbp} className={classes.btn}>
                <div className={classes.flag}>
                  <div className={classes.img}>
                    <img
                      src="/images/UK.png"
                      className={classes.girl}
                      alt="transfer"
                    />
                  </div>
                  <span>GBP</span>
                </div>
                <IoIosArrowForward />
              </button>
            </li>
            <li>
              <button onClick={props.Usd} className={classes.btn}>
                <div className={classes.flag}>
                  <div className={classes.img}>
                    <img
                      src="/images/usa.png"
                      className={classes.girl}
                      alt="transfer"
                    />
                  </div>
                  <span>USD</span>
                </div>
                <IoIosArrowForward />
              </button>
            </li>
            <li>
              <button onClick={props.Ngn} className={classes.btn}>
                <div className={classes.flag}>
                  <div className={classes.img}>
                    <img
                      src="/images/NIG.png"
                      className={classes.girl}
                      alt="transfer"
                    />
                  </div>
                  <span>NGN</span>
                </div>
                <IoIosArrowForward />
              </button>
            </li>
            <li>
              <button onClick={props.Cad} className={classes.btn}>
                <div className={classes.flag}>
                  <div className={classes.img}>
                    <img
                      src="/images/CAD.png"
                      className={classes.girl}
                      alt="transfer"
                    />
                  </div>
                  <span>CAD</span>
                </div>
                <IoIosArrowForward />
              </button>
            </li>
            <li>
              <button onClick={props.Bra} className={classes.btn}>
                <div className={classes.flag}>
                  <div className={classes.img}>
                    <img
                      src="/images/BRA.png"
                      className={classes.girl}
                      alt="transfer"
                    />
                  </div>
                  <span>R$</span>
                </div>
                <IoIosArrowForward />
              </button>
            </li>
          </ul>
        </section>
      </BackDrop>
    </Fragment>
  );
};

export default Countries;

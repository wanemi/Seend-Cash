import { useState } from "react";
import DashboardHeader from "../../components/Header/DashboardHeader";
import Head from "next/head";
import DashboardFooter from "../../components/Footer/DashboardFooter";
import classes from "./Send.module.css";
import { Fragment } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Countries from "../../components/Countries/Countries";

const Send = () => {
  const [show, setShow] = useState(false);
  const [showUs, setShowUs] = useState(false);
  const [showCad, setShowCad] = useState(false);
  const [showNgn, setShowNgn] = useState(false);
  const [showGbp, setShowGbp] = useState(false);
  const [showBra, setShowBra] = useState(false);

  const Gbp = (event) => {
    event.preventDefault();
    setShowNgn(true);
    setShowCad(false);
    setShow(false);
    setShowUs(false);
    setShowBra(false);
    setShowGbp(true);
  };

  const Bra = (event) => {
    event.preventDefault();
    setShowNgn(true);
    setShowCad(false);
    setShow(false);
    setShowUs(false);
    setShowBra(true);
    setShowGbp(false);
  };

  const Usd = (event) => {
    event.preventDefault();
    setShowNgn(true);
    setShowCad(false);
    setShow(false);
    setShowGbp(false);
    setShowBra(false);
    setShowUs(true);
  };

  const Cad = (event) => {
    event.preventDefault();
    setShowNgn(true);
    setShowUs(false);
    setShowGbp(false);
    setShow(false);
    setShowBra(false);
    setShowCad(true);
  };

  const Ngn = (event) => {
    event.preventDefault();
    setShowUs(false);
    setShowCad(false);
    setShow(false);
    setShowGbp(false);
    setShowBra(false);
    setShowNgn(false);
  };

  const ShowCountries = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const HideCountries = () => {
    setShow(false);
  };

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
        <section className={classes.send}>
          <h2>Send Money TO Anywhere In The World</h2>
          <p>
            Fast, affordable online money transfers to anywhere in the world.
          </p>
          <div>
            <form className={classes.form}>
              <div className={classes.incontainer}>
                <div className={classes.amount}>
                  <label htmlFor="amount-to-send">You send exactly</label>
                  <input type="text" autoComplete="off" />
                </div>
                <div>
                  <button
                    disable
                    onClick={ShowCountries}
                    className={classes.btn}
                  >
                    {showUs && (
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
                    )}
                    {!showNgn && (
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
                    )}

                    {showCad && (
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
                    )}
                    {showBra && (
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
                    )}
                    {showGbp && (
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
                    )}
                    <RiArrowDropDownLine className={classes.dicon} />
                  </button>
                </div>
              </div>
              <div className={classes.incontainer}>
                <div className={classes.amount}>
                  <label htmlFor="amount-to-send">Recepient gets</label>
                  <input type="text" autoComplete="off" />
                </div>
                <div>
                  <button disable="true" className={classes.btn}>
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

                    <RiArrowDropDownLine className={classes.dicon} />
                  </button>
                </div>
              </div>
              <button disable="false" className={classes.cta}>
                <span>Continue</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <DashboardFooter />
      {show && (
        <Countries
          onClick={HideCountries}
          Usd={Usd}
          Cad={Cad}
          Ngn={Ngn}
          Gbp={Gbp}
          Bra={Bra}
        />
      )}
    </Fragment>
  );
};

export default Send;

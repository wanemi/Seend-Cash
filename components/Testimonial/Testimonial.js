import classes from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <section className={classes.review}>
      <div className={classes.head}>
        <h3>Hear from Our Users</h3>
        <p>Hear first hand from our users around the world!</p>
      </div>
      <div className={classes.testimonies}>
        <div className={classes.reviewBox}>
          <div className={classes.box}>
            <h4>Efficient Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
            </p>
          </div>
          <div className={classes.person}>
            <img
              src="/images/test.png"
              alt="transfer"
            />
          </div>
          <div className={classes.name}>
            <h4>Nelson John</h4>
            <p>CEO Premier Capital</p>
          </div>
        </div>
        <div className={classes.reviewBox}>
          <div className={classes.box}>
            <h4>Intuitive Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
            </p>
          </div>
          <div className={classes.person}>
            <img
              src="/images/test2.png"
              alt="transfer"
            />
          </div>
          <div className={classes.name}>
            <h4>Nelson John</h4>
            <p>CEO Premier Capital</p>
          </div>
        </div>
        <div className={classes.reviewBox}>
          <div className={classes.box}>
            <h4>Mindblowing Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
            </p>
          </div>
          <div className={classes.person}>
            <img
              src="/images/test2.png"
              alt="transfer"
            />
          </div>
          <div className={classes.name}>
            <h4>Nelson John</h4>
            <p>CEO Premier Capital</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

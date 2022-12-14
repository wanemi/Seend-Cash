import classes from "./BackDrop.module.css";

const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default BackDrop;
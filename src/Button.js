import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }){
    return (
        <button className={styles.btn}
            // 기존 인라인 버전
            // style={{
            // backgroundColor:"blue",
            // color: "yellow",
            // }}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;
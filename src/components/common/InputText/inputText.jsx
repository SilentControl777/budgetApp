import PropTypes from 'prop-types';
import styles from './inputText.module.css';

const inputText = ({ labelFor, type = 'text', labelName, variant = 'primary', inputId, inputName, placeholder }) => {

    const inputTextClass = `${styles.inputText} ${styles[variant]}`;

    return (
        <div className={inputTextClass}>
            <label htmlFor={labelFor}>{labelName}</label>
            <input type={type} id={inputId} name={inputName} placeholder={placeholder} />
        </div>
    );
};

inputText.propTypes = {
    labelFor: PropTypes.node,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
    labelName: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    inputId: PropTypes.node,
    inputName: PropTypes.node,
    placeholder: PropTypes.node,
};

export default inputText;

// src/components/Button.jsx
import PropTypes from 'prop-types';

const Button = ({ label, color }) => {
  return (
    <button style={{ ...styles.button, backgroundColor: color }}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const styles = {
  button: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Button;

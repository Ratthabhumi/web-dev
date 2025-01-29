// Banner.jsx
import PropTypes from 'prop-types';
import './Banner.css'; // Assuming you have some CSS styles

const Banner = ({ title, message, buttonText }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{message}</p>
      <button>{buttonText}</button>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Banner;

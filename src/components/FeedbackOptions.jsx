import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button
        onClick={() => {
          onLeaveFeedback(options[0]);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onLeaveFeedback(options[1]);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onLeaveFeedback(options[2]);
        }}
      >
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

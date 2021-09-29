import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [
    colorForm,
    change,
    resetColorForm,
  ] = useForm({
    name: '', hexcode: '',
  });

  const submitColor = () => {

    onSubmitColor({ ...colorForm });

    resetColorForm();
  };

  return (
    <form>
      <label>
        Color Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Color Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  )

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitColor: PropTypes.func.isRequired,
};
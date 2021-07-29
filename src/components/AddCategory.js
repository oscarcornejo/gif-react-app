import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((items) => [inputValue, ...items]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input type="text" value={inputValue} onChange={(e) => handleInputChange(e)} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

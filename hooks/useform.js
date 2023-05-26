import { useState } from "react";

/**
 * React hook for form submittion with validation options
 * @param {Function} handleSubmit function to handle submit event and default prevention
 * @param {Boolean} useValidation option to activate form fields validation
 * @param {Function} handleValidation function to validate fields. Must return boolean value.
 * @return {Object} Data from form, onSubmit handler
 */
export default function useForm({
  handleSubmit = () => {},
  useValidation = false,
  handleValidation = () => {}
}) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // handle validation
    if (useValidation && !handleValidation(formData)) {
      handleSubmit(null);
      return;
    }
    handleSubmit(e);
  };
  return {
    formData,
    onSubmit,
    bind: {
      onChange: handleChange,
    //   className: "react-form-input"
    }
  };
}

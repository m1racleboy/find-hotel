import { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (evt) => {
    setValue(evt.target.value);
    console.log(valid.inputValid);
  };

  const onBlur = (evt) => {
    setDirty(true);
    if(!valid.inputValid) {
      evt.target.classList.add('input--error');
    }
    else {
      evt.target.classList.remove('input--error');
    }
  };

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
  };
};

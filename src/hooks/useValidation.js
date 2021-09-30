import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [spaceError, setSpaceError] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail': {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        }
        case 'isDate': {
          const re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
          re.test(String(value)) ? setDateError(false) : setDateError(true);
          break;
        }
        case 'isOnlySpace': {
          const re = /[ ]/;
          re.test(value) ? setSpaceError(true) : setSpaceError(false);
          break;
        }
        default: return;
      }
    }
  }, [value]);

  useEffect(() => {
    isEmpty || minLengthError || maxLengthError || emailError || spaceError ? setInputValid(false) : setInputValid(true);
  }, [isEmpty, minLengthError, maxLengthError, emailError, spaceError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    spaceError,
    dateError,
    inputValid,
  };
};

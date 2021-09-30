import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isDate, setDateError] = useState(false);
  const [numbersError, setNumbersError] = useState(false);
  const [spaceError, setSpaceError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

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
        case 'isPassword': {
          const re = /[а-яА-ЯёЁ]/;
          re.test(String(value).toLowerCase()) ? setPasswordError(true) : setPasswordError(false);
          break;
        }
        case 'isDate': {
          const re = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
          re.test(String(value)) ? setDateError(false) : setDateError(true);
          break;
        }
        case 'isOnlyNumbers': {
          const re = /^(\d){1,3}$/;
          re.test(+String(value)) ? setNumbersError(false) : setNumbersError(true);
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
    isEmpty || minLengthError || maxLengthError || emailError || passwordError || isDate || numbersError || spaceError ? setInputValid(false) : setInputValid(true);
  }, [isEmpty, minLengthError, maxLengthError, emailError, passwordError, isDate, numbersError, spaceError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    passwordError,
    isDate,
    numbersError,
    spaceError,
    inputValid,
  };
};

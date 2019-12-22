export function validateEmail(email) {
  if (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(email);
  } else {
    return false;
  }
}

export function lettersWithSpace(value) {
  if (value) {
    const re = /^[a-zA-Z- ']+$/;

    return !re.test(value);
  } else {
    return false;
  }
}

export function onlyLetters(value) {
  if (value) {
    const re = /^[a-zA-Z ]+$/;

    return !re.test(value);
  } else {
    return false;
  }
}
export function nameValidation(value) {
  if (value) {
    const re = /[A-Za-z]+/;
    return !re.test(value);
  } else {
    return false;
  }
}
export function validatePasswordForSignup(password) {
  if (
    !/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/.test(
      password
    )
  ) {
    return false;
  } else {
    return true;
  }
}

export function isEmpty(value) {
  if (!value) {
    return false;
  }
  return value.length === 0;
}

export function validatePhone(phone) {
  if (phone) {
    const phoneRegex = /^[6,7,8,9]{1}[0-9]{9}$/;
    return !phoneRegex.test(phone);
  } else {
    return false;
  }
}

export function validateDate(date) {
  if (date) {
    const { year, month, day } = date;
    return !(year.key && month.key && day.key);
  } else {
    return false;
  }
}

export function onlyNumbers(value) {
  if (value) {
    const re = /^[0-9 ]+$/;

    return !re.test(value);
  } else {
    return false;
  }
}

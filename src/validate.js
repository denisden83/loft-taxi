export function passwordIsValid(password) {
  return /^123123$/.test(password);
}

export function emailIsValid(email) {
  return /^test@test.com$/.test(email);
}

export const validate = (name, value) => {
  switch (name) {
    case "email":
      if (!emailIsValid(value)) return "email should be test@test.com";
      break;
    case "firstName":
      if (!value) return "first Name is required";
      break;
    case "lastName":
      if (!value) return "last Name is required";
      break;
    case "password":
      if (!passwordIsValid(value)) {
        return "password should be 123123";
      }
      break;
    default:
      return;
  }
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

const isValidUsername = (username: string): boolean => {
  return username.length >= 3;
};

const hasEmptyFields = (fields: Record<string, string>): boolean => {
  return Object.values(fields).some((value) => !value);
};

export {
  isValidEmail,
  isValidPassword,
  isValidUsername,
  hasEmptyFields,
}
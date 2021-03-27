module.exports = {
  create: (success, message, data, errorMessage) => {
    return {
      success,
      message,
      data,
      errorMessage,
    };
  },
  ERRORS: {
    INVALID_CODE: 'invalid code',
    EMAIL_ALREADY_USED: 'email already used',
    DB_ERROR: 'database error',
    AUTH_ERROR: 'authentication error',
  },
};

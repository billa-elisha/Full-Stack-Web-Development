class CustomError extends Error {
  constructor(message, code) {
    super(message); //we are overriding the default message from the error
    this.code = code; // the status code of the error
  }
}
export default CustomError;

// this is a higher order function that will take all the function in
// the controller as a variable. this is use to help us not repeat async and awiate on every
// function in the controllers
const asynHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export default asynHandler;

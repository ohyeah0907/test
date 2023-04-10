import 'dotenv/config';
/**
 * Description
 * @param {Object} res
 * @param {Object} data=undefined
 * @returns {Object}
 */
const success = (res, data = undefined) => {
  return res.status(200).json({
    success: true,
    data,
  });
};

/**
 * Description
 * @param {Object} res
 * @param {Object} error
 * @param {Number} status=200
 * @returns {Object}
 */
const error = (res, error, status = 200) => {
  let message = error?.message;
  message = message.replace(/"/g, "").replace(/'/g, "");
  
  return res.status(status).json({
    success: false,
    error: { message },
    stack: process.env.NODE_ENV == "development" ? error.stack : {}
  });
};

const ResponseHandler = {
    success,
    error,
}

export default ResponseHandler

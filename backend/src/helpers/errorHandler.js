import ResponseHandler from "./responseHandler.js"

const errorHandler = (error, req, res, next) => {
    ResponseHandler.error(res, error);
}

export default errorHandler;
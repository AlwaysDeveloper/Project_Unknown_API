export default class AppError extends Error {
    isOperational: boolean;
    status: string;
    statusCode: Number;
    constructor(message: string, statusCode: Number) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
}
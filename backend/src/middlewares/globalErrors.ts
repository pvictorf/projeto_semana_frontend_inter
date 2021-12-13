import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/error/AppError';

// Necessário adicionar o express-async-error para lidar com erros de forma assincrona
// yarn add express-async-errors

function globalErrors(err: Error, request: Request, response: Response, next: NextFunction) {
  if(err instanceof AppError) {
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      data: err?.data
    });
  }

  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}

export default globalErrors
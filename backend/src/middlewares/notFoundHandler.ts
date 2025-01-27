import type { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(createHttpError(404, 'Route not found'));
};

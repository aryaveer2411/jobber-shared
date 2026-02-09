import { NextFunction } from 'express';

type AsyncHandler = (req: Request, res: Response, next: any) => Promise<any>;

export const asyncHandler =
  (fnc: AsyncHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fnc(req, res, next);
    } catch (e) {
      next(e);
    }
  };

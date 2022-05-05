// eslint-disable-next-line import/no-import-module-exports
import { Request, Response } from 'express';

const logout = (req: Request, res: Response) => {
  res.clearCookie('token').json({ message: 'logged out successfully' });
};

module.exports = { logout };

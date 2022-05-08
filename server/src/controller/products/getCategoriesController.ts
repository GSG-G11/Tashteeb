import { Request, Response } from 'express';
import { Category } from '../../database';

const getCategories = async (req:Request, res:Response) => {
  try {
    const categories = await Category.findAll();
    res.json({ status: 200, data: categories });
  } catch (error : any) {
    throw new Error('error here!');
  }
};

export default getCategories;

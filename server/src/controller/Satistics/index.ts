import { Request, Response } from 'express';
import {
  User, Product, Order, HiringOrder, sequelize, Category,
} from '../../database';
import { USER, ENGINEER } from '../../database/models/User';
import handleUnknownExceptions from '../../error/handleUnkownError';

interface IReqUser extends Request {
    user?: any;
  }

const getSatistics = async (req: IReqUser, res: Response) => {
  try {
    const [user, engineer, product, order,
      hiringOrder, productCategory, dataByMonth] = await Promise.all([
      User.count({ where: { role: USER } }),
      User.count({ where: { role: ENGINEER } }),
      Product.count(),
      Order.count(),
      HiringOrder.count(),
      Category.findAll({
        attributes: ['id', 'name', [sequelize.fn('count', sequelize.col('"products"."id"')), 'number']],
        include: [{ model: Product, attributes: [] }],
        group: ['category.id'],
      }),
      Order.findAll({
        attributes: [[sequelize.fn('TO_CHAR', sequelize.col('createdAt'), 'MONTH'), 'month'],
          [sequelize.fn('count', sequelize.col('id')), 'count']],
        group: ['month'],
      }),
    ]);
    res.json({
      status: 200,
      data: {
        user,
        engineer,
        product,
        order,
        hiringOrder,
        orderMonth: dataByMonth,
        productCountByCategory: productCategory,
      },
      message: 'success get all data',
    });
  } catch (err: any) {
    handleUnknownExceptions(err, res);
  }
};

export default getSatistics;

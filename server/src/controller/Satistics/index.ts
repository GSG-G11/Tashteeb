import { Request, Response } from 'express';
import {
  User, ProductOrder, Product, Order, HiringOrder, sequelize, Category,
} from '../../database';
import handleUnknownExceptions from '../../error/handleUnkownError';

interface IReqUser extends Request {
    user?: any;
  }

const getSatistics = async (req: IReqUser, res: Response) => {
  try {
    const [user, productOrder, product, order,
      hiringOrder, productCategory, dataByMonth] = await Promise.all([
      User.count(),
      ProductOrder.count(),
      Product.count(),
      Order.count(),
      HiringOrder.count(),
      await Category.findAll({
        attributes: ['id', 'name', [sequelize.fn('count', sequelize.col('"products"."id"')), 'number']],
        include: [{ model: Product, attributes: [] }],
        group: ['category.id'],
      }),
      await Order.findAll({
        attributes: [[sequelize.fn('TO_CHAR', sequelize.col('createdAt'), 'MONTH'), 'month'],
          [sequelize.fn('count', sequelize.col('id')), 'count']],
        group: ['month'],
      }),
    ]);
    res.json({
      status: 200,
      data: {
        user,
        productOrder,
        product,
        order,
        hiringOrder,
        orderMonth: dataByMonth,
        productCountByCategory: productCategory,
      },
      message: 'success get all data',
    });
  } catch (err: any) {
    console.log(err);
    handleUnknownExceptions(err, res);
  }
};

export default getSatistics;

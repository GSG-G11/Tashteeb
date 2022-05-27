/* eslint-disable max-len */
import { Request, Response } from 'express';
import { Order, ProductOrder } from '../../database';
import errorHandler from '../../error';

interface IReqUser extends Request {
  user?: any;
}

export default async (req: IReqUser, res: Response) => {
  try {
    const totalPrice = req.body.products.reduce((acc: any, cur: { price: any; quantity: any; }) => acc + cur.price * cur.quantity, 0);
    const order = await Order.create({
      userId: +req.user.id,
      totalPrice: +totalPrice,
    });
    const orderId = order.id;
    const productOrder = await ProductOrder.bulkCreate(
      req.body.products.map((product: { id: number; quantity: number; price : number }) => ({
        orderId,
        productId: product.id,
        quantity: product.quantity,
        subtotalPrice: product.price * product.quantity,
      })),
    );

    res.status(200).json({
      message: 'Cart checkouted successfully',
      productOrder,
    });
  } catch (error: any) {
    errorHandler(error, res);
  }
};

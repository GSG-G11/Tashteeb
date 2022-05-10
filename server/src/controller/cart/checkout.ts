/* eslint-disable max-len */
import { Request, Response } from 'express';
import { Order, ProductOrder } from '../../database';

interface IReqUser extends Request {
  user: any;
}

export default async (req: IReqUser, res: Response) => {
  try {
    const totalPrice = req.body.products.reduce((acc: number, cur: { price: number; quantity: number; }) => acc + cur.price * cur.quantity, 0);
    const order = await Order.create({
      userId: req.user.id,
      totalPrice,
    });
    const orderId = order.id;
    const productOrder = await ProductOrder.bulkCreate(
      req.body.products.map((product: { id: any; quantity: any; price : any }) => ({
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
    res.status(500).json({
      message: 'Error while checking out cart',
    });
  }
};

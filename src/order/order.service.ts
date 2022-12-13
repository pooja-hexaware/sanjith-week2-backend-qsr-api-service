import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrderRepo } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepo
  ) { }

  create(order: Order) {
    return this.orderRepo.create(order);
  }

  findAll() {
    return this.orderRepo.findAll();
  }

  findOne(id: string) {
    return this.orderRepo.findById(id);
  }

  update(id: string, updatedOrder: Order) {
    return this.orderRepo.update(id, updatedOrder);
  }

  remove(id: string) {
    return this.orderRepo.remove(id);
  }
}

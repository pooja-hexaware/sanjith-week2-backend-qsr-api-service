import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./entities/order.entity";

@Injectable()
export class OrderRepo {
    constructor(@InjectModel(Order.name) private orderRepo: Model<OrderDocument>) { }

    async create(order: Order): Promise<Order> {
        return this.orderRepo.create(order);
    }

    async findAll(): Promise<Order[]> {
        return this.orderRepo.find();
    }

    async findById(id: string): Promise<Order> {
        return this.orderRepo.findById(id);
    }

    async update(id: string, updatedOrder: Order): Promise<Order> {
        return this.orderRepo.findByIdAndUpdate({ _id: id }, updatedOrder);
    }

    async remove(id: string): Promise<Order> {
        return this.orderRepo.findByIdAndDelete({ _id: id });
    }
}

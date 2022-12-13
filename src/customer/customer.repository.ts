import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer, CustomerDocument } from "./entities/customer.entity";

@Injectable()
export class CustomerRepo {
    constructor(@InjectModel(Customer.name) private customerRepo: Model<CustomerDocument>) { }

    async create(customer: Customer): Promise<Customer> {
        return this.customerRepo.create(customer);
    }

    async findAll(): Promise<Customer[]> {
        return this.customerRepo.find();
    }

    async findById(id: string): Promise<Customer> {
        return this.customerRepo.findById(id);
    }

    async update(id: string, updatedCustomer: Customer): Promise<Customer> {
        return this.customerRepo.findByIdAndUpdate({ _id: id }, updatedCustomer);
    }

    async remove(id: string): Promise<Customer> {
        return this.customerRepo.findByIdAndDelete({ _id: id });
    }
}

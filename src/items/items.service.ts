import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item as ItemInterface } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  findOne(id: string): Promise<Item> {
    return this.itemModel.findOne({ _id: id }).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async update(id: string, updateItemDto: CreateItemDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, updateItemDto).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id).exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IList } from './schemas/list.schema';

@Injectable()
export class ListService {

    constructor(@InjectModel('List') private readonly listModel: Model<IList>){}

async getList(): Promise<IList[]>{
    return await this.listModel.find().select({title:1})
}

async getById(_id): Promise<IList>{
    return await this.listModel.findById( _id )
}

 async insertListOfQuestions(data: IList): Promise<IList>{
    const newList = new this.listModel(data);
    return await newList.save();
 }

async updateListById(list): Promise<IList>{
    return this.listModel.findByIdAndUpdate({_id: list._id}, list)
}

async deleteById(_id): Promise<IList>{
    return await this.listModel.findByIdAndDelete( _id )
}

}

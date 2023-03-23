import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Model } from 'mongoose';
import { Blog,BlogDocument } from 'src/schemas/blog.schema';

@Injectable()
export class BlogsService {

  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}
 async create(createBlogDto: CreateBlogDto) {
    return new this.blogModel(createBlogDto).save();
  }

 async findAll() {
    return this.blogModel.find();
  }

  findOne(id: string) {
    return this.blogModel.findOne({ _id:id });
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.blogModel.updateOne({_id:id},{$set:{...updateBlogDto}});
  }

  remove(id: string) {
    return this.blogModel.deleteOne({_id:id});
  }
}

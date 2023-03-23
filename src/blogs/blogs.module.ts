import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { Blog,BlogSchema } from 'src/schemas/blog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name:Blog.name, schema: BlogSchema }])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}

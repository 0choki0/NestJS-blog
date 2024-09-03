import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';
import { BlogService } from './blog.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://wlgh0324:0anffl1010!@test-cluster.td9gu.mongodb.net/?retryWrites=true&w=majority&appName=test-Cluster/blog',
    ),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema}])
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})

export class AppModule {}
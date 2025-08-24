import { Module } from '@nestjs/common';
import { PostServiceController } from './post-service.controller';
import { PostServiceService } from './post-service.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';

// (Optional) define Post schema file and import it
// import { Post, PostSchema } from './schema/post.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.resolve(process.cwd(), '.env')],
    }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI')!,
        dbName: config.get<string>('DB_NAME')!,
      }),
    }),

    // MongooseModule.forFeature([{ name: Post.name, schema: PostSchema, collection: 'posts' }]),
  ],
  controllers: [PostServiceController],
  providers: [PostServiceService],
})
export class PostServiceModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/Users.model';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/nestjs_tutorial'),
    MongooseModule.forRoot('mongodb://127.0.0.1/nestjs_tutorial'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose'
import { ListModule } from './list/list.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://anton:dbpswrd@cluster0.bp1dl.mongodb.net/bootstarp'), ListModule],
  controllers: [AppController],             
  providers: [AppService],
})
export class AppModule {}

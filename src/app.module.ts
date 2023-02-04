import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './students/StudentController';

@Module({
  imports: [],
  controllers: [AppController,StudentController],
  providers: [AppService],
})
export class AppModule {}

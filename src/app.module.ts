import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoverageModule } from './coverage/coverage.module';
import { FrontendController } from './frontend/frontend.controller';

@Module({
  imports: [CoverageModule],
  controllers: [AppController, FrontendController],
  providers: [AppService],
})
export class AppModule {}

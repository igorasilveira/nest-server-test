import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetricsModule } from './metrics/metrics.module';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [MetricsModule, YoutubeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

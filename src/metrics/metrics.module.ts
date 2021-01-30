import { HttpModule, Module } from '@nestjs/common';
import { YoutubeService } from 'src/youtube/youtube.service';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';

@Module({
  controllers: [MetricsController],
  providers: [MetricsService],
  imports: [YoutubeService],
})
export class MetricsModule {}

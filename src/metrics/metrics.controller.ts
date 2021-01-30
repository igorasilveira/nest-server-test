import { Controller, Get } from '@nestjs/common';
import { YoutubeService } from 'src/youtube/youtube.service';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get()
  getMetrics() {
    return this.metricsService.getMetrics();
  }
}

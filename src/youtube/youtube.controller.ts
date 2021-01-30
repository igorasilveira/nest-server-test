import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private youtubeService: YoutubeService) {}

  @Get()
  async getMetrics(): Promise<Observable<AxiosResponse<any>>> {
    return this.youtubeService.getMetrics();
  }
}

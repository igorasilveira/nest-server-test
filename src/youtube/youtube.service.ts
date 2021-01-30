import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeService {
  constructor(private httpService: HttpService) {}

  async getMetrics(): Promise<Observable<AxiosResponse<any>>> {
    // return new Promise((resolve) => true);
    return this.httpService.get('/channels', {
      params: {
        part: 'snippet%2CcontentDetails%2Cstatistics',
        id: process.env.CHANNEL_ID,
        key: process.env.YOUTUBE_API_KEY,
      },
    });
  }
}

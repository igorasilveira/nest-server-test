import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricsService {
  async getMetrics() {
    return 'ola';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlShortenerService {
  getHello(): string {
    return 'URL Shortener Service';
  }

  getFromId(id: string): string {
    return id;
  }
}

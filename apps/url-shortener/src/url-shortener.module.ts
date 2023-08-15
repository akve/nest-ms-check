import { Module } from '@nestjs/common';
import { UrlShortenerController } from './url-shortener.controller';
import { UrlShortenerService } from './url-shortener.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
})
export class UrlShortenerModule {}

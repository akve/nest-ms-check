import { Controller, Get, Logger, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

interface CreateUrlDto {
  url: string;
}
@Controller()
export class UrlShortenerController {
  protected readonly logger = new Logger('SHORTENER');
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Get()
  getHello(): string {
    return this.urlShortenerService.getHello();
  }

  @Get('/k/:id')
  async getFromId(@Param('id') id: string) {
    this.logger.log('ID', id);
    return this.urlShortenerService.getFromId(id);
  }

  @UsePipes(new ValidationPipe())
  @MessagePattern('create')
  // @EventPattern('create_url')
  async createUrl(@Payload() data: CreateUrlDto): Promise<string> {
    this.logger.log('Data', data);
    return Promise.resolve(`${Math.random()}`);
  }
}

import { Controller, Get } from '@nestjs/common';
import { AcService } from './ac.service';

@Controller()
export class AcController {
  constructor(private readonly authService: AcService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.authService.getHello();
  }
}

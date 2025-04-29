import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Nueva api en NEST';
  }

  @Get('nuevo-endpoint')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  otherEndpoint() {
    return 'Con /sas/';
  }
}

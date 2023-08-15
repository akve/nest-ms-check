import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, map, of, tap } from 'rxjs';

@Injectable()
export class AcService {
  constructor(
    @Inject('shortener_service') private readonly shortenerService: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.shortenerService.connect();
  }

  async getHello(): Promise<string> {
    // this.shortenerService.emit('create_url', { url: '...' });
    this.shortenerService
      .send('create', {
        url: 'test',
      })
      .pipe(
        tap(res => {
          console.log('Result', res);
        }),
        map(() => true),
        catchError(err => {
          console.log(err);
          return of(false);
        })
      );
    return 'AC Service';
  }
}

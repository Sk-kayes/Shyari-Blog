/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  async forwardRequest(
    target: 'auth' | 'post',
    path: string,
    method: 'get' | 'post' | 'patch' | 'delete',
    data?: any,
    authHeader?: string,
  ) {
    const baseUrl =
      target === 'auth'
        ? this.configService.get('AUTH_SERVICE_URL')
        : this.configService.get('POST_SERVICE_URL');

    const response = await firstValueFrom(
      this.httpService.request({
        url: `${baseUrl}${path}`,
        method,
        data,
        headers: authHeader ? { Authorization: authHeader } : {},
      }),
    );
    return response.data;
  }
}
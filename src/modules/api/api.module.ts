import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ConfigModule } from '../../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}

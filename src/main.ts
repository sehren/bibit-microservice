import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';
import { applicationContext } from './app.context';
import { ConfigService } from './config/config.service';

async function bootstrap(): Promise<void> {
  const app = await applicationContext();
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  if (configService.IS_GRPC) {
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:${configService.PORT}`,
        package: ['movie'],
        protoPath: join(__dirname, './modules/movie/movie.proto'),
      },
    });
    await app.startAllMicroservices();
  } else {
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(configService.PORT);
  }
}

bootstrap().catch((err) => Logger.error(err.message, err.stack, 'Bibit Test'));

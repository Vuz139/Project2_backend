import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    dotenv.config();
    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    const PORT = process.env.PORT || 3001;
    await app.listen(PORT, () => {
        console.log('listening on port: ' + PORT);
    });
}
bootstrap();

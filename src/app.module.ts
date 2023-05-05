import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { options } from './database/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './database/entities';
@Module({
    imports: [TypeOrmModule.forRoot(options), TypeOrmModule.forFeature(entities)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements OnModuleInit {
    async onModuleInit() {
        console.log('connect to database successfully');
    }
}

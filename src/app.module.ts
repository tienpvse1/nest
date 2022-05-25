import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyMeilisearchModule } from './my-meilisearch/my-meilisearch.module';

@Module({
  imports: [
    MyMeilisearchModule.forRoot({
      host: 'http://10.100.229.176:30100',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

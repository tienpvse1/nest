import { DynamicModule, Module } from '@nestjs/common';
import { Config } from 'meilisearch';
import { MyMeilisearchService } from './my-meilisearch.service';

@Module({})
export class MyMeilisearchModule {
  static forRoot(config: Config): DynamicModule {
    return {
      module: MyMeilisearchModule,
      providers: [
        {
          provide: 'MEILI_CONFIG',
          useValue: config,
        },
        MyMeilisearchService,
      ],
      exports: [MyMeilisearchService],
      global: true,
    };
  }
}

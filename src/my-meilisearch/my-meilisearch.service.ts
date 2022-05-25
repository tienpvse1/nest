import { Inject, Injectable } from '@nestjs/common';
import MeiliSearch, { Config } from 'meilisearch';
@Injectable()
export class MyMeilisearchService {
  client: MeiliSearch;

  constructor(@Inject('MEILI_CONFIG') config: Config) {
    this.client = new MeiliSearch(config);
  }

  async prepareData() {
    await this.client.index('profiles').addDocuments([
      {
        id: 1,
        name: 'tienpvse',
        description: 'devoleper',
      },
      {
        id: 3,
        name: 'some guy',
        description: 'devoleper',
      },
      {
        id: 2,
        name: 'some developer',
        description: 'devoleper',
      },
    ]);
  }
}

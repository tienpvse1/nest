import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { MyMeilisearchService } from './my-meilisearch/my-meilisearch.service';
import { hostname } from 'os';
@Controller()
@ApiTags('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private meiliService: MyMeilisearchService,
  ) {}

  // @Get()
  // getHello(@Query('key') key?: string) {
  //   return this.meiliService.client.index('profiles').search(key);
  // }

  // @Post()
  // async prepareData() {
  //   await this.meiliService.prepareData();
  //   return { message: 'inserted' };
  // }

  // @Post('insert-meili')
  // async insertMeili(@Body() dto: CreateMeiliItem) {
  //   return this.meiliService.client.index('profiles').addDocuments([dto]);
  // }
  @Get('')
  async getHello() {
    return { message: `successfully deployed \n os: ${hostname()}` };
  }
}

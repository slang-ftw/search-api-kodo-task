// app.module.ts

import { Module } from '@nestjs/common';
import { FeedModule } from './search/feed.module';

@Module({
  imports: [FeedModule],
})
export class AppModule {}

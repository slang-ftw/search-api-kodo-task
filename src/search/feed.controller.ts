import { Controller, Get, Query } from '@nestjs/common';
import { FeedService } from './feed.service';
import { SearchDto } from '../dto/search.dto';
import { PaginationDto } from '../dto/pagination.dto';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  getFeed(
    @Query() searchDto: SearchDto,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.feedService.getFeed(searchDto, paginationDto);
  }
}

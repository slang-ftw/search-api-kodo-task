import { Test, TestingModule } from '@nestjs/testing';
import { FeedService } from '../../src/search/feed.service';
import { SearchDto } from '../../src/dto/search.dto';
import { PaginationDto } from '../../src/dto/pagination.dto';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedService],
    }).compile();

    service = module.get<FeedService>(FeedService);
  });

  describe('getFeed', () => {
    it('should return the correct feed data', () => {
      const searchDto: SearchDto = {
        query: 'search query',
        sortBy: 'dateLastEdited',
      };
      const paginationDto: PaginationDto = {
        page: 1,
        limit: 10,
      };

      const feedData = service.getFeed(searchDto, paginationDto);

      expect(feedData).toBeDefined();
      expect(feedData.count).toBe(0);
      expect(feedData.total).toBe(0);
      expect(feedData.data).toEqual([]);
    });
  });
});

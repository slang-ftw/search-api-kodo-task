import { Test, TestingModule } from '@nestjs/testing';
import { FeedController } from '../../src/search/feed.controller';
import { FeedService } from '../../src/search/feed.service';
import { SearchDto } from '../../src/dto/search.dto';
import { PaginationDto } from '../../src/dto/pagination.dto';

describe('FeedController', () => {
  let controller: FeedController;
  let service: FeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [FeedService],
    }).compile();

    controller = module.get<FeedController>(FeedController);
    service = module.get<FeedService>(FeedService);
  });

  describe('getFeed', () => {
    it('should call feedService.getFeed with correct parameters', () => {
      const searchDto: SearchDto = {
        query: 'search query',
        sortBy: 'dateLastEdited',
      };
      const paginationDto: PaginationDto = {
        page: 1,
        limit: 10,
      };

      const getFeedSpy = jest.spyOn(service, 'getFeed');
      controller.getFeed(searchDto, paginationDto);

      expect(getFeedSpy).toHaveBeenCalledWith(searchDto, paginationDto);
    });
  });
});

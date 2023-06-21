import { Injectable } from '@nestjs/common';
import { PostEntity } from '../entity/post.entity';
import { SearchDto } from '../dto/search.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { searchPosts, sortPosts, paginate } from '../common/search.util';
import { mock_data } from '../mock_data';

@Injectable()
export class FeedService {
  private readonly posts: PostEntity[];

  constructor() {
    this.posts = mock_data;
  }

  getFeed(searchDto: SearchDto, paginationDto: PaginationDto) {
    let filteredPosts = this.posts;

    if (searchDto.query) {
      filteredPosts = searchPosts(this.posts, searchDto.query);
    }

    filteredPosts = sortPosts(filteredPosts, searchDto.sortBy);

    const paginatedPosts = paginate(
      filteredPosts,
      paginationDto.page,
      paginationDto.limit,
    );

    return {
      count: paginatedPosts.length,
      total: filteredPosts.length,
      data: paginatedPosts,
    };
  }
}

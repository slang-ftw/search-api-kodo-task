import { PostEntity } from '../entity/post.entity';

export function searchPosts(posts: PostEntity[], query: string): PostEntity[] {
  const queryString = String(query); 

  if (queryString.startsWith('"') && queryString.endsWith('"')) {
    const phrase = queryString.slice(1, -1);
    return posts.filter(
      (post) =>
        post.name.toLowerCase().includes(phrase.toLowerCase()) ||
        post.description.toLowerCase().includes(phrase.toLowerCase()),
    );
  }

  return posts.filter(
    (post) =>
      post.name.toLowerCase().includes(queryString.toLowerCase()) ||
      post.description.toLowerCase().includes(queryString.toLowerCase()),
  );
}

export function sortPosts(posts: PostEntity[], sortBy?: string): PostEntity[] {
  if (sortBy === 'name') {
    return posts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'dateLastEdited') {
    return posts.sort(
      (a, b) =>
        new Date(a.dateLastEdited).getTime() -
        new Date(b.dateLastEdited).getTime(),
    );
  }

  return posts;
}

export function paginate(
  posts: PostEntity[],
  page?: number,
  limit?: number,
): PostEntity[] {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return posts.slice(startIndex, endIndex);
}

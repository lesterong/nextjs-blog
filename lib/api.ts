import fs from 'fs';
import matter from 'gray-matter';

const POST_DIRECTORY = '_posts';
const POSTS_PER_PAGE = 8;
const POSTS_LATEST = 5;

/**
 * Gets an array of strings of the post slugs.
 */
export const getPostsSlugs = (): string[] => {
  const files = fs.readdirSync(POST_DIRECTORY);
  return files.map((filename) => filename.replace('.md', ''));
};

/**
 * Gets a post from a specified slug.
 */
export const getPostBySlug = (slug: string) => {
  const file = fs.readFileSync(`${POST_DIRECTORY}/${slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  const { title, date, tag, summary } = data;
  return {
    slug,
    title,
    date,
    tag,
    summary,
    content,
  };
};

/**
 * Gets all posts excluding drafts, sorted by latest date first.
 */
export const getAllPosts = () => {
  const slugs = getPostsSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1));
};

export const getPostsTags = () => {
  const tags = getAllPosts().map((post) => post.tag);
  return Array.from(new Set(tags));
};

export const getPostsByTag = (tag: string) => {
  const posts = getAllPosts();
  return posts.filter((post) => post.tag === tag);
};

export const getLatestPosts = () => {
  const posts = getAllPosts();
  return posts.slice(0, POSTS_LATEST);
};

export const getArchivedPosts = () => {
  const posts = getAllPosts();
  return posts.slice(POSTS_LATEST);
};

export const hasArchivedPosts = () => {
  return getArchivedPosts().length > 0;
};

export const getArchivedPostsByPage = (page: number) => {
  const posts = getArchivedPosts();
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = page * POSTS_PER_PAGE;
  return posts.slice(startIndex, endIndex);
};

export const getNumberOfArchivedPages = () => {
  const numOfPostsToIndex = getArchivedPosts().length;
  return Math.ceil(numOfPostsToIndex / POSTS_PER_PAGE) || 1;
};

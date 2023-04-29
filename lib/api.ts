import fs from 'fs';
import matter from 'gray-matter';

const POST_DIRECTORY = '_posts';

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

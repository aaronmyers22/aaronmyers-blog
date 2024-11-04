import { Post } from '@/types/blog';

// This is a mock API implementation
// Replace with actual API calls in production

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'First Post',
    slug: 'first-post',
    excerpt: 'This is the first post.',
    content: '<p>This is the content of the first post.</p>',
    createdAt: new Date().toISOString(),
  },
  // Add more mock posts as needed
];

export async function getAllPosts(): Promise<Post[]> {
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return MOCK_POSTS.find((post) => post.slug === slug) || null;
} 
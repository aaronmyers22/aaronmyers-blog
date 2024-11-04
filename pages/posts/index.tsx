import { GetStaticProps } from 'next';
import Layout from '@/components/layout/Layout';
import PostList from '@/components/blog/PostList';
import { getAllPosts } from '@/lib/api';
import { Post } from '@/types/blog';

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">All Posts</h1>
      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}; 
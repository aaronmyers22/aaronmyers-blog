import Layout from '@/components/layout/Layout';
import PostList from '@/components/blog/PostList';
import { getAllPosts } from '@/lib/api';
import { Post } from '@/types/blog';
import { GetStaticProps } from 'next';

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <PostList posts={posts.slice(0, 5)} />
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

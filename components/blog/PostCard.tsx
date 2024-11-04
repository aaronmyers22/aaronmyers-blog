import Link from 'next/link';
import { Post } from '@/types/blog';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="border rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-2">
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="text-sm text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default PostCard; 
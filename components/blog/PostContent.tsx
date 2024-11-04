import { Post } from '@/types/blog';

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      <div className="text-sm text-gray-500 mb-8">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default PostContent; 
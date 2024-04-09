import { useLoaderData } from 'react-router-dom';
import { CommentSection } from '@/widgets/comment-section/ui/comment-section';
import { Post } from '@/widgets/post';
import { Loader } from '@/shared/ui/loader';

export function PostPage() {
  const { postId } = useLoaderData() as { postId: number };

  return (
    <>
      <Loader />
      <div className="xl:w-2/3 xl:mx-auto">
        <div className="pt-5 md:pt-20">
          <Post postId={postId} />
          <div className="px-3 sm:px-5 md:pl-5 text-gray-200 md:w-3/4 py-5">
            <div className="mb-5 text-2xl text-gray-200">
              Comments
            </div>
            <CommentSection postId={postId} />
          </div>
        </div>
      </div>
    </>
  );
}

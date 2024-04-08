import { Loader } from '@/shared/ui/loader';
import { useLoaderData } from 'react-router-dom';
import { Post } from '@/widgets/post';

export function PostPage() {
  const { postId } = useLoaderData() as { postId: number };

  return (
    <>
      <Loader />
      <div className="xl:w-1/2 xl:mx-auto">
        <div className="">
          <Post postId={postId} />
        </div>
      </div>
    </>
  )
}

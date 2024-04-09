import { CommentRow, useGetCommentsByPostIdQuery } from '@/entities/comments';

type CommentSectionProps = {
  postId: number;
};

export function CommentSection({ postId }: CommentSectionProps) {
  const { data: comments } = useGetCommentsByPostIdQuery(postId);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {(comments || []).map(({ id, email, body }) => (
        <div key={id} className="border-b border-b-gray-300 last:border-none">
          <CommentRow email={email} body={body} />
        </div>
      ))}
    </div>
  );
}

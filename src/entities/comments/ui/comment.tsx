import { type Comment } from '../model/types';

type CommentProps = Partial<Omit<Comment, 'id'>>;

export function CommentRow({ email, body }: CommentProps) {
  return (
    <div className="flex flex-col py-2 md:py-4 gap-2 md:gap-4">
      <div className="text-gray-100">
        {email}
      </div>
      <div className="text-lg text-gray-400">
        {body}
      </div>
    </div>
  );
}

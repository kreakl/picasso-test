import {
  Card, CardContent, CardHeader,
} from '@mui/material';

type PostCardProps = {
  index?: number;
  title?: string;
  body?: string;
  isLoading?: boolean;
};

export function PostCard({
  index, title, body, isLoading,
}: PostCardProps) {
  return (
    !isLoading ? (
      <Card>
        <CardHeader title={`№${index}. ${title}`} />
        <CardContent>
          {body}
        </CardContent>
      </Card>
    ) : (
      <div>
        Loading...
      </div>
    )
  );
}

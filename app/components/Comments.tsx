import React, { useState, ChangeEvent } from 'react';

const Comments = () => {
  interface CommentsInterface {
    id: number;
    comment: string;
    author: string;
    timeStamp: string;
  }

  const [comment, setComment] = useState<CommentsInterface>({
    id: 1,
    comment: '',
    author: 'author',
    timeStamp: '00:00',
  });

  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComment({
      ...comment,
      comment: event.target.value,
    });
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Faça seu comentário'
        value={comment.comment}
        onChange={handleCommentChange}
      />
    </div>
  );
};

export default Comments;

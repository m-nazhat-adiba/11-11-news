import React from "react";
import { Divider, Image } from "@nextui-org/react";

const CommentCard = ({ comment }) => {
  return (
    <div className="my-4 w-full flex flex-col gap-3">
      <Divider />
      <div className="flex gap-2">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/avatar.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-bold">{comment.user.username}</p>
          <p className="text-small text-default-500">{`${comment.postId}-${comment.id}`}</p>
          <p className="text-black pt-1">{comment.body}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

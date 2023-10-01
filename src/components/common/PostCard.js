import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

import CommentCard from "./CommentCard";

const PostCard = ({ className, data, user, isHome, comment }) => {
  return (
    <Card className={className}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={
            user[0]
              ? user[0].image
              : "https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          }
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">
            {user[0] ? `${user[0].firstName} ${user[0].lastName}` : "admin"}
          </p>
          <p className="text-small text-default-500">
            {user[0] ? `@${user[0].username}` : "admin@11-11.com"}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="font-bold mb-2">{data.title}</p>
        <p>{data.body}</p>
        <div className={clsx("flex gap-2 pt-6", isHome ? "hidden" : null)}>
          {data.tags.map((item, key) => (
            <p key={key}>{`#${item}`}</p>
          ))}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="text-sm text-gray-500 px-6 flex flex-col">
        <div className="flex justify-between w-full">
          <div className={clsx("flex gap-2", isHome ? null : "hidden")}>
            {data.tags.map((item, key) => (
              <p key={key}>{`#${item}`}</p>
            ))}
          </div>
          <Link
            className={clsx("block", isHome ? null : "hidden")}
            href={`/posts/${data.id}`}
          >
            <button className="font-medium">Read more</button>
          </Link>
        </div>
        {isHome === false ? (
          <div className="flex flex-col w-full mt-1">
            <p className="text-gray-900 font-semibold">Comments</p>
            {comment.map((item, key) => (
              <CommentCard comment={item} key={key} />
            ))}
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default PostCard;

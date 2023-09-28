import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const PostCard = ({ className, data, user }) => {
  console.log(user[0].tags);
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
            {" "}
            {user[0] ? `@${user[0].username}` : "admin@11-11.com"}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="font-bold mb-2">{data.title}</p>
        <p>{data.body}</p>
      </CardBody>
      <Divider />
      <CardFooter className="text-sm text-gray-500 px-6 flex gap-2">
        {data.tags.map((item) => (
          <p>{item}</p>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PostCard;

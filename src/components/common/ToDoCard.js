import React from "react";
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

const ToDoCard = ({ todos, user, className, isHome }) => {
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
        <div className="font-bold mb-2">
          Status:{" "}
          {todos.completed ? <span>Completed</span> : <span>Incompleted</span>}
        </div>
        <p>{todos.todo}</p>
      </CardBody>
      <Divider />
      <CardFooter className="text-sm text-gray-500 px-6 flex flex-col">
        <div className="flex justify-between w-full">
          <Link
            className={clsx("block", isHome ? null : "hidden")}
            href={`/todos/${todos.id}`}
          >
            <button className="font-medium">Read more</button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToDoCard;

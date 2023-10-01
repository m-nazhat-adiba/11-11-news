import axios from "axios";
import Head from "next/head";
import React from "react";

import Layout from "@/components/Layout";
import Header from "@/containers/homepage/Header";
import Highlight from "@/containers/homepage/Highlight";
import SideContent from "@/containers/homepage/SideContent";
import UserPanel from "@/containers/homepage/UserPanel";

const index = ({ data, users, todos }) => {
  return (
    <>
      <Head>
        <title>The Blog</title>
      </Head>
      <Layout>
        <Header />
        <div className="flex justify-between mx-12 pb-20">
          <div className="relative">
            <UserPanel />
          </div>
          <Highlight data={data} users={users} />
          <div className="relative">
            <SideContent
              user={users}
              todo={todos}
              className="h-screen overflow-y-scroll sticky top-0 z-[9999] scrollbar-hide"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  // posts endpoint
  const res1 = await axios.get("https://dummyjson.com/posts?limit=20");
  const data = await res1.data.posts;

  //users endpoint
  const res2 = await axios.get("https://dummyjson.com/users?limit=0");
  const users = await res2.data.users;

  //todo endpoint
  const res3 = await axios.get("https://dummyjson.com/todos?limit=6");
  const todos = await res3.data.todos;

  return { props: { data, users, todos } };
};

export default index;

import axios from "axios";
import Head from "next/head";
import React from "react";

import ToDoCard from "@/components/common/ToDoCard";
import Layout from "@/components/Layout";

const ToDo = ({ data, users }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Layout>
        <div className="w-[680px] mx-auto flex-grow mb-12">
          <ToDoCard todos={data} user={[users]} isHome={false} />
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  // posts endpoint
  const res1 = await axios.get(`https://dummyjson.com/todos/${id}`);
  const data = await res1.data;

  //users endpoint
  const res2 = await axios.get(`https://dummyjson.com/users/${data.id}`);
  const users = await res2.data;

  return { props: { users, data } };
};

export default ToDo;

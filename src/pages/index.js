import Layout from "@/components/Layout";
import Header from "@/containers/homepage/Header";
import Highlight from "@/containers/homepage/Highlight";
import React from "react";
import axios from "axios";
import SideContent from "@/containers/homepage/SideContent";

const index = ({ data, users }) => {
  return (
    <Layout>
      <Header />
      <div className="flex justify-between mx-40 pb-20">
        <Highlight data={data} users={users} />
        <div className="relative">
          <SideContent user={users} className="sticky top-0" />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  // posts endpoint
  const res1 = await axios.get("https://dummyjson.com/posts");
  const data = await res1.data.posts;

  //users endpoint
  const res2 = await axios.get("https://dummyjson.com/users?limit=0");
  const users = await res2.data.users;

  return { props: { data, users } };
};

export default index;

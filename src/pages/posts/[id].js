import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import PostCard from "@/components/common/PostCard";

const PostDetails = ({ users, data, comment }) => {
  return (
    <Layout>
      <div className="w-[680px] mx-auto flex-grow mb-12">
        <PostCard data={data} user={[users]} isHome={false} comment={comment} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  // posts endpoint
  const res1 = await axios.get(`https://dummyjson.com/posts/${id}`);
  const data = await res1.data;

  //users endpoint
  const res2 = await axios.get(`https://dummyjson.com/users/${data.userId}`);
  const users = await res2.data;

  //comment endpoint
  const res3 = await axios.get(`https://dummyjson.com/post/${id}/comments`);
  const comment = await res3.data.comments;

  return { props: { users, data, comment } };
};

export default PostDetails;

import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

export default function posts({ posts }: any) {
  console.log(posts);
  return (
    <>
      <Header />
      <h1>This is Posts page</h1>
      {posts.map((post: any) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        );
      })}
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

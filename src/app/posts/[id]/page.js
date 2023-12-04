import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id + "",
    };
  });
  // console.log(ids);

  return ids;
}

const DetailPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);

  return (
    <div>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.likes}</p>
        <div className="card-actions justify-end">
          <Link href={"/posts"}>
            <button className="btn btn-primary">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

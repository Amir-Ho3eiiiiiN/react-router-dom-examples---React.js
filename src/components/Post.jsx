import { Link, useParams, useSearchParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Title One",
    body: "Body One",
  },
  {
    id: 2,
    title: "Title Two",
    body: "Body Two",
  },
  {
    id: 3,
    title: "Title Three",
    body: "Body Three",
  },
];

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [serachParams, setSearchParams] = useSearchParams();
  return (
    <div className="flex flex-col items-start">
      <h1>Singel Post</h1>
      <div>post id : {id}</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link className="text-blue-400" to="/app/posts">
        Go to posts
      </Link>
      <button
        className="mt-2 p-2 bg-blue-400 text-white rounded-xl shadow-md hover:bg-white hover:text-blue-400 hover:border hover:border-blue-400"
        onClick={() => setSearchParams({ type: "cash", free: "No" })}
      >
        update query
      </button>
    </div>
  );
}

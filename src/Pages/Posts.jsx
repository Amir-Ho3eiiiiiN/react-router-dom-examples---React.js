import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h1 className="text-2xl text-gray-700 font-bold">Posts Page</h1>
      <h2 className="text-lg font-semibold text-blue-600">List of Posts</h2>
      <ul className="mt-6 flex gap-2 ">
        <li>
          <Link
            className="p-4 border rounded-md bg-blue-400 text-gray-100 hover:bg-blue-800"
            to="1"
          >
            Visit Post 1
          </Link>
        </li>
        <li>
          <Link
            className="p-4 border rounded-md bg-blue-400 text-gray-100 hover:bg-blue-800"
            to="2"
          >
            Visit Post 2
          </Link>
        </li>
        <li>
          <Link
            className="p-4 border rounded-md bg-blue-400 text-gray-100 hover:bg-blue-800"
            to="3"
          >
            Visit Post 3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Posts;

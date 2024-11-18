import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="text-2xl font-bold">Home Page</div>
      <p className="text-blue-400 text-sm cursor-pointer hover:text-blue-700">
        <Link to="posts">Do You want to see posts?</Link>
      </p>
    </>
  );
}

export default Home;

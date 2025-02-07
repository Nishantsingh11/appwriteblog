import service from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCards(post) {
  return (
    <Link to={`/post/${post.post.$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={service.getFilePreviwe(post.post.featureImage)}
            alt="feature iimg"
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">
          {post.post.title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCards;

import service from "../../appwrite/config";
import { PostCard, Container } from "../index";
import { useState, useEffect } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => {
      service
        .getPosts([])
        .then(posts => {
          if (posts && posts.documents) {
            setPosts(posts.documents);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    [setPosts]
  );
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map(post =>
            <div key={post.id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;

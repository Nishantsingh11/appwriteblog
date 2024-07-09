import { useState, useEffect } from "react";
import service from "../../appwrite/config";
import { Container, PostCard } from "../index";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts([]).then(post => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);
  console.log(posts);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <h1 className="text-2xl font-bold">No Posts Yet</h1>
        </Container>
      </div>
    );
  } else {
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
  }
};

export default Home;

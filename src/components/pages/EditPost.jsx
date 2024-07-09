import service from "../../appwrite/config";
import { useEffect, useState } from "react";
import { Container, Post } from "../index";
import { useParams, useNavigate } from "react-router-dom";
const EditPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(() => {
    service.getPost(slug).then(post => {
      if (post) {
        setPost(post);
      } else {
        navigate("/");
      }
    });
  }, [navigate,slug]);
  return post
    ? <div className="py-8">
        <Container>
          <Post post={post} />
        </Container>
      </div>
    : null;
};

export default EditPost;

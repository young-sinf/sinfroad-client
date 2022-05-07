import "./PostCard.css";
import { Post } from "../types/post";
import { Link } from "react-router-dom";

export function PostCard({ id, title, created, image }: Partial<Post>) {
  return (
    <div className="post__card">
      <div className="post__image">
        <img src={image} alt={title} />
      </div>
      <div className="post__title">
        <Link to={`/posts/${id}`}>{title}</Link>
      </div>
      <div className="post__created">
        {new Date(created as string).toLocaleString("ko-KR")}
      </div>
    </div>
  );
}

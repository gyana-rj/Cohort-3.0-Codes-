import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const postComponents = posts.map(post => <PostComponent
    name = {post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost(){
    setPosts([...posts, {
      name : "100xDevs",
      subtitle : "300000 followers",
      time : "2m ago",
      image : "https://pbs.twimg.com/profile_images/1877817218244775936/zYaaUHgY_400x400.jpg",
      description : "Want to know how these folks win $6000 bounties in solana hackathon"
    }])
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            {postComponents}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
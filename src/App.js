import React from "react";
import BaseRoutes from "./Routing/routes";
import CreatePostPopup from "./Components/CreatePostPopup";

import "./App.css";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showCreatePost, setShowCreatePost] = React.useState(true);

  return (
    <>
      {showCreatePost && user && (
        <CreatePostPopup setShowCreatePost={setShowCreatePost} user={user} />
      )}
      <BaseRoutes />
    </>
  );
}

export default App;

// cloudinary url:
// ("upload_preset", "myBook");
// ("cloud_name", "dakda5ni3");
// fetch("https://api.cloudinary.com/v1_1/dakda5ni3/image/upload", {
//   method: "post",
//   body: data,
// })

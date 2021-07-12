import { useState } from "react";
import Header from "../Header";
import PostList from "../PostList";
import PostModal from "../PostModal";

function App() {


  const [open,setOpen]=useState(false);

  return (
    <div>
      <Header modalOpen={()=>setOpen(true)}/>
      <PostModal openModal={open} closeModal={()=>setOpen(false)}/>
      <PostList></PostList>
    </div>

  );
}

export default App;

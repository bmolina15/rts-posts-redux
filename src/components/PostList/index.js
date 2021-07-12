import PostCard from "../PostCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      flexWrap:"wrap"
    },
   
  }));

function PostList(){
    const classes=useStyles();
    return(<div className={classes.root}>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
    </div>);
}

export default PostList;


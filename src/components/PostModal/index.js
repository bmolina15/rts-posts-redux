import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/Posts/PostsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    width: "400px",
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  submitButton: {
    width: "-webkit-fill-available",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  formFieds: {
    width: "-webkit-fill-available",
  },
}));

function PostModal({ openModal, userData, closeModal }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [newPost, setNewPost] = useState({
    id:"",
    title: "",
    description: "",
    category: "",
    image: "",
    comments: [],
  });


  const handleChange=(e)=>{
    const addPost= {...newPost};
    addPost[e.target.name] = e.target.value;
    e.preventDefault();
    setNewPost(addPost);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addPost(newPost));
  }

  

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DialogContent>
          <div className={classes.root}>
            <form onSubmit={handleSubmit}>
              <h1>Add new user</h1>

              <Grid>
                <TextField
                  className={classes.formFieds}
                  id="title"
                  label="Title"
                  name="title"
                  value={newPost.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  className={classes.formFieds}
                  id="description"
                  label="Description"
                  name="description"
                  value={newPost.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  className={classes.formFieds}
                  id="category"
                  label="category"
                  name="category"
                  value={newPost.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  className={classes.formFieds}
                  id="image"
                  label="Image"
                  name="image"
                  value={newPost.image}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Button
                  className={classes.submitButton}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Agregar
                </Button>
              </Grid>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PostModal;

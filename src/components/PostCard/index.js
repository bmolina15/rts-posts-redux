import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "https://source.unsplash.com/random",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: "15px",
  },
}));

function PostCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.paper}>Title </div>
            <div className={classes.paper}>Comments </div>
            <div className={classes.paper}>Description </div>
            <div className={classes.paper}>Category </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default PostCard;

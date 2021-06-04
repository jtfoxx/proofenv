import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import Affiliate from "./Affiliate";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardcontent: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    maxWwidth: "100%"
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
}));

export default function Video({ video }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const created_at = new Date(video.created_at).toDateString();

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={3}></Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {video.day}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={video.title || "Session " + video.day}
            subheader={created_at}
          />

          <CardContent
            className={classes.cardcontent}
            style={{ textAlign: "center" }}
          >
            {video.assetType == "video" ? (
              <iframe
                className={classes.iframe}
                src={video.url}
                width="640"
                height="564"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <audio controls controlsList="nodownload">
                <source src={video.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </CardContent>
          <CardActions disableSpacing></CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description:</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}></Grid>
    </Grid>
  );
}

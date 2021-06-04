import React, { Component } from "react";
import { Box, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import VideoTab from "./Videotab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { getAssets } from "../api";

class Program extends Component {
  state = {
    videos: []
  };

  async componentDidMount() {
    const videos = await getAssets(this.props.match.params.program_id);
    this.setState({ videos });
  }

  componentDidUpdate = async prevProps => {
    if (
      this.props.match.params.program_id !== prevProps.match.params.program_id
    ) {
      const videos = await getAssets(this.props.match.params.program_id);
      this.setState({ videos });
    }
  };

  render() {
    const videos = this.state.videos;
    return (
      <div>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              {videos.length ? (
                <VideoTab videos={videos} />
              ) : (
                <Box styles={{ textAlign: "center", marginTop: 150 }}>
                  <Typography variant="h6">Coming soon!</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Program;

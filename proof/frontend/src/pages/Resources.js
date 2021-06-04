import React from "react";
import { Button, Typography } from "@material-ui/core";

function Resources() {
  return (
    <div className="container">
      <div className="row">
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Links to Trading Position Size Calculators
        </Typography>
        <Button
          href="https://www.stocktickr.com/positionsize/"
          color="primary"
          target="_blank"
          variant="outlined"
        >
          Link 1
        </Button>{" "}
        <Button
          href="https://investmentu.com/position-size-calculator/"
          variant="outlined"
          color="primary"
          target="_blank"
        >
          Link 2
        </Button>{" "}
        <Button
          href="https://www.smartstops.net/PublicPages/PositionSizingCalculator.aspx?symbol=NFLX"
          variant="outlined"
          color="primary"
          target="_blank"
        >
          Link 3
        </Button>
      </div>
    </div>
  );
}

export default Resources;

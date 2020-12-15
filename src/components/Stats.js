import React from "react";
import "scss/Stats.scss";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

function Stats() {
  return (
    <div className="stats">
      <div className="container">
        <h3 className="stats_heading">
          Hello. It is a test message and just want to see what happen when this
          content take a certain space
        </h3>

        <div className="text_grid_center">
          <div>
            <AccessAlarmIcon />
            <h3>10,340,400</h3>
            <p className="text-secendary">Deployments</p>
          </div>

          <div>
            <AccessAlarmIcon />
            <h3>103,212,341</h3>
            <p className="text-secendary">Published</p>
          </div>

          <div>
            <AccessAlarmIcon />
            <h3>102,312,141</h3>
            <p className="text-secendary">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

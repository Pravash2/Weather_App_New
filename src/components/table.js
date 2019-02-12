import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Typography } from "@material-ui/core";

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

const styles = theme => ({
  root: {
    width: "80%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "0 auto"
  },
  table: {
    minWidth: 700
  },
  cellheight: {
    height: "300px"
  }
});

function SimpleTable(props) {
  const { classes } = props;

  function mapTemp(list, temp) {
    if (temp === "humidity") return list.map(temp => temp.main.humidity);
    if (temp === "temperature") return list.map(temp => temp.main.temp);
    if (temp === "pressure") return list.map(temp => temp.main.pressure);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="center">Temperature</TableCell>
            <TableCell align="center">Pressure</TableCell>
            <TableCell align="center">Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.row.map(row => (
            <TableRow key={row.city.id}>
              <TableCell component="th" scope="row">
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="h2">
                  {row.city.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Sparklines
                  className={classes.cellheight}
                  data={mapTemp(row.list, "temperature")}
                  width={300}
                  height={300}>
                  <SparklinesLine color="blue" />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="h2">
                  {_.floor(_.mean(row.list.map(temp => temp.main.temp)), 2)} K
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Sparklines
                  className={classes.cellheight}
                  data={mapTemp(row.list, "pressure")}
                  width={300}
                  height={300}>
                  <SparklinesLine color="green" />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="h2">
                  {_.floor(_.mean(row.list.map(temp => temp.main.pressure)), 2)}{" "}
                  KPa
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Sparklines
                  className={classes.cellheight}
                  data={mapTemp(row.list, "humidity")}
                  width={300}
                  height={300}>
                  <SparklinesLine color="red" />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="h2">
                  {_.floor(_.mean(row.list.map(temp => temp.main.humidity)), 2)}{" "}
                  g/m3
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);

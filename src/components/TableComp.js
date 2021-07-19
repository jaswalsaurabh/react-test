import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Table, Button } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HeaderComp from "./Header/HeaderComp";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#172269",
    color: theme.palette.common.white,
    fontFamily: "segoe UI",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      // backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date, time, availability, button) {
  return { date, time, availability, button };
}

const rndInt = Math.floor(Math.random() * 11) + 5;
const rndInt2 = Math.floor(Math.random() * 11) + 5;
const rndInt3 = Math.floor(Math.random() * 11) + 5;
const rndInt4 = Math.floor(Math.random() * 11) + 5;
const rndInt5 = Math.floor(Math.random() * 11) + 5;

const rows = [
  createData(
    "Thu May 06 2021",
    "01:00 PM PST - 02:00 PM PST",
    rndInt > rndInt2 ? `${rndInt} seats left` : "0 seats left",
    rndInt > rndInt2 ? "Book Now" : "Full"
  ),
  createData(
    "Fri May 26 2021",
    "03:00 PM PST - 04:00 PM PST",
    rndInt2 > rndInt3 ? `${rndInt2} seats left` : "0 seats left",
    rndInt2 > rndInt3 ? "Book Now" : "Full"
  ),
  createData(
    "Sat June 01 2021",
    "05:00 PM PST - 06:00 PM PST",
    rndInt3 > rndInt4 ? `${rndInt3} seats left` : "0 seats left",
    rndInt3 > rndInt4 ? "Book Now" : "Full"
  ),
  createData(
    "Tue June 16 2021",
    "07:00 PM PST - 08:00 PM PST",
    rndInt4 > rndInt5 ? `${rndInt4} seats left` : "0 seats left",
    rndInt4 > rndInt5 ? "Book Now" : "Full"
  ),
  createData(
    "Mon July 19 2021",
    "09:00 PM PST - 10:00 PM PST",
    rndInt > rndInt5 ? `${rndInt5} seats left` : "0 seats left",
    rndInt > rndInt5 ? "Book Now" : "Full"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  btn: {
    width: "38%",
  },
});

export default function TableComp({ cartCount, setCartCount }) {
  const classes = useStyles();

  function setCounter() {
    if (cartCount < 3) {
      setCartCount(cartCount + 1);
    } else {
      alert("you only add 3 items in your cart");
    }
  }

  return (
    <>
      <HeaderComp cartCount={cartCount} setCartCount={setCartCount} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="left">Time</StyledTableCell>
              <StyledTableCell align="left">Availability</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.date}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="left">{row.time}</StyledTableCell>
                <StyledTableCell align="left">{row.availability}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color={row.button === "Full" ? "secondary" : "primary"}
                    onClick={row.button === "Full" ? "" : setCounter}
                  >
                    {row.button}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

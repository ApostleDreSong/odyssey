import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { Button, Card } from "@material-ui/core";
import AllPayments from "./assets/all_payments.svg";
import ReconciledPayments from "./assets/ReconciledPayments.svg";
import UnReconciled from "./assets/unreconciled.svg";
import MerchantIcon from "./assets/Merchant.svg";
import { Grid } from "@material-ui/core";
import Bell from "./assets/bell.svg";
import Load from "./Load.jsx";
import Trip from "./Trip.jsx";
import Balance from "./Balance.jsx";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "60px",
  },
  title: {
    color: "#1875F0",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "24px",
    lineHeight: "28px",
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
    borderColor: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  support: {
    color: "#647787",
    fontFamily: "Segoe UI",
    fontSize: "14px",
    lineHeight: "19px",
    flexBasis: "5%",
    cursor: "pointer",
  },
  ListItem: {
    padding: 0,
  },
  SideFont: {
    fontFamily: "Segoe UI",
    fontSize: "11px",
    lineHeight: "15px",
    color: "#647787",
  },
  box: {
    display: "flex",
    padding: "10px",
  },
  CardText: {
    fontFamily: "Segoe UI",
    fontSize: "12px",
    lineHeight: "16px",
  },
  overview: {
    fontFamily: "Segoe UI",
    fontSize: "14px",
    lineHeight: "16px",

    color: "#262626",
  },
}));

export default function Dashboard() {
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [panel, setPanel] = useState("load");

  useEffect(() => {
    let d = new Date();

    let day = d.getDate();
    setDate(day);
    let mon = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12

    switch (mon) {
      case 1:
        mon = "Jan";
        break;
      case 2:
        mon = "Feb";
        break;
      case 3:
        mon = "Mar";
        break;
      case 4:
        mon = "Apr";
        break;
      case 5:
        mon = "May";
        break;
      case 6:
        mon = "Jun";
        break;
      case 7:
        mon = "Jul";
        break;
      case 8:
        mon = "Aug";
        break;
      case 9:
        mon = "Sep";
        break;
      case 10:
        mon = "Oct";
        break;
      case 11:
        mon = "Nov";
        break;
      case 12:
        mon = "Dec";
        break;

      default:
        break;
    }
    setMonth(mon);
    let yr = d.getFullYear();
    setYear(yr);
  }, []);

  const classes = useStyles();

  const changePanel = (option) => {
    setPanel(option);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Odyssey
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "0.5px solid black",
              borderRadius: "8px",
              flexGrow: 1,
              margin: "0 10px",
            }}
          >
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "black" }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography className={classes.support} noWrap>
            Support
          </Typography>
          <Typography className={classes.support} noWrap>
            FAQ
          </Typography>
          <Badge badgeContent={8} color="primary">
            <img src={Bell} />
          </Badge>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              color: "black",
              margin: "0 30px",
              flexBasis: "10%",
            }}
          >
            <div>Hello</div>
            <div>ademesodamilare@gmail.com</div>
          </div>
          <Avatar alt="Profile Picture" src="https://picsum.photos/200" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div style={{ paddingLeft: "42px", marginTop: "33px" }}>
            <Button
              style={{
                backgroundColor: "#27AE60",
                color: "white",
                borderRadius: "30px",
                padding: "10px 25px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.2px",
              }}
            >
              GENERATE STATEMENT
            </Button>
            <List className={classes.List}>
              <p className={classes.SideFont}>Main</p>
              {[
                ["Load Wallet", AllPayments, "load"],
                ["Take Trip", ReconciledPayments, "trip"],
                ["View Balance", UnReconciled, "balance"],
              ].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  className={classes.ListItem}
                  onClick={()=>changePanel(text[2])}
                >
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>

            <List className={classes.List}>
              {[["Log Out", MerchantIcon]].map((text, index) => (
                <ListItem button key={text} className={classes.ListItem}>
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div
          style={{
            fontFamily: "Segoe UI",
            fontSize: "18px",
            lineHeight: "21px",
            marginBottom: "20px"
          }}
        >
          Today: {date}, {month} {year}
        </div>
        {panel === "load" ? <Load /> : null}
        {panel === "trip" ? <Trip /> : null}
        {panel === "balance" ? <Balance /> : null}
      </main>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { FormHelperText, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Trip() {
  const classes = useStyles();
  const [rockets, setRockets] = useState([]);
  const [stations, setStations] = useState([]);
  const [selectedRocket, setSelectedRocket] = useState("");
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [fareDetails, setFareDetails] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3001/api/rocket/get-all`,
    }).then(async (res) => {
      setRockets(res.data);
    });
    axios({
      method: "get",
      url: `http://localhost:3001/api/station/get-all`,
    }).then(async (res) => {
      setStations(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setSelectedRocket(e.target.value);
  };

  const changeStartStation = (e) => {
    setStartStation(e.target.value);
  };

  const changeEndStation = (e) => {
    setEndStation(e.target.value);
  };

  const calculateFare = () => {
    if (selectedRocket === "" || startStation === "" || endStation === "") {
      alert("All fields must be selected");
    } else {
      axios({
        method: "post",
        url: `http://localhost:3001/api/fare/calculate`,
        data: {
          rocket: selectedRocket,
          startStation,
          endStation,
        },
      }).then(async (res) => {
        setFareDetails(res.data);
      });
    }
  };

  const takeTrip = (e) => {
      e.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:3001/api/fare/take-trip`,
      data: {
        userId: 1,
        rocket: selectedRocket,
        startStation,
        endStation,
      },
    }).then(async (res) =>{
        alert(`Trip successfully taken, your new balance is ${res.data}`)
    });
  };

  return (
    <div>
      <form onSubmit={takeTrip}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Rocket</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedRocket}
            onChange={handleChange}
            required
          >
            <MenuItem value=""></MenuItem>
            {rockets.map((rocket) => (
              <MenuItem value={rocket.id}>{rocket.name}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose Rocket</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Start Station
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={startStation}
            onChange={changeStartStation}
            required
          >
            <MenuItem value=""></MenuItem>
            {stations.map((station) => (
              <MenuItem value={station.id}>{station.name}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose Start Station</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            End station
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={endStation}
            onChange={changeEndStation}
            required
          >
            <MenuItem value=""></MenuItem>
            {stations.map((station) => (
              <MenuItem value={station.id}>{station.name}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose End Station</FormHelperText>
        </FormControl>

        <Button
          onClick={calculateFare}
          fullWidth
          variant="contained"
          color="primary"
        >
          Calculate Fare
        </Button>
        {fareDetails ? (
          <div>
            <p>Transport Fare: {fareDetails.transportFare}BTC</p>
            <p>Royalty: {fareDetails.royalty}BTC </p>
            <p>Total Fare: {fareDetails.totalFare}BTC </p>
          </div>
        ) : null}
        <div style={{ marginBottom: "10px" }}></div>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Take Trip
        </Button>
      </form>
    </div>
  );
}

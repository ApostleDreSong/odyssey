import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ErrorHandler from "./ErrorHandler.jsx";
import Button from "@material-ui/core/Button";
import axios from "axios";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Load() {
  const [error, setError] = useState();
  const [amount, setAmount] = useState();

  const load = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3001/api/wallet/load",
      data: {
        userId: 1,
        amount,
      },
    })
      .then(async (res) => {
        alert(`wallet loaded successfully, new balance is ${res.data}`);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <form onSubmit={load}>
        <TextField
          id="standard-basic"
          label="Input Amount"
          type="number"
          onChange={changeAmount}
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="end">BTC</InputAdornment>,
          }}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Load
        </Button>
      </form>
      <ErrorHandler error={error} />
    </div>
  );
}

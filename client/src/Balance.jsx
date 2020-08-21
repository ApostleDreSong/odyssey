import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import axios from "axios";

export default function Balance() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3001/api/wallet/balance/1`,
    }).then(async (res) => {
      setBalance(res.data);
    });
  }, []);

  return (
    <div>
      <Card style={{ width: "500px", height: "100vh" }}>
          Your balance is {balance}BTC
      </Card>
    </div>
  );
}

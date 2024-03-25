import logo from "./logo.svg";
import "./App.css";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
function App() {
  let [flagList, setFlagList] = useState([]);
  let [cardList, setCardList] = useState([]);
  useEffect(() => {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setFlagList(res);
        })
        .catch((err) => {
          console.log("err-> ", err);
        });
    } catch (error) {}
  }, []);
  useEffect(() => {
    if (flagList.length) {
      let cardList = flagList.map((ele) => {
        return (
          <Grid
            item
            xl={12 / 7}
            lg={5}
            md={4}
            sm={3}
            key={ele.name.common}
            className="cardbox"
          >
            <img
              src={ele.flags.png}
              alt={ele.flags.alt}
              width="100px"
              height="100px"
            />
            <h2 className="ctyName">{ele.name.common}</h2>
          </Grid>
        );
      });
      setCardList(cardList);
    }
  }, [flagList]);
  return (
    <div className="mainDiv">
      {/* <h1>country flag</h1> */}
      <Box>
        <Grid container spacing={2}>
          {cardList}
        </Grid>
      </Box>
    </div>
  );
}

export default App;

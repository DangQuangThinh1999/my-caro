import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

import Square from "./component/Square";
import checkWin from "./component/checkWin";

function App() {
  const [amount, setAmount] = useState(20);
  const [firstPlayer, setFirstPlayer] = useState("Player1");
  const [secondPlayer, setSecondPlayer] = useState("Player2");
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [columnResult, setColumnResult] = useState("");
  const [array, setArray] = useState([]);
  const [reset, setReset] = useState(false);
  const handleClick = (i, j) => {
    if (checkWin(array) || array[i][j]) {
      return;
    }
    array[i][j] = isChecked ? "O" : "X";
    setArray(array);
    setIsChecked(!isChecked);
  };
  const winner = checkWin(array);
  let status;
  if (winner) {
    status =
      "Winner: " +
      (isChecked
        ? `
    ${firstPlayer}`
        : `${secondPlayer}`);
  } else {
    status =
      "Turn: " +
      (!isChecked
        ? `
    ${firstPlayer} X`
        : `${secondPlayer} O`);
  }

  useEffect(() => {
    let result = [];
    let newArray = [];
    let column = [];
    for (let j = 0; j < amount; j++) {
      for (let i = 0; i < amount; i++) {
        result.push(null);
      }
      newArray.push(result);
      result = [];
      column.push("auto");
    }
    setArray(newArray);
    setColumnResult(column.join(" "));
  }, [amount, show, reset]);
  const style = {
    display: "grid",
    // gridTemplateColumns: `repeat(${amount}, 1fr)`,
    gridGap: " 5px",
    gridTemplateColumns: `${columnResult}`,
  };
  return (
    <div className="App">
      <div className="game">
        <h1 style={{ fontSize: "30px", color: "#bc6c25" }}>
          LUẬT CHẶN 2 ĐẦU (5 ô liên tục & 6 ô not win)
        </h1>
        {!show ? (
          <div className="form-action">
            <label>Nhập số ô bạn muốn chơi( ô x ô)</label>

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={"input-amount"}
            ></input>

            <label style={{ marginTop: "25px" }}>First Player</label>
            <input
              value={firstPlayer}
              onChange={(e) => setFirstPlayer(e.target.value)}
              className={"input-one"}
            ></input>
            <label style={{ marginTop: "25px" }}>Second Player</label>
            <input
              value={secondPlayer}
              onChange={(e) => setSecondPlayer(e.target.value)}
              className={"input-two"}
            ></input>
            <button className="submit" onClick={() => setShow(true)}>
              PLAY
            </button>
          </div>
        ) : (
          <div className="wrapper">
            <div className="game-board">
              <div style={style}>
                {array.map((numA, i) =>
                  numA.map((numB, j) => (
                    <Square
                      key={i + "a" + j}
                      value={array[i][j]}
                      onClick={() => handleClick(i, j)}
                    />
                  ))
                )}
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
            <div className="game-info">
              <div className="player">
                <div className="submit" onClick={() => setShow(false)}>
                  {" "}
                  RESTART ALL
                </div>
                <div className="submit" onClick={() => setReset(!reset)}>
                  {" "}
                  CLEAR BOARD
                </div>
                <div className="play-one">
                  First Player :<div className="name">{firstPlayer}</div>
                  <span className="color-one"> X</span>
                </div>
                <hr></hr>
                <div className="play-two">
                  Second Player :<div className="name">{secondPlayer}</div>
                  <span className="color-two"> O</span>
                </div>
              </div>
              <hr></hr>
              <hr></hr>
              <div className="status">{status}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

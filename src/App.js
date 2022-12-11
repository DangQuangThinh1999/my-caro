import "./App.css";
import "./index.css";
import Square from "./component/Square";
import { useState } from "react";

function App() {
  let n = 10;
  let result = [];
  let newArray = [];

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      result.push(null);
    }
    newArray.push(result);
    result = [];
  }

  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");
  const [show, setShow] = useState(false);
  const [array, setArray] = useState(newArray);
  const [isChecked, setIsChecked] = useState(false);

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
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isChecked ? "O" : "X");
  }
  let style = {
    display: "gird",
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gridGap: " 20px",
  };
  console.log(style);
  return (
    <div className="App">
      <div className="game">
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
        {!show ? (
          <div className="form-action">
            <label>First Player</label>
            <input
              value={firstPlayer}
              onChange={(e) => setFirstPlayer(e.target.value)}
              className={"input-one"}
            ></input>
            <label>Second Player</label>
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
          <div className="game-info">
            <div className="player">
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
        )}
      </div>
    </div>
  );
}

function checkWin(array) {
  let countDong = 0;
  let countCot = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      //---------dòng------------

      if (array[i][j] != null && array[i][j] === array[i][j + 1]) {
        countDong += 1;
      } else if (array[i][j] != null && array[i][j] !== array[i][j + 1]) {
        countDong = 0;
      }
      if (countDong === 4) {
        countDong = 0;
        return array[i][j];
        //-------------------CỘT------------------------------
      } else if (array[j][i] != null && array[j][i] === array[j + 1][i]) {
        countCot += 1;
      } else if (array[j][i] != null && array[j][i] !== array[j + 1][i]) {
        countCot = 0;
      }
      if (countCot === 4) {
        countCot = 0;

        return array[j][i];
      }
    }
    countDong = 0;
    countCot = 0;
  }

  //--------------------------Chéo trái \------------------
  let countCheoduoi = 0;
  let countCheotren = 0;
  let lengthJ = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < lengthJ; j++) {
      if (
        array[i + j][j] != null &&
        array[i + j][j] === array[i + j + 1][j + 1]
      ) {
        countCheoduoi += 1;
      } else if (
        array[i + j][j] != null &&
        array[i + j][j] !== array[i + j + 1][j + 1]
      ) {
        countCheoduoi = 0;
      }
      if (countCheoduoi === 4) {
        countCheoduoi = 0;
        return array[i + j][j];
      } else if (
        array[j][i + j] != null &&
        array[j][i + j] === array[j + 1][i + j + 1]
      ) {
        countCheotren += 1;
      } else if (
        array[j][i + j] != null &&
        array[j][i + j] !== array[j + 1][i + j + 1]
      ) {
        countCheotren = 0;
      }
      if (countCheotren === 4) {
        countCheotren = 0;
        return array[j][i + j];
      }
    }
    countCheotren = 0;
    countCheoduoi = 0;
    lengthJ--;
  }
  //---------------------------chéo phải /-----------------------------
  let countCheotrenR = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = i; j > 0; j--) {
      if (
        array[j][i - j] != null &&
        array[j][i - j] === array[j - 1][i - j + 1]
      ) {
        countCheotrenR += 1;
      }
      if (
        array[j][i - j] != null &&
        array[j][i - j] !== array[j - 1][i - j + 1]
      ) {
        countCheotrenR = 0;
      }
      if (countCheotrenR === 4) {
        countCheotrenR = 0;
        return array[j][i - j];
      }
      //----------------------------------------------
    }

    countCheotrenR = 0;
  }
  //-----------------------------chép phải dưới /------------------------
  let countCheoduoiR = 0;
  let temp = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    temp++;
    for (let j = i - 1; j > 0; j--) {
      if (
        array[j + temp][i - j + temp] != null &&
        array[j + temp][i - j + temp] === array[j - 1 + temp][i - j + 1 + temp]
      ) {
        countCheoduoiR += 1;
      }
      if (
        array[j + temp][i - j + temp] != null &&
        array[j + temp][i - j + temp] !== array[j - 1 + temp][i - j + 1 + temp]
      ) {
        countCheoduoiR = 0;
      }
      if (countCheoduoiR === 4) {
        countCheoduoiR = 0;
        return array[j + temp][i - j + temp];
      }
      //----------------------------------------------
    }
    countCheoduoiR = 0;
  }
  return null;
}

export default App;

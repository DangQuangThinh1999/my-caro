import Square from "./square";

function Board(n, onClick) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      <Square value={n[i][j]} onClick={() => onClick(i, j)} />;
    }
  }
  return <div className="Board"></div>;
}

export default Board;

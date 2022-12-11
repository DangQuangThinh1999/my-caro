function Square({ value, onClick }) {
  return (
    <div className="square hover" onClick={onClick} >
      <div className={value === "X" ? "color-one" : "color-two"}>{value}</div>
    </div>
  );
}

export default Square;

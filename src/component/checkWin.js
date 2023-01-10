const checkWindow = (array) => {
  let countDong = 0;
  let countCot = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      //---------dòng------------

      if (array[i][j] != null && array[i][j] === array[i][j + 1]) {
        countDong += 1;
      } else if (array[i][j] !== null && array[i][j] !== array[i][j + 1]) {
        countDong = 0;
      }
      // -----------chặn 2 đầu----------

      if (countDong === 4) {
        if (j + 2 > array.length - 1 && j - 4 < 0) {
          return array[i][j];
        } else if (j + 2 < array.length - 1 && j - 4 > 0) {
          if (
            array[i][j] !== array[i][j + 2] &&
            array[i][j] !== array[i][j - 4] &&
            (array[i][j + 2] !== array[i][j - 4] ||
              (array[i][j + 2] === null && array[i][j - 4] === null))
          ) {
            return array[i][j];
          } else countDong = 0;
        } else if (j + 2 < array.length - 1 && array[i][j] !== array[i][j + 2])
          return array[i][j];
        else if (j - 4 > 0 && array[i][j] !== array[i][j - 4])
          return array[i][j];
        countDong = 0;
      }
      // --------------------------------------
      //-------------------CỘT------------------------------
      else if (array[j][i] != null && array[j][i] === array[j + 1][i]) {
        countCot += 1;
      } else if (array[j][i] != null && array[j][i] !== array[j + 1][i]) {
        countCot = 0;
      }
      // -----------chặn 2 đầu----------
      if (countCot === 4) {
        if (j + 2 < array.length - 1 && j - 4 >= 0) {
          if (
            array[j][i] !== array[j + 2][i] &&
            array[j][i] !== array[j - 4][i] &&
            (array[j + 2][i] !== array[j - 4][i] ||
              (array[j + 2][i] === null && array[j - 4][i] === null))
          ) {
            return array[j][i];
          } else countCot = 0;
        } else if (j + 2 < array.length - 1 && array[j][i] !== array[j + 2][i])
          return array[j][i];
        else if (j - 4 >= 0 && array[j][i] !== array[j - 4][i])
          return array[j][i];
        countCot = 0;
      }
      // --------------------------------------
    }
    countDong = 0;
    countCot = 0;
  }

  //--------------------------Chéo trái \------------------
  let countCheoduoi = 0;
  let countCheotren = 0;
  let lengthJ = array.length - 1;
  let tempCheotren = 0;
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

      // --------------------- chặn 2 đầu--------------------------------
      if (countCheoduoi === 4) {
        if (i + j + 2 < array.length && i + j - 4 >= 0) {
          if (
            array[i + j][j] !== array[i + j + 2][j + 2] &&
            array[i + j][j] !== array[i + j - 4][j - 4] &&
            (array[i + j - 4][j - 4] !== array[i + j + 2][j + 2] ||
              (array[i + j - 4][j - 4] === null &&
                array[i + j + 2][j + 2] === null))
          ) {
            return array[i + j][j];
          } else countCheoduoi = 0;
        } else if (
          i + j + 2 < array.length &&
          array[i + j][j] !== array[i + j + 2][j + 2]
        )
          return array[i + j][j];
        else if (i + j - 4 >= 0 && array[i + j][j] !== array[i + j - 4][j - 4])
          return array[i + j][j];
        countCheoduoi = 0;
      }
      // ---------------------------------------------------------
      else if (
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
      // -------------------------- chặn 2 đầu -----------------------
      if (countCheotren === 4) {
        if (i + j + 2 < array.length && i + j - 4 >= tempCheotren) {
          if (
            array[j][i + j] !== array[j + 2][i + j + 2] &&
            array[j][i + j] !== array[j - 4][i + j - 4] &&
            (array[j + 2][i + j + 2] !== array[j - 4][i + j - 4] ||
              (array[j + 2][i + j + 2] === null &&
                array[j - 4][i + j - 4] === null))
          ) {
            return array[j][i + j];
          } else countCheotren = 0;
        } else if (
          i + j + 2 < array.length &&
          array[j][i + j] !== array[j + 2][i + j + 2]
        )
          return array[j][i + j];
        else if (
          i + j - 4 >= tempCheotren &&
          array[j][i + j] !== array[j - 4][i + j - 4]
        )
          return array[j][i + j];
        countCheotren = 0;
      }
      // ------------------------------------------------------
    }
    tempCheotren++;
    countCheotren = 0;
    countCheoduoi = 0;
    lengthJ--;
  }
  //---------------------------chéo phải /-----------------------------
  let countCheotrenR = 0;
  let tempCheotrenR = array.length - 1;
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
      // ----------------------- chặn 2 đầu ------------------------
      if (countCheotrenR === 4) {
        if (j - 2 >= 0 && i - j - 4 <= tempCheotrenR) {
          if (
            array[j][i - j] !== array[j - 2][i - j + 2] &&
            array[j][i - j] !== array[j + 4][i - j - 4] &&
            (array[j - 2][i - j + 2] !== array[j + 4][i - j - 4] ||
              (array[j - 2][i - j + 2] === null &&
                array[j + 4][i - j - 4] === null))
          ) {
            return array[j][i - j];
          } else countCheotrenR = 0;
        } else if (j - 2 < 0 && array[j][i - j] !== array[j + 4][i - j - 4])
          return array[j][i - j];
        else if (
          i - j - 4 <= tempCheotrenR &&
          array[j][i - j] === array[j + 4][i - j - 4]
        )
          return array[j][i - j];
        countCheotrenR = 0;
      }
      //----------------------------------------------
    }
    tempCheotrenR--;
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

      // -----------chặn 2 đầu----------

      if (countCheoduoiR === 4) {
        if (
          i - j + 2 + temp > array.length - 1 &&
          j + temp + 4 > array.length - 1
        )
          return array[j + temp][i - j + temp];
        else if (
          i - j + 2 + temp < array.length &&
          j + temp + 4 < array.length
        ) {
          if (
            array[j + temp][i - j + temp] !==
              array[j - 2 + temp][i - j + 2 + temp] &&
            array[j + temp][i - j + temp] !==
              array[j + temp + 4][i - j + temp - 4] &&
            (array[j - 2 + temp][i - j + 2 + temp] !==
              array[j + temp + 4][i - j + temp - 4] ||
              (array[j - 2 + temp][i - j + 2 + temp] === null &&
                array[j + temp + 4][i - j + temp - 4] === null))
          ) {
            return array[j + temp][i - j + temp];
          } else countCheoduoiR = 0;
        } else if (
          i - j + 2 + temp < array.length &&
          array[j + temp][i - j + temp] !==
            array[j - 2 + temp][i - j + 2 + temp]
        )
          return array[j + temp][i - j + temp];
        else if (
          j + temp + 4 < array.length &&
          array[j + temp][i - j + temp] !==
            array[j + temp + 4][i - j + temp - 4]
        )
          return array[j + temp][i - j + temp];

        countCheoduoiR = 0;
      }
      // --------------------------------------
    }
    countCheoduoiR = 0;
  }
  return null;
};

export default checkWindow;

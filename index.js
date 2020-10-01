const Y = 0;
const X = 1;

const state = [null, X, Y, X, X, Y, null, X, X];

const WINS_STATES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getToggleCurrentTurnFunction() {
  let currentTurn = "max";

  return () => {
    currentTurn = currentTurn === "max" ? "min" : "max";
    return currentTurn;
  };
}

const toggleCurrentFunction = getToggleCurrentTurnFunction();

function minimax(state) {}

function checkWinner(state) {
  const { xIndexes, yIndexes } = state.reduce(
    (gameState, position, index) => {
      if (position === X)
        return { ...gameState, xIndexes: [...gameState.xIndexes, index] };
      if (position === Y)
        return { ...gameState, yIndexes: [...gameState.yIndexes, index] };
      return gameState;
    },
    {
      yIndexes: [],
      xIndexes: [],
    }
  );

  for (let winState of WINS_STATES) {
    if (arrayContains(xIndexes, winState)) return X;
    if (arrayContains(yIndexes, winState)) return Y;
  }

  return null;
}

function checkTie(state) {
  return checkWinner() !== null && state.every((position) => position !== null);
}

function arrayContains(arrayA, arrayB) {
  return (
    arrayA.filter((value) => arrayB.includes(value)).length === arrayB.length
  );
}

export interface Pipe {
  gridSize: number[];
  position: number[];
  flowDirection: string[];
  adjacent?: boolean;
  connecttions?: {
    North: boolean;
    East: boolean;
    South: boolean;
    West: boolean;
  };
}

export const rotate = (pipe: Pipe): Pipe => {
  const flowDirectionAfterRotation: string[] = [];
  //   const currentFlowDirection = pipe.flowDirection;

  //   for (let i = 0; i < pipe.flowDirection.length; i++) {
  //     if (pipe.flowDirection[i] === 'N') flowDirectionAfterRotation[i] = 'E';
  //     if (pipe.flowDirection[i] === 'E') flowDirectionAfterRotation[i] = 'S';
  //   }

  //   pipe.flowDirection.map((eachDirection, index) => {
  //     if (eachDirection[index] === flowDirectionAfterRotation[index]) {
  //       if (eachDirection[index] === 'N') {
  //         flowDirectionAfterRotation[index] = 'E';
  //       }
  //       if (eachDirection[index] === 'E') {
  //         flowDirectionAfterRotation[index] = 'S';
  //       }
  //     }
  //   });
  for (let i = 0; i < 4; i++) {
    if (pipe.flowDirection[i] === flowDirectionAfterRotation[i]) {
      continue;
    }
    {
      if (pipe.flowDirection[i] === 'W') {
        flowDirectionAfterRotation[i] = 'N';
      }

      if (pipe.flowDirection[i] === 'S') {
        flowDirectionAfterRotation[i] = 'W';
      }

      if (pipe.flowDirection[i] === 'E') {
        flowDirectionAfterRotation[i] = 'S';
      }

      if (pipe.flowDirection[i] === 'N') {
        flowDirectionAfterRotation[i] = 'E';
      }
    }
  }

  return { ...pipe, flowDirection: flowDirectionAfterRotation };
};

export const isAdjacent = (pipe1: Pipe, pipe2: Pipe): Pipe => {
  const position1 = pipe1.position;
  const position2 = pipe2.position;
  let checkIfAdjacent1 = pipe1.adjacent;
  let checkIfAdjacent2 = pipe2.adjacent;
  //   console.log(position1[0] + 1);
  console.log(position2[0] + 1);
  if (position1[0] === position2[0] + 1 || position1[0] === position2[0] - 1) {
    checkIfAdjacent1 = true;
    checkIfAdjacent2 = true;
  }

  return { ...pipe1, adjacent: checkIfAdjacent1 } && { ...pipe2, adjacent: checkIfAdjacent2 };
};

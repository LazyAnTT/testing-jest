export interface Rover {
  position: number[];
  facingDirection: string;
  gridSize: number[];
}
// nodefinē sākotnējāš laukumu
export const gridSize = [50, 50];

export const move = (rover: Rover, direction: string): Rover => {
  const facingDirection = rover.facingDirection;
  const position: number[] = rover.position;
  if (facingDirection === 'N') {
    if (direction === 'F') {
      position[1]++;
    }
    if (direction === 'B') {
      position[1]--;
    }
  }

  if (facingDirection === 'E') {
    if (direction === 'F') {
      position[0]++;
    }
    if (direction === 'B') {
      position[0]--;
    }
  }

  if (facingDirection === 'W') {
    if (direction === 'F') {
      position[0]--;
    }
    if (direction === 'B') {
      position[0]++;
    }
  }

  if (facingDirection === 'S') {
    if (direction === 'F') {
      position[1]--;
    }
    if (direction === 'B') {
      position[1]++;
    }
  }
  return { ...rover, position: position };
};

export const turn = (rover: Rover, direction: string): Rover => {
  let facingDirectionAfterTurn = rover.facingDirection;
  const facingDirection = rover.facingDirection;
  const position: number[] = rover.position;
  if (facingDirection === 'N') {
    if (direction === 'R') {
      facingDirectionAfterTurn = 'E';
    }

    if (direction === 'L') {
      facingDirectionAfterTurn = 'W';
    }
  }

  if (facingDirection === 'E') {
    if (direction === 'R') {
      facingDirectionAfterTurn = 'S';
    }
    if (direction === 'L') {
      facingDirectionAfterTurn = 'N';
    }
  }

  if (facingDirection === 'S') {
    if (direction === 'R') {
      facingDirectionAfterTurn = 'W';
    }
    if (direction === 'L') {
      facingDirectionAfterTurn = 'E';
    }
  }

  if (facingDirection === 'W') {
    if (direction === 'R') {
      facingDirectionAfterTurn = 'N';
    }
    if (direction === 'L') {
      facingDirectionAfterTurn = 'S';
    }
  }
  return { ...rover, position: position, facingDirection: facingDirectionAfterTurn };
};

// export const move = (rover: Rover, direction: string): Rover => {
//     const facingDirection = rover.facingDirection;
//     const position: number[] = rover.position;
//     if (facingDirection === 'E' || facingDirection === 'W') {
//       if (direction === 'F') {
//         position[1]++;
//       } else {
//         position[1]--;
//       }
//     } else {
//       if (direction === 'F') {
//         position[0]++;
//       } else {
//         position[0]--;
//       }
//     }
//     return { ...rover, position: position };

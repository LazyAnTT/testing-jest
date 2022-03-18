import { Rover, move, turn } from './mars-rover';

describe('Mars-rover', () => {
  // nodefinē sākotnējāš laukumu
  const gridSize = [50, 50];

  it('should be able to move forward facing North', () => {
    // nodefinē sākotnējās koordinātes
    const startCoordinates = [0, 0];

    // izveido jaunu roveru
    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    // liek roveram kustēties uz priekšu
    rover = move(rover, 'F');

    // piešķir roveram koordinātes mainīgajam
    const coordinates = rover.position;

    // salīdzina koordinātes
    expect(coordinates).toEqual([0, 1]);
  });

  it('should be able to move forward facing East', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'E', gridSize: gridSize };
    rover = move(rover, 'F');

    const coordinates = rover.position;

    expect(coordinates).toEqual([1, 0]);
  });

  it('should be able to move forward facing West', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'W', gridSize: gridSize };
    rover = move(rover, 'F');

    const coordinates = rover.position;

    expect(coordinates).toEqual([-1, 0]);
  });

  it('should be able to move forward facing South', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'S', gridSize: gridSize };

    rover = move(rover, 'F');

    const coordinates = rover.position;

    // salīdzina koordinātes
    expect(coordinates).toEqual([0, -1]);
  });

  it('should be able to move bacward facing North', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    rover = move(rover, 'B');

    const coordinates = rover.position;

    expect(coordinates).toEqual([0, -1]);
  });

  it('should be able to move bacward facing East', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'E', gridSize: gridSize };

    rover = move(rover, 'B');

    const coordinates = rover.position;

    expect(coordinates).toEqual([-1, 0]);
  });

  it('should be able to move bacward facing West', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'W', gridSize: gridSize };

    rover = move(rover, 'B');

    const coordinates = rover.position;

    expect(coordinates).toEqual([1, 0]);
  });

  it('should be able to move bacward facing South', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'S', gridSize: gridSize };

    rover = move(rover, 'B');

    const coordinates = rover.position;

    expect(coordinates).toEqual([0, 1]);
  });

  it('should be able to turn right while facing North', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    rover = turn(rover, 'R');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('E');
  });

  it('should be able to turn right while facing East', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'E', gridSize: gridSize };

    rover = turn(rover, 'R');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('S');
  });

  it('should be able to turn right while facing South', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'S', gridSize: gridSize };

    rover = turn(rover, 'R');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('W');
  });

  it('should be able to turn right while facing West', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'W', gridSize: gridSize };

    rover = turn(rover, 'R');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('N');
  });

  it('should be able to turn left while facing North', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    rover = turn(rover, 'L');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('W');
  });

  it('should be able to turn left while facing West', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'W', gridSize: gridSize };

    rover = turn(rover, 'L');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('S');
  });

  it('should be able to turn left while facing South', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'S', gridSize: gridSize };

    rover = turn(rover, 'L');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('E');
  });

  it('should be able to turn left while facing East', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'E', gridSize: gridSize };

    rover = turn(rover, 'L');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('N');
  });

  it('should be able to do command set FFLFF and be facing WEST', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = turn(rover, 'L');
    rover = move(rover, 'F');
    rover = move(rover, 'F');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([-2, 2]);
    expect(facingDirectionAfterTurn).toEqual('W');
  });

  it('should be able to do command set FFRLBB and be facing North', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = turn(rover, 'R');
    rover = turn(rover, 'L');
    rover = move(rover, 'B');
    rover = move(rover, 'B');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([0, 0]);
    expect(facingDirectionAfterTurn).toEqual('N');
  });

  it('should be able to do command shaping S and be facing EAST', () => {
    const startCoordinates = [0, 0];

    let rover: Rover = { position: startCoordinates, facingDirection: 'N', gridSize: gridSize };

    rover = turn(rover, 'R');
    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = turn(rover, 'L');
    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = turn(rover, 'L');
    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = turn(rover, 'R');
    rover = move(rover, 'F');
    rover = turn(rover, 'R');
    rover = move(rover, 'F');
    rover = move(rover, 'F');
    rover = move(rover, 'F');

    const coordinates = rover.position;
    const facingDirectionAfterTurn = rover.facingDirection;

    expect(coordinates).toEqual([3, 3]);
    expect(facingDirectionAfterTurn).toEqual('E');
  });
});

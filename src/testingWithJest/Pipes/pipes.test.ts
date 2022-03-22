import { Pipe, rotate, isAdjacent } from './pipes';
describe('Pipes', () => {
  const gridSize = [10, 10];

  it('should be able rotate once (clockwise)', () => {
    const coordinates = [0, 0];

    let pipe: Pipe = { position: coordinates, flowDirection: ['W', 'N', 'S'], gridSize: gridSize };
    pipe = rotate(pipe);

    const flowDirectionAfterturn = pipe.flowDirection;

    expect(flowDirectionAfterturn).toEqual(['N', 'E', 'W']);
  });

  it('should be able rotate twice (clockwise)', () => {
    const startCoordinates = [0, 0];

    let pipe: Pipe = { position: startCoordinates, flowDirection: ['W', 'N', 'S'], gridSize: gridSize };
    pipe = rotate(pipe);
    pipe = rotate(pipe);

    const flowDirectionAfterturn = pipe.flowDirection;

    expect(flowDirectionAfterturn).toEqual(['E', 'S', 'N']);
  });

  it('should be able to rotate 2 pipes', () => {
    const coordinates1 = [0, 0];
    const coordinates2 = [1, 0];

    let pipe1: Pipe = { position: coordinates1, flowDirection: ['E', 'W', 'S'], gridSize: gridSize };
    let pipe2: Pipe = { position: coordinates2, flowDirection: ['W', 'N', 'S'], gridSize: gridSize };

    pipe1 = rotate(pipe1);
    pipe2 = rotate(pipe2);

    const flowDirectionAfterturn1 = pipe1.flowDirection;
    const flowDirectionAfterturn2 = pipe2.flowDirection;

    expect(flowDirectionAfterturn1).toEqual(['S', 'N', 'W']);
    expect(flowDirectionAfterturn2).toEqual(['N', 'E', 'W']);
  });

  //   it('should be able to detect if pipe1 is adjacent to pipe2 and visa versa case 1', () => {
  //     const coordinates1 = [0, 0];
  //     const coordinates2 = [1, 0];

  //     let pipe1: Pipe = { position: coordinates1, flowDirection: ['E', 'W', 'S'], gridSize: gridSize, adjacent: null };
  //     let pipe2: Pipe = { position: coordinates2, flowDirection: ['W', 'N', 'S'], gridSize: gridSize, adjacent: null };
  //     pipe1 = isAdjacent(pipe1, pipe2);
  //     pipe2 = isAdjacent(pipe2, pipe2);
  //     // pipe1 = rotate(pipe1);
  //     // pipe2 = rotate(pipe2);

  //     // const flowDirectionAfterturn1 = pipe1.flowDirection;
  //     // const flowDirectionAfterturn2 = pipe2.flowDirection;

  //     const isAdjecentToPipe1 = pipe1.adjacent;
  //     const isAdjecentToPipe2 = pipe2.adjacent;
  //     expect(isAdjecentToPipe1).toBeTruthy();
  //     expect(isAdjecentToPipe2).toBeTruthy();
  //   });

  it('should be able to detect if pipe1 is adjacent to pipe2 and visa versa case 2', () => {
    const coordinates1 = [1, 0];
    const coordinates2 = [0, 0];

    let pipe1: Pipe = { position: coordinates1, flowDirection: ['E', 'W', 'S'], gridSize: gridSize, adjacent: null };
    const pipe2: Pipe = { position: coordinates2, flowDirection: ['W', 'N', 'S'], gridSize: gridSize, adjacent: null };
    pipe1 = isAdjacent(pipe1, pipe2);
    // pipe2 = isAdjacent(pipe1, pipe2);
    // pipe1 = rotate(pipe1);
    // pipe2 = rotate(pipe2);

    // const flowDirectionAfterturn1 = pipe1.flowDirection;
    // const flowDirectionAfterturn2 = pipe2.flowDirection;

    const isAdjecentToPipe1 = pipe1.adjacent;
    const isAdjecentToPipe2 = pipe2.adjacent;
    expect(isAdjecentToPipe1).toBeTruthy();
    expect(isAdjecentToPipe2).toBeTruthy();
  });
});

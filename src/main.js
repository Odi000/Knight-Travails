class KnightTravails {
    constructor() {
        this.board = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.board.push([i, j]);
            }
        }
    }

    nextLegalMoves(coordinates) {
        const legalMoves = [];
        const knight = new Knight();

        for (const prop in knight) {
            if (this.isMoveLegal(knight[prop](coordinates))) {
                legalMoves.push(knight[prop](coordinates));
            };
        }

        return legalMoves;
    }

    isMoveLegal(coordinates) {
        let result = false;

        this.board.find((arr) => {
            if (arr[0] === coordinates[0] && arr[1] === coordinates[1]) {
                result = true;
                return true;
            } else {
                return false;
            }
        })

        return result;
    }

    knightMoves(start, end) {
        //In the queue I add the move coordinates and in index 2 I add the move coordinates into an array
        const queue = [[...start, [start]]];

        recurse(this);

        function recurse(chess) {
            if (queue[0][0] === end[0] && queue[0][1] === end[1]) {
                console.log(`You made it in ${queue[0][2].length} moves.`);
                console.log(...queue[0][2]);
                return;
            }

            const nextMoves = [];

            chess.nextLegalMoves(queue[0]).forEach((move) => {
                const arr = [...move,[...queue[0][2],move]];
                nextMoves.push(arr);
            })

            queue.push(...nextMoves);
            queue.shift();
            recurse(chess);
        }
    }
}

class Knight {
    constructor() {
        this.upLeft = (coordinates) => {
            return [
                coordinates[0] - 1,
                coordinates[1] - 2
            ]
        }

        this.upRight = (coordinates) => {
            return [
                coordinates[0] + 1,
                coordinates[1] - 2
            ]
        }

        this.rightUp = (coordinates) => {
            return [
                coordinates[0] + 2,
                coordinates[1] - 1
            ]
        }

        this.rightDown = (coordinates) => {
            return [
                coordinates[0] + 2,
                coordinates[1] + 1
            ]
        }

        this.downRight = (coordinates) => {
            return [
                coordinates[0] + 1,
                coordinates[1] + 2
            ]
        }

        this.downLeft = (coordinates) => {
            return [
                coordinates[0] - 1,
                coordinates[1] + 2
            ]
        }

        this.leftDown = (coordinates) => {
            return [
                coordinates[0] - 2,
                coordinates[1] + 1
            ]
        }

        this.leftUp = (coordinates) => {
            return [
                coordinates[0] - 2,
                coordinates[1] - 1
            ]
        }
    }
}

const chess = new KnightTravails();
chess.knightMoves([0,0],[6,7]);

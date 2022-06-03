import { Netcode, Coordinates } from './Netcode'


export default class GameLogic {

    testGameInterface: Array<Array<boolean>>;
    HasBeenVerified: Array<Array<boolean>>;
    greeting: string;
    netc: Netcode;
    constructor(message: string) {
        this.greeting = message;
        this.netc = new Netcode();
        this.setTestArray1();
        this.setHasBeenVerified();
        this.netc.processInput = this.processInput;


    }

    setHasBeenVerified() {

        this.HasBeenVerified.fill(new Array<boolean>().fill(false, 0, this.testGameInterface[0].length - 1), 0, this.testGameInterface.length - 1)
    }

    setTestArray1() {
        this.testGameInterface =
            [
                [true, true, true, true, true],
                [true, false, false, false, true],
                [true, false, false, false, true],
                [true, false, false, false, true],
                [true, true, true, true, true],
            ];


    }

    processInput(coords: Array<Coordinates>): Array<Array<Coordinates>> {
        resultCoords: Array<Array<Coordinates>>();

        coords.forEach((coord, index) => {
            if (coord.x < 0 || coord.x >= this.testGameInterface.length || coord.y < 0 || coord.y >= this.testGameInterface[0].length) {
                return;
            }
            if (this.testGameInterface[coord.x][coord.y]) {

            }
            console.log(" x:" + coord.x + " y:" + coord.y + " index:" + index);
        });
        return coords;
    }
}

class LedDisplay {
    private static allLeds: Array<{ x: number, y: number }> = [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 0, y: 4 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 3, y: 2 },
        { x: 3, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 0 },
        { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 4, y: 3 },
        { x: 4, y: 4 },
    ];

    image: Array<{ x: number, y: number }>;
    constructor(image: Array<{ x: number, y: number }>) {
        this.image = image;
    }

    activate(): void {
        for (let i = 0; i < LedDisplay.allLeds.length; i++) {
            let currentLed: { x: number, y: number } = LedDisplay.allLeds[i];
            if (this.image.some((element) => this.shallowEqual(currentLed, element))) {
                led.plot(LedDisplay.allLeds[i].x, LedDisplay.allLeds[i].y);
            } else {
                led.unplot(LedDisplay.allLeds[i].x, LedDisplay.allLeds[i].y);
            }
            
        }
    }

    private shallowEqual(object1: { x: number, y: number }, object2: { x: number, y: number }): boolean {
        if (object1["x"] !== object2["x"]) {
            return false;
        }
        if (object1["y"] !== object2["y"]) {
            return false;
        }
        return true;
    }
}
const line: LedDisplay = new LedDisplay([
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
])
const square: LedDisplay = new LedDisplay([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 0, y: 1 },
    { x: 4, y: 1 },
    { x: 0, y: 2 },
    { x: 4, y: 2 },
    { x: 0, y: 3 },
    { x: 4, y: 3 },
    { x: 0, y: 4 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
]);

input.onButtonPressed(Button.A, function () {
    square.activate();
})
input.onButtonPressed(Button.B, function () {
    line.activate();
})



basic.forever(function () {

})

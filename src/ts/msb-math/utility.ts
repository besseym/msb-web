export function degrees2radians(degrees){
    return degrees * Math.PI / 180.0;
}

export function radians2degrees(radians){
    return radians * 180.0 / Math.PI;
}

export function randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Return a random integer number between min and max
export function createRandomRangeGenerator(min: number, max: number): Function {

    return function() {
        return randomRange(min, max);
    };
}

// Return a random integer number between min and max
export function createIntegerRandomRangeGenerator(min: number, max: number): Function {

    return function() {
        return Math.floor((Math.random() * max) + min);
    };
}

// Return a random integer number between min and max
export function integerRandomRange(min: number, max: number): number {
    return Math.floor((Math.random() * max) + min);
}
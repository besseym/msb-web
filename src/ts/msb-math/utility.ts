export const TWO_PI = 2 * Math.PI;

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

export function constrain(v: number, min: number, max: number) {
    
    let r = v;
    if (r < min) {
        r = min;
    }
    else if (r > max) {
        r = max;
    }

    return r;
}

// http://bl.ocks.org/mbostock/4349187
// Sample from a normal distribution with mean 0, stddev 1.
export function normalDistribution(): number {

    let x: number = 0, y: number = 0, rds: number, c: number;
    do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        rds = x * x + y * y;
    } while (rds === 0 || rds > 1);
    c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
    return x * c; // throw away extra sample y * c
}

// Simple 1D Gaussian (normal) distribution
export function normalGaussianGenerator(mean: number, deviation: number): Function {

    return function() {
        return mean + deviation * normalDistribution();
    };
}

// Return a random integer number between min and max
export function createHarmonicGenerator(applitude: number, period: number): Function {

    return function(count: number) {
        return applitude * Math.cos(TWO_PI * count / period);
    };
}
/**
 * Created by michaelbessey on 8/20/16.
 */

import {randomRange, Vector} from "../../msb-math";

import {NatureRepeller} from "../repeller";
import {
    NatureParticle,
    NatureParticleCircle,
    NatureParticleSquare,
    NatureParticleTriangle
} from "./particle";

export abstract class NatureParticleSystem {

    particles: NatureParticle [];

    constructor(public location: Vector) {

        this.particles = [];
    }

    abstract addParticle();

    applyForce(force: Vector){

        let particle: NatureParticle;
        for (particle of this.particles) {
            particle.applyForce(force);
        }
    }

    applyRepeller(repeller: NatureRepeller){

        let particle: NatureParticle,
            force: Vector;

        for (particle of this.particles) {
            force = repeller.repel(particle);
            particle.applyForce(force);
        }
    }

    draw(context: CanvasRenderingContext2D): void {

        let particle: NatureParticle;
        for (let i = this.particles.length - 1; i >= 0; i--) {

            particle = this.particles[i];
            if (!particle.isDead()) {

                particle.update();
                particle.draw(context);
            }
            else {
                this.particles.splice(i, 1);
            }
        }
    }
}

export class NatureParticleSystemConfetti extends NatureParticleSystem {

    addParticle(): void {

        let particle: NatureParticle,
            r: number = Math.random();

        if (r < 0.34) {
            particle = new NatureParticleCircle();
        }
        else if (r < 0.67) {
            particle = new NatureParticleSquare();
        }
        else {
            particle = new NatureParticleTriangle();
        }

        // particle = new ParticleSquare();
        // particle.aVelocity = getRangeRandom(0, 1);

        particle.velocity = new Vector(randomRange(-2, 2), randomRange(-3, -1));
        particle.location = this.location.clone();
        this.particles.push(particle);
    }
}

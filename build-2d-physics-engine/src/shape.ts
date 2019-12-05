import { Engine } from "./engine";
import { vec2 } from "gl-matrix";

export interface Shape {
  center: vec2,
  angle: number,

  draw(engine: Engine): void
}

export class Rectangle implements Shape {
  x: number
  y: number
  angle = 0
  
  constructor (public center: vec2, public width: number, public height: number) {
    const [x, y] = [center[0], center[1]]
    this.x = x - width / 2
    this.y = y - height / 2
  }

  draw (engine: Engine): void {
    const { context } = engine;

    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.angle)
    context.strokeRect(0, 0, this.width, this.height)
    context.restore()
  }
}

export class Circle implements Shape {
  angle = 0

  constructor(public center: vec2, public radius: number) {

  }

  draw ({ context }: Engine) : void {
    context.save()
    context.beginPath()

    context.arc(this.center[0], this.center[1], this.radius, 0, Math.PI * 2, true)
    context.moveTo(this.center[0], this.center[1] - this.radius)
    context.lineTo(this.center[0], this.center[1])

    context.closePath()
    context.stroke()
    context.restore()
  }
}
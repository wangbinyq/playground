import { Engine } from "./engine";
import { vec2 } from "gl-matrix";

export class Shape {
  fixed: boolean = false
  center: vec2 = vec2.create()
  angle: number = 0

  draw(engine: Engine) {}

  update (engine: Engine) {
    if (this.center[1] < engine.height && !this.fixed) {
      this.move(vec2.fromValues(0, 1))
    }
  }

  move (v: vec2) {
    vec2.add(this.center, this.center, v)
  }

  rotate (angle: number) {
    this.angle += angle
  }
}

export class Rectangle extends Shape {
  constructor (public center: vec2, public width: number, public height: number, public fixed: boolean = false) {
    super()
  }

  get x () {
    return this.center[0] - this.width / 2
  }

  get y () {
    return this.center[1] - this.height / 2
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

export class Circle extends Shape {
  constructor(public center: vec2, public radius: number) {
    super()
  }

  get x () {
    return this.center[0]
  }

  get y () {
    return this.center[1]
  }

  draw ({ context }: Engine) : void {
    context.save()
    context.beginPath()

    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    context.moveTo(this.x, this.y - this.radius)
    context.lineTo(this.x, this.y)

    context.closePath()
    context.stroke()
    context.restore()
  }
}
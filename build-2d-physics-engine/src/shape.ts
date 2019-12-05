import { Engine } from "./engine";
import { vec2 } from "gl-matrix";

export class Shape {
  fixed: boolean = false
  center: vec2 = vec2.create()
  angle: number = 0

  get centerX () {
    return this.center[0]
  }

  get centerY () {
    return this.center[1]
  }

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

  draw (engine: Engine): void {
    const { context } = engine;

    context.save()
    context.translate(this.centerX, this.centerY)
    context.rotate(this.angle)
    context.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height)
    context.restore()
  }
}

export class Circle extends Shape {
  constructor(public center: vec2, public radius: number) {
    super()
  }

  get startPoint (): [number, number] {
    const x = this.centerX + this.radius * Math.cos(this.angle)
    const y = this.centerY + this.radius * Math.sin(this.angle)

    return [x, y]
  }

  draw ({ context }: Engine) : void {
    context.save()
    context.beginPath()

    context.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, true)
    context.moveTo(...this.startPoint)
    context.lineTo(this.centerX, this.centerY)

    context.closePath()
    context.stroke()
    context.restore()
  }
}
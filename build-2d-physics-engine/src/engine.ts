import { Shape } from "./shape"

export class Engine {
  context: CanvasRenderingContext2D
  width: number
  height: number
  selectShape: number = -1
  shapes: Shape[] = []

  constructor(public canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.width = canvas.width
    this.height = canvas.height
  }

  addShape(shape :Shape) {
    this.shapes.push(shape)
  }

  draw () {
    this.context.clearRect(0, 0, this.width, this.height)
    this.shapes.forEach((shape, i) => {
      if (i == this.selectShape) {
        this.context.strokeStyle = 'red'
      } else {
        this.context.strokeStyle = 'blue'
      }
      shape.draw(this)
    })
  }

  render () {
    requestAnimationFrame(() => this.render())
    this.draw()
  }
}
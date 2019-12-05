import { Shape } from "./shape"
import { addRect, addCircle } from "./control"

export class Engine {
  context: CanvasRenderingContext2D
  width: number
  height: number
  selectShape: number = 0.0
  shapes: Shape[] = []

  constructor(public canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.width = canvas.width
    this.height = canvas.height
  }

  addShape(shape :Shape) {
    this.shapes.push(shape)
  }

  addRect () {
    addRect(this)
  }

  addCircle () {
    addCircle(this)
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

  update () {
    this.shapes.forEach(shape => shape.update(this))
  }

  render () {
    requestAnimationFrame(() => this.render())
    this.update()
    this.draw()
  }
}
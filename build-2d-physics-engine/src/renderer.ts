import { Matter, Circle, Rect } from "./matter"
import { World } from "./world"

export class Renderer {

  constructor(private context: CanvasRenderingContext2D, private width: number, private height: number) {
  }

  render (matter: Matter) {
    if ('radius' in matter) {
      this.drawCircle(matter)
    } else {
      this.drawRect(matter)
    }

  }

  renderWorld (world: World) {
    this.context.clearRect(0, 0, this.width, this.height)
    world.matters.forEach(m => this.render(m))
  }

  drawCircle(circle: Circle) {
    const { context } = this

    context.save()
    context.translate(circle.position[0], circle.position[1])
    context.rotate(circle.rotate)
    context.beginPath()
    context.lineTo(0, circle.radius)
    context.stroke()
    context.closePath()
  
    context.beginPath()
    context.moveTo(0, 0)
    context.arc(0, 0, circle.radius, 0, 2 * Math.PI)
    context.stroke()
    context.closePath()
    context.restore()
  }

  drawRect(rect: Rect) {
    const { context } = this
    context.save()

    context.translate(rect.position[0], rect.position[1])
    context.rotate(rect.rotate)

    context.strokeRect(-rect.width / 2, -rect.height/ 2, rect.width, rect.height)

    context.restore()
  }
}
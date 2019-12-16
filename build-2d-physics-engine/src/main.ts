import { vec2 } from 'gl-matrix'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const { height, width } = canvas
const context = canvas.getContext('2d') as CanvasRenderingContext2D

type vec = vec2 | [number, number]

interface Matter {
  radius: number,
  weight: number,

  position: vec,
  velocity: vec,

  rotate: number,
  angularVelocity: number,
}


const circleMatter : Matter = {
  weight: 0.1,
  position: [200, 200],
  velocity: [0, 0],
  radius: 10,

  rotate: 0,
  angularVelocity: 0,
}

function drawCircle(circle: Matter) {
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

let force: vec = [1e-6, 9.8e-6]

let lastTime = 0
function run (time: number) {
  const delta = time - lastTime

  let [ x, y ] = circleMatter.position as any
  let [ vx, vy ] = circleMatter.velocity as any

  if (x < 0) {
    x = 0
    vx = -vx
  } else if (x > width) {
    x = width
    vx = - vx
  }
  
  if (y < 0) {
    y = 0
    vy = -vy
  } else if (y > height) {
    y = height
    vy = -vy
  }
  
  circleMatter.velocity = vec2.add(
    vec2.create(),
    [vx, vy],
    [delta * force[0] / circleMatter.weight, delta * force[1] / circleMatter.weight]
  )

  circleMatter.position = vec2.add(
    vec2.create(),
    [x, y],
    [delta * circleMatter.velocity[0], delta * circleMatter.velocity[1]]
  )

  circleMatter.angularVelocity += delta * 0
  circleMatter.rotate += delta * circleMatter.angularVelocity

  lastTime = time
}

function render (time: number) {
  requestAnimationFrame(render)
  run(time)

  context.clearRect(0, 0, width, height)
  drawCircle(circleMatter)
}

render(lastTime)
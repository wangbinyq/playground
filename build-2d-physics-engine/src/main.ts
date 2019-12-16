import { vec2 } from 'gl-matrix'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const { height, width } = canvas
const context = canvas.getContext('2d') as CanvasRenderingContext2D

type vec = vec2 | [number, number]

interface Matter {
  weight: number,
  position: vec,
  velocity: vec,
  acceleration: vec,
  rotate: number,
}

interface CircleMatter extends Matter {
  radius: number,
}

const circleMatter : CircleMatter = {
  weight: 10,
  position: [11, 11],
  velocity: [0.05, 0.01],
  acceleration: [1e-6, 2e-5],
  radius: 10,
  rotate: 0,
}

function drawCircle(circle: CircleMatter) {
  context.beginPath()
  context.arc(circle.position[0], circle.position[1], circle.radius, 0, 2 * Math.PI)
  context.stroke()
  context.closePath()
}


let lastTime = 0
function run (time: number) {
  const elipse = time - lastTime
  
  circleMatter.velocity = vec2.add(
    vec2.create(),
    circleMatter.velocity,
    [elipse * circleMatter.acceleration[0], elipse * circleMatter.acceleration[1]]
  )

  circleMatter.position = vec2.add(
    vec2.create(),
    circleMatter.position,
    [elipse * circleMatter.velocity[0], elipse * circleMatter.velocity[1]]
  )

  lastTime = time
}

function render (time: number) {
  requestAnimationFrame(render)
  run(time)

  context.clearRect(0, 0, width, height)
  drawCircle(circleMatter)
}

render(lastTime)
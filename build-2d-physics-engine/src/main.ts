import { vec2 } from 'gl-matrix'
import { initWorld } from './world'
import { Renderer } from './renderer'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const { height, width } = canvas
const context = canvas.getContext('2d') as CanvasRenderingContext2D

const world = initWorld(width, height)
const renderer = new Renderer(context, width, height)

let lastTime = 0
function render(time: number) {
  requestAnimationFrame(render)

  const delta = time - lastTime
  if (delta < 200) {
    world.step(time - lastTime)
    renderer.renderWorld(world)
  }

  lastTime = time
}

render(lastTime)
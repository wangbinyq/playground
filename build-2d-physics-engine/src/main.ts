import { Engine } from './engine'
import { addRect, addCircle } from './control'
import { Rectangle } from './shape'
import { vec2 } from 'gl-matrix'

const engine = new Engine(document.getElementById('canvas') as any)
document.getElementById('add-rect')?.addEventListener('click', () => addRect(engine))
document.getElementById('add-circle')?.addEventListener('click', () => addCircle(engine))
document.getElementById('select-shape')?.addEventListener('change', (e) => {
  const value = (e.currentTarget as any).value
  engine.selectShape = value * 1
})

const up = new Rectangle(vec2.fromValues(engine.width / 2, 0), engine.width, 3)
const bottom = new Rectangle(vec2.fromValues(engine.width / 2, engine.height), engine.width, 3)
const left = new Rectangle(vec2.fromValues(0, engine.height / 2), 3, engine.height)
const right = new Rectangle(vec2.fromValues(engine.width, engine.height / 2), 3, engine.height)

;[up, bottom, left, right].forEach(shape => engine.addShape(shape))

engine.render()
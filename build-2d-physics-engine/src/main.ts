import { Engine } from './engine'
import { Rectangle } from './shape'
import { vec2 } from 'gl-matrix'
import { GUI } from 'dat.gui'

const engine = new Engine(document.getElementById('canvas') as any)

const gui = new GUI()
let selectShapeGui: GUI | null = null

gui.add(engine, 'addRect')
gui.add(engine, 'addCircle')
gui.add(engine, 'selectShape', 0).onChange((val: number) => {
  const selectShape = engine.shapes[val]
  if (selectShape) {
    if (selectShapeGui) {
      gui.removeFolder(selectShapeGui)
    }
    selectShapeGui = gui.addFolder('shape')
    selectShapeGui.add(selectShape.center, '0')
    selectShapeGui.add(selectShape.center, '1')
    selectShapeGui.add(selectShape, 'angle', 0.0, Math.PI * 2, 0.001)
  }
})

const up = new Rectangle(vec2.fromValues(engine.width / 2, 0), engine.width, 3, true)
const bottom = new Rectangle(vec2.fromValues(engine.width / 2, engine.height), engine.width, 3, true)
const left = new Rectangle(vec2.fromValues(0, engine.height / 2), 3, engine.height, true)
const right = new Rectangle(vec2.fromValues(engine.width, engine.height / 2), 3, engine.height, true)

;[up, bottom, left, right].forEach(shape => engine.addShape(shape))

engine.render()
import { Engine } from './engine'
import { addRect, addCircle } from './control'

const engine = new Engine(document.getElementById('canvas') as any)
document.getElementById('add-rect')?.addEventListener('click', () => addRect(engine))
document.getElementById('add-circle')?.addEventListener('click', () => addCircle(engine))
document.getElementById('select-shape')?.addEventListener('change', (e) => {
  const value = (e.currentTarget as any).value
  engine.selectShape = value * 1
})

engine.render()
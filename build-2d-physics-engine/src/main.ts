import { Engine } from './engine'
import { addRect, addCircle } from './control'

const engine = new Engine(document.getElementById('canvas') as any)
document.getElementById('add-rect')?.addEventListener('click', () => addRect(engine))
document.getElementById('add-circle')?.addEventListener('click', () => addCircle(engine))

engine.render()
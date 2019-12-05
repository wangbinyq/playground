import { Core } from './core'
import { addRect, addCircle } from './control'

const core = new Core(document.getElementById('canvas') as any)
document.getElementById('add-rect')?.addEventListener('click', () => addRect(core))
document.getElementById('add-circle')?.addEventListener('click', () => addCircle(core))
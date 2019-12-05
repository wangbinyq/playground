import { Engine, Render, World, Bodies } from 'matter-js'

const engine = Engine.create()
const render = Render.create({
  element: document.body,
  engine,
})

const boxA = Bodies.rectangle(400, 200, 80, 80)
const boxB = Bodies.rectangle(450, 50, 80, 80)
const bar = Bodies.rectangle(420, 300, 50, 10, { isStatic: true })
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

World.add(engine.world, [boxA, boxB, bar, ground])

Engine.run(engine)
Render.run(render)

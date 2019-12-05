import { GUI } from 'dat.gui'
import { Engine, Render, World, Bodies, Mouse, MouseConstraint } from 'matter-js'

const engine = Engine.create()
const render = Render.create({
  element: document.body,
  engine,
})
const world = engine.world
const mouse = Mouse.create(render.canvas)
const mouseConstaint = MouseConstraint.create(engine, {
  mouse, constraint: {
    stiffness: 0.98,
    render: { visible: false }
  } as any
})

const gui = new GUI()

const boxA = Bodies.rectangle(400, 200, 80, 80)
const boxB = Bodies.rectangle(450, 50, 80, 80)
const ball = Bodies.circle(420, 100, 20)
const bar = Bodies.rectangle(420, 300, 50, 10, { isStatic: true })
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

World.add(world, [boxA, boxB, ball, bar, ground])
World.add(world, mouseConstaint)

Engine.run(engine)
Render.run(render)

import { Core } from "./core";

export function addRect(core: Core) {
  const { context, width, height } = core

  context.strokeRect(
    Math.random() * width * 0.8,
    Math.random() * height * 0.8,
    Math.random() * 30 + 10,
    Math.random() * 30 + 10
  )
}

export function addCircle(core: Core) {
  const { context, width, height } = core
  context.beginPath()
  context.arc(
    Math.random() * width * 0.8,
    Math.random() * height * 0.8,
    Math.random() * 30 + 10, 0, Math.PI * 2, true
  )
  context.closePath()
  context.stroke()
}
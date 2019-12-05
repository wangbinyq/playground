import { Engine } from "./engine";
import { Rectangle, Circle } from "./shape";
import { vec2 } from "gl-matrix";

export function addRect(engine: Engine) {
  const { width, height } = engine

  engine.addShape(new Rectangle(
    vec2.fromValues(
      Math.random() * width * 0.8,
      Math.random() * height * 0.8,
    ),
    Math.random() * 30 + 10,
    Math.random() * 30 + 10
  ))
}

export function addCircle(engine: Engine) {
  const { width, height } = engine

  engine.addShape(new Circle(
    vec2.fromValues(
      Math.random() * width * 0.8,
      Math.random() * height * 0.8,),
      Math.random() * 30 + 10,
  ))
}
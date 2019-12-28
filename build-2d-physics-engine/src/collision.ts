import { Circle, Matter } from "./matter";
import { vec2 } from "gl-matrix";

export interface Collision {
  m1: Matter,
  m2: Matter,
  p1: vec2,
  p2: vec2,
}

export function circleCircleCollision(c1: Circle, c2: Circle): Collision | null {
  const dist = vec2.sqrDist(c1.position, c2.position)

  const penetrating = (c1.radius + c2.radius) - dist
  if (penetrating < 0) {
    return null
  }

  const p1 = 

  return {
    m1: c1, m2: c2,
  }
}
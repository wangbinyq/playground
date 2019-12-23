import { Matter, Rect, Circle } from "./matter";
import { vec2 } from 'gl-matrix'

let g = [1e-4, 9.8e-4]
const width = 800
const height = 600

export class World {
  matters: Matter[] = []

  add(...matters: Matter[]) {
    this.matters = this.matters.concat(matters)
  }

  step(delta: number) {
    this.matters.forEach(m => {
      if (!m.weight) { return }
      let [ x, y ] = m.position as any
      let [ vx, vy ] = m.velocity as any
    
      if (x < 0) {
        x = 0
        vx = -vx
      } else if (x > width) {
        x = width
        vx = - vx
      }
      
      if (y < 0) {
        y = 0
        vy = -vy
      } else if (y > height) {
        y = height
        vy = -vy
      }
      
      m.velocity = vec2.add(
        vec2.create(),
        [vx, vy],
        [delta * g[0], delta * g[1]]
      )
    
      m.position = vec2.add(
        vec2.create(),
        [x, y],
        [delta * m.velocity[0], delta * m.velocity[1]]
      )
    
      m.angularVelocity += delta * 0
      m.rotate += delta * m.angularVelocity
    })
  }
}

export function initWorld (width: number, height: number) {
  const world = new World()
  const walls: Rect[] = [
    { weight: 0, position: [ -1, height / 2 ], velocity: [0, 0], rotate: 0, angularVelocity: 0, width: 3, height,  },
    { weight: 0, position: [ width + 1, height / 2 ], velocity: [0, 0], rotate: 0, angularVelocity: 0, width: 3, height,  },
    { weight: 0, position: [ width / 2, -1 ], velocity: [0, 0], rotate: 0, angularVelocity: 0, width, height: 3,  },
    { weight: 0, position: [ width / 2, height + 1 ], velocity: [0, 0], rotate: 0, angularVelocity: 0, width, height: 3,  },
  ]

  const balls: Circle[] = [
    { radius: 10 * Math.random() + 10, weight: 0.1 * Math.random(), position: [ Math.random() * width, Math.random() * height ], velocity: [0, 0], rotate: 0, angularVelocity: 0,  },
    { radius: 20 * Math.random() + 5, weight: 10 * Math.random(), position: [ Math.random() * width, Math.random() * height ], velocity: [0, 0], rotate: 0, angularVelocity: 0,  },
    { radius: 15 * Math.random() + 5, weight: 10 * Math.random(), position: [ Math.random() * width, Math.random() * height ], velocity: [0, 0], rotate: 0, angularVelocity: 0,  },
    { radius: 20 * Math.random() + 5, weight: 10 * Math.random(), position: [ Math.random() * width, Math.random() * height ], velocity: [0, 0], rotate: 0, angularVelocity: 0,  },
  ]

  world.add(...walls, ...balls)

  return world;
}
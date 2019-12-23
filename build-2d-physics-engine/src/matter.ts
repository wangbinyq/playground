import { vec2 } from "gl-matrix"

type vec = vec2 | number[]


export interface IMatter {
  weight: number
  
  position: vec
  velocity: vec
  
  rotate: number
  angularVelocity: number
}

export interface Rect extends IMatter {
  width: number
  height: number
}

export interface Circle extends IMatter {
  radius: number
}

export type Matter = Rect | Circle

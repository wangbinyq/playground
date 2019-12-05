export class Core {
  context: CanvasRenderingContext2D
  width: number
  height: number
  
  constructor(public canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.width = canvas.width
    this.height = canvas.height
  }
}
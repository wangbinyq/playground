class Dog {
  // a dog has age of years, weight and other attrs 
  constructor (public age: number, public weight: number, public stamina: number) {}

  // dog eat food
  eat (food: any) {
    // dog is full
    if (this.stamina === 100) {
      return
    }

    if (food.type === 'meat') {
      // magic number 0.8 ?
      this.weight += food.weight * 0.8
      this.stamina += food.engry * 0.8
    } else {
      // other food 
    }

    // food is consumed ?
    food.consumed()
  }

  // dog can walk
  walk (world: any, distance: any) {
    // dog need rest
    if (this.stamina < 0) {
      return
    }

    // dog knows the world or worl has dog ?
    world.move(this, distance)
    this.stamina -= distance * 0.1
  }
}
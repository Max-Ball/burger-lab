import { Fake_db } from "../db/FakeDB.js"

class BurgersService{

  async getBurgers(){
    return Fake_db.burgers
  }

  async createBurger(burgerData){
    burgerData.id = Fake_db.burgers.length
    Fake_db.burgers.push(burgerData)
    return burgerData
  }

  async getBurgerById(burgerId){
    let burger = Fake_db.burgers.find(b => b.id == burgerId)

    if(!burger){
      throw new Error('Invalid Id')
    }

    return burger
  }

  async deleteBurger(burgerId){
    let burger = await this.getBurgerById(burgerId)
    let burgerIndex = Fake_db.burgers.indexOf(burger)
    Fake_db.burgers.splice(burgerIndex, 1)

    return burger
  }

  async editBurger(burgerId, burgerData){
    let burger = await this.getBurgerById(burgerId)

    burger.name = burgerData.name || burger.name
    burger.toppingAmount = burgerData.toppingAmount || burger.toppingAmount

    return burger
  }
}

export const burgersService = new BurgersService()
import { Fake_db } from "../db/FakeDB.js";
import { burgersService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController{
  constructor(){
    super('/api/burgers')

    this.router
    .get('', this.getBurgers)
    .post('', this.createBurger)
    .get('/:burgerId', this.getBurgerById)
    .delete('/:burgerId', this.deleteBurger)
  }


  async getBurgers(req, res, next){
    try {
      let burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next){
    try {
      let burgerData = req.body
      let burger = await burgersService.createBurger(burgerData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async getBurgerById(req, res, next){
    try {
      let burger = await burgersService.getBurgerById(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next){
    try {
      let burger = await burgersService.deleteBurger(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async editBurger(req, res, next){
    try {
      let burger = await burgersService.deleteBurger(req.params.burgerId, req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
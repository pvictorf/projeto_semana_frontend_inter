import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController { 
  async signin(req: Request, res: Response) {
    const userService = new UserService();

    const { email, password } = req.body;
    
    const { user, accessToken } = await userService.signin({email, password})

    return res.status(200).send({user, accessToken});
  } 

  async signup(req: Request, res: Response) {
    const userService = new UserService();

    const user = await userService.signup(req.body)

    return res.send({message: user});
  }
}
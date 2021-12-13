import { getRepository, Repository } from 'typeorm';
import { AppError } from '../../shared/error/AppError';
import bcrypt from 'bcrypt';

import { User } from '../../entities/User';

import { UserSignin } from './dtos/user.signin.dto';
import { UserSignup } from './dtos/user.signup.dto';


export class UserService {

  async signin(user: UserSignin): Promise<User|null> {
    const userRepository = getRepository(User);
    const {email, password} = user;

    const existUser = await userRepository.findOne({where: { email }});
    const correctPassword = await bcrypt.compare(password ?? '', existUser?.password ?? '');


    if(!existUser || !correctPassword) {
      throw new AppError('Usuário não encontrado.', 401);
    }

    return existUser;
  }  

  async signup(user: UserSignup) {
    const userRepository = getRepository(User);

    console.log(user);

  }
}
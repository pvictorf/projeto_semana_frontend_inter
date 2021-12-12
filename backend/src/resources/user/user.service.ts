import { getRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../../entities/User';

import { UserSignin } from './dtos/user.signin.dto';
import { UserSignup } from './dtos/user.signup.dto';
import { AppError } from '../../shared/error/AppError';

export class UserService {

  async signin(user: UserSignin): Promise<User> {
    const userRepository = getRepository(User);
    const {email, password} = user;
   
    const existUser = await userRepository.findOne({where: { email }});

    if(!existUser || !bcrypt.compare(password, existUser.password)) {
      throw new AppError('Usuário não encontrado.', 401);
    }

    return existUser;
  }

  async signup(user: UserSignup) {
    //const passwordHash = bcrypt.hash(password, 10);
  }
}
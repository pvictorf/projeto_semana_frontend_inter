
import { AppError } from './../../shared/error/AppError';
import { getRepository } from 'typeorm';
import { AuthService } from './../auth/auth.service';

import { User } from '../../entities/User';
import { UserSigninDto } from '@resources/user/dtos/user.signin.dto';
import { UserSignupDto } from '@resources/user/dtos/user.signup.dto';
import { AuthLoginDto } from './../auth/dtos/auth.login.dto';

import bcrypt from 'bcrypt';


export class UserService {
  private userRepository;
  private authService;

  constructor() {
    this.userRepository = getRepository(User);
    this.authService = new AuthService()
  }

  async signin(user: UserSigninDto): Promise<AuthLoginDto> {
    const { email, password } = user;
    const existUser = await this.userRepository.findOne({where: { email }});
    const correctPassword = await bcrypt.compare(password ?? '', existUser?.password ?? '');

    if(!existUser || !correctPassword) {
      throw new AppError('Usuário não encontrado.', 401);
    }

    return this.authService.login(existUser);
  }  


  async signup(user: UserSignupDto) {
    const { email } = user;
    const existUser = await this.userRepository.findOne({where: { email }}); 

    if(existUser) {
      throw new AppError('Usuário com em-mail existente.', 401);
    }

    const userData = {
      ...user, 
      wallet: 0,
      accountNumber: Math.floor(Math.random() * 999999),
      accountDigit: Math.floor(Math.random() * 99),
      password: await bcrypt.hash(user.password, 10),
    }

    const newUser = await this.userRepository.save(userData);

    return newUser;
  }
}
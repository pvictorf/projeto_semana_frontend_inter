import { sign } from "jsonwebtoken";
import { User } from "../../entities/User";
import { AuthLoginDto } from './dtos/auth.login.dto';
import authConfig from "../../config/auth"


export class AuthService {

  async login(user: User): Promise<AuthLoginDto> {
    const { secret, expiresIn } = authConfig.jwt;

    const userData: AuthLoginDto['user'] = {  
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        accountNumber: user.accountNumber,
        accountDigit: user.accountDigit,
        wallet: user.wallet,
    } 

    const accessToken = sign(userData, secret, { subject: user.id, expiresIn})
  
    return { user: userData, accessToken };
  }
} 
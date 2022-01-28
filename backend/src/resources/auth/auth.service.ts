import { sign } from "jsonwebtoken";
import { User } from "../../entities/User";
import { AuthUserDto } from './dtos/auth.user.dto';
import authConfig from "../../config/auth"


export class AuthService {

  async authenticate(user: User): Promise<AuthUserDto> {
    const { secret, expiresIn } = authConfig.jwt;

    const userData: AuthUserDto['user'] = {  
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
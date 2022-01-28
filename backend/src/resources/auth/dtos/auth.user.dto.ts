import { User } from "@entities/User";


export interface AuthUserDto {
  user: Pick<User, "email" | "firstName" | "lastName" | "accountNumber" | "accountDigit" | "wallet">,
  accessToken: string,
}
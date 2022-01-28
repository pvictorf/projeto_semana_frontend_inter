import { User } from "@entities/User";


export interface AuthLoginDto {
  user: Pick<User, "email" | "firstName" | "lastName" | "accountNumber" | "accountDigit" | "wallet">,
  accessToken: string,
}
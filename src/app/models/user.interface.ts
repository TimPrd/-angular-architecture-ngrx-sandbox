export interface IUser{
  id:number,
  name:string, 
  cardNumber:string,
  cardType:string,
  random: number,
}

export interface IUserHttp {
  users: IUser[];
}
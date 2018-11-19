import {Request, Response} from "express"

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User, users}  from "./users";

import * as jwt from "jsonwebtoken";
import { apiConfig }  from "./api-config";

export const handleAuthentication = (req: Request, resp: Response)=>{
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    const token = jwt.sign({sub: dbUser.email, iss: 'hm-api'},
      apiConfig.secret)
    resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
  }else{
    resp.status(403).json({message: 'Dados invállidos.'})
  }
}

function isValid(user: User): boolean {
  console.log(user)

  if (!user) {
    return false
  }
  const dbUser = users[user.email]
  return dbUser != undefined && dbUser.matches(user)
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({ 
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }


  getAllAcconts(): Observable<Account[]>{
   return this.httpClient.get<Account[]>("http://localhost:8080/api/accounts");

  }
  createAccount(account: Account): Observable<Account>{
    return this.httpClient.post<Account>("http://localhost:8080/api/accounts", account);
  }

  getAccountById(id: number): Observable<Account>{
    return this.httpClient.get<Account>("http://localhost:8080/api/accounts/"+id);
  }

  deposit(id:number, amount: number ): Observable<Account>{
    const request ={ amount };
    return this.httpClient.put<Account>("http://localhost:8080/api/accounts/"+id+"/deposit", request);

  }

  withdraw(id:number, amount: number ): Observable<Account>{
    const request ={ amount };
    return this.httpClient.put<Account>("http://localhost:8080/api/accounts/"+id+"/withdraw", request);

  }

  delete(id: number): Observable<Account>{
    return this.httpClient.delete<Account>("http://localhost:8080/api/accounts/delete/"+id);
  }
}

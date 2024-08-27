import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {

  accounts: Account[]=[];

  constructor(private accountService: AccountService,
    private router: Router
  ){}

  ngOnInit(){
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.getAllAcconts().subscribe({ next: (data)=>{
      this.accounts = data;
    }

    });
  }

  deposit(id: number){
   this.router.navigate(['/deposit', id]);
  }

  withdraw(id: number){
     this.router.navigate(['/withdraw', id]);
  }


  delete(id: number){
    this.accountService.delete(id).subscribe({next: (res)=>{
      console.log(res);
      this.getAccounts();
    }

    });
  }


  view(id: number){
    this.router.navigate(['/account-details', id]);
  }

}

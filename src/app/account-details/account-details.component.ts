import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {

  id: number = 0;
  account: Account = new Account();

  constructor(private accountService: AccountService,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(){
    this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe({ next: (res)=>{
      this.account = res;
    }

    });
  }


}

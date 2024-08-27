import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';
import { setTimeout } from 'node:timers';


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent {

  account: Account = new Account();

  accountCreate = false;

  constructor(private accountService: AccountService,
    private router : Router
  ){}

  ngOnInit(){}

  onSubmit(){
    this.saveAccount();
  }

  saveAccount(){
    this.accountService.createAccount(this.account).subscribe({ next: (data)=>{
      console.log(data);
      this.accountCreate = true;
        this.router.navigate(['/accounts']);
        alert("Account created successfully");
    }

    });
  }
}

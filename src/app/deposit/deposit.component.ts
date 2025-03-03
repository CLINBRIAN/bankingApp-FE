import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {

  account:Account = new Account();

  id: number=0;
  constructor(private accountService: AccountService,
    private route : ActivatedRoute,  
    private router: Router
  ){}

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe({ next: (res)=>{
      this.account = res;
    }

    });
  }

  successMessage="";
  errorMessage = "";  
  onSubmit(){

    if(this.isValidAmount(this.account.balance)){

    this.accountService.deposit(this.id, this.account.balance).subscribe({ next:(res)=>{
      this.account= res;
     
      this.successMessage="deposit success...";

      setTimeout(()=>{
        this.router.navigate(['/accounts']);
      }, 1000);

    }

    });
  }else{
    this.errorMessage="invalid amount..please enter a valid amount";
     setTimeout(()=>{
        this.errorMessage="";
     }, 1000)
  }

  }

  isValidAmount(amount: number): boolean{
    return amount>0 && amount<1000000000;

  }
}

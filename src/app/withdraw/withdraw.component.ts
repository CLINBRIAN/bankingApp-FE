import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  id:number = 0;
  account: Account = new Account();

  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe({ next: (res)=>{
      this.account = res;
    }});
  }

  successMessage="";
  errorMessage="";

  onSubmit(){
   if(this.isValidAmount(this.account.balance)){
   this.accountService.withdraw(this.id, this.account.balance).subscribe({ next:(res)=>{
    this.account=res;
    this.successMessage="withdrawal success";
    setTimeout(()=>{
      this.router.navigate(['/accounts']);
    }, 1000);
   }});

  }else{
    this.errorMessage="please enter the valid amount";
    
    setTimeout(()=>{
      this.errorMessage="";
    }, 1000);

  }
}

isValidAmount(amount: number): boolean{

  return amount>0 && amount<1000000000;
}
}
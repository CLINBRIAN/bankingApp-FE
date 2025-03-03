import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {path: 'accounts', component: AccountListComponent},
  {path: 'create-account', component: CreateComponentComponent},
  {path: 'deposit/:id', component: DepositComponent},
  {path: '', redirectTo: 'accounts', pathMatch: 'full'},
  {path: 'withdraw/:id', component: WithdrawComponent},
  {path: 'account-details/:id', component: AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginFormComponent} from './components/login/login-form.component';
import { CarteBancaireComponent} from './components/request/carte-bancaire/carte-bancaire.component';
import{CchequeComponent} from './components/request/ccheque/ccheque.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RequestComponent } from './components/request/request.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionsHistoryComponent } from './components/transactions-history/transactions-history.component';
import { SimulationCreditComponent } from './components/simulation-credit/simulation-credit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RibComponent } from './components/rib/rib.component';

const routes: Routes = [
  {path:'dashboard',component : DashboardComponent },
   {path:'logged',component : ProfileComponent },
  {path:'logout', component:LogoutComponent},
  {path:'login',component : LoginFormComponent },
  {path:'accounts',component : AccountsComponent },
  {path:'addtransaction',component : AddTransactionComponent },
  {path:'transactions',component : TransactionsHistoryComponent },
  {path:'simulationcredit',component : SimulationCreditComponent },
  {path:'profile',component : ProfileComponent },
  {path:'rib',component : RibComponent },

  {
    path:  'request',
    component:  RequestComponent,
    children: [
    {path:  'ccheque', component:  CchequeComponent},
    {path:  'creditCard',component:  CarteBancaireComponent}

    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
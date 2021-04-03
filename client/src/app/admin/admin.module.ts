import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent]
})
export class AdminModule { }

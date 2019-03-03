import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import {TestserviceService } from './testservice.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import {RouterModule , Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituderComponent } from './edituder/edituder.component';
import { EmpuserComponent } from './empuser/empuser.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const approutes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
   {
     path: '',
    component: EmployeeComponent
   },
  { path: 'add-user', component: AdduserComponent },
  { path: 'edit-user', component: EdituderComponent },
  // { path: 'empuser', component:  EmpuserComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    AdduserComponent,
    EdituderComponent,
    EmpuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [TestserviceService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';
import { PageNotFoundComponent } from  './NotFound.component';
import { AppUsers } from  './users.component';
import { RouterModule, Routes } from '@angular/router';
import { MyserviceService } from './myservice.service';
const appRoutes: Routes = [
   { path: 'albums', component: Appproduct },
   { path: 'photos/:id', component: AppInventory },
   { path: '', component: AppUsers },
  //  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,Appproduct,AppInventory,PageNotFoundComponent,AppUsers
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
     RouterModule.forRoot(appRoutes),
     HttpModule
  ],
   providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

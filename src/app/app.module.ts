import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { DataService } from './data.service';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddWebComponent } from './add-web/add-web.component';
import { EthicalComponent } from './ethical/ethical.component';
import { AddEthicalComponent } from './add-ethical/add-ethical.component';
import { CyberComponent } from './cyber/cyber.component';
import { AddCyberComponent } from './add-cyber/add-cyber.component';
import { EditWebComponent } from './edit-web/edit-web.component';
import { BarsComponent } from './bars/bars.component';
import { EditEthicalComponent } from './edit-ethical/edit-ethical.component';
import { WebComponent } from './web/web.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavigationComponent,
    SidebarComponent,
    AddWebComponent,
    EthicalComponent,
    AddEthicalComponent,
    CyberComponent,
    AddCyberComponent,
    EditWebComponent,
    BarsComponent,
    EditEthicalComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

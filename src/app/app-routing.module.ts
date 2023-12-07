import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCyberComponent } from './add-cyber/add-cyber.component';
import { AddEthicalComponent } from './add-ethical/add-ethical.component';
import { AddWebComponent } from './add-web/add-web.component';
import { AdminComponent } from './admin/admin.component';
// import { CyberComponent } from './cyber/cyber.component';
import { CyberComponent } from './cyber/cyber.component';
import { EditWebComponent } from './edit-web/edit-web.component';
import { EthicalComponent } from './ethical/ethical.component';
import { LoginComponent } from './login/login.component';
import { EditEthicalComponent } from './edit-ethical/edit-ethical.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},


  {path:'admin_page',component:AdminComponent ,children:[
    {path: '', pathMatch:'full', redirectTo:'web'},
    {path:'web' ,component:WebComponent},
    {path:'add_web',component:AddWebComponent},
    {path:'ethical',component:EthicalComponent},
    {path:'add_ethical',component:AddEthicalComponent},
  ]},

  {path:'editw/:id',component:EditWebComponent},
  {path:'editE/:id',component:EditEthicalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

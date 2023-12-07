import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Users } from './users';
import { Web_Users } from './web';
import { Ethical_Users } from './ethical';
import { Cyber_Users } from './cyber';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl:string ='http://localhost:80/academy/';
  constructor(private http: HttpClient) { }

  getWeb(){
    return this.http.get<Web_Users[]>(this.baseUrl+'view_web.php');

  }
  getSingleWeb(id:number){
    return this.http.get<Web_Users[]>(this.baseUrl+'view_web.php?id='+id);
  }



  getEthical(){
    return this.http.get<Ethical_Users[]>(this.baseUrl+'view_ethical.php');
  }
  getSingleEthical(id:number){
    return this.http.get<Ethical_Users[]>(this.baseUrl+'view_ethical.php?id='+id);
  }

  getCyber(){
    return this.http.get<Cyber_Users[]>(this.baseUrl+'view_cyber.php');
  }
  getSingleCyber(id:number){
    return this.http.get<Cyber_Users[]>(this.baseUrl+'view_cyber.php?id='+id);
  }

  deleteWeb(id:any){
    console.log(id);
    return this.http.delete(this.baseUrl+'delete_web.php?id='+id);
  }


  // deleteCyber(id:any){
  //   console.log(id);
  //   return this.http.delete(this.baseUrl+'delete_cyber.php?id='+id);
  // }


  deleteEthical(id:any){
    console.log(id);
    return this.http.delete(this.baseUrl+'delete_ethical.php?id='+id);
  }

  editUser(contact:any) {
    return this.http.put(this.baseUrl+'update.php', contact);
  }

  editEthical(ethical:any) {
    return this.http.put(this.baseUrl+'update_ethical.php', ethical);
}
  editCyber(cyber:any) {
    return this.http.put(this.baseUrl+'update_cyber.php', cyber);
}

insertWeb(id:any) {
  return this.http.post(this.baseUrl+'insert.php', id);
}
insertEthical(ethical:any) {
  return this.http.post(this.baseUrl+'insert_ethical.php', ethical);
}
// insertCyber(cyber:any) {
//   return this.http.post(this.baseUrl+'insert_cyber.php', cyber);
// }
  userLogin(EMAIL:any,PASSWORD:any){
    return this.http.post<any>(this.baseUrl+'login.php',
    {EMAIL,PASSWORD}
    ).pipe(map(User =>{
      this.setToken(User.EMAIL);
      return User;
    }

      ));
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }
}



import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl,FormBuilder,Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm:FormGroup;

  constructor(private dataservice:DataService,private formbuilder:FormBuilder,private router:Router) {
    this.angForm=this.formbuilder.group({
      EMAIL:['',Validators.required],
      PASSWORD:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  postdata(angForm:any){
    this.dataservice.userLogin(angForm.value.EMAIL,angForm.value.PASSWORD)
    .pipe(first())
    .subscribe(data=>{
      if(data.message=='success'){
        this.router.navigate(['admin_page']);
      }
      else{
        this.router.navigate(['login']);
        alert("Incorret Email or Password");
      }
    },);
  }

}

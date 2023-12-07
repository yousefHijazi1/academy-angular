import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-web',
  templateUrl: './add-web.component.html',
  styleUrls: ['./add-web.component.css']
})
export class AddWebComponent implements OnInit {
addForm :any;
  constructor(private data:DataService,private router:Router){
    this.addForm=new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]) ,
      password: new FormControl('',Validators.required),
      gender: new FormControl ('',Validators.required),
      fees: new FormControl ('',Validators.required)
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.data.insertWeb(this.addForm.value).subscribe(
      (data:any)=>{
      if(data.success !=0)
        this.router.navigate(['admin_page']);
      else
        alert(data.message);
      },
      error => {
      alert(JSON.stringify(error));
    });
  }
}

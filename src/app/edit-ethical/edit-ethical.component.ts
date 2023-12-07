import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl,Validators, } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-ethical',
  templateUrl: './edit-ethical.component.html',
  styleUrls: ['./edit-ethical.component.css']
})
export class EditEthicalComponent implements OnInit {
addForm:any;
ethical_id:any;
  constructor(private data:DataService,private router:Router,private url:ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]) ,
      password: new FormControl('',Validators.required),
      grade : new FormControl('',Validators.required),
      fees :new FormControl ('',Validators.required)
    });

    this.ethical_id = this.url.snapshot.params['id'];

    if (this.ethical_id>0) {
      this.data.getSingleEthical(this.ethical_id).subscribe(
                  (result:any)=>{
                    console.log(result.output);
                    this.addForm.patchValue(result.output[0]);
                  }
      )

    }
  }
  onEdit(){
    this.data.editEthical(this.addForm.value).subscribe(
      (data:any)=>{
        if(data.success >0){
        console.log(data);
        this.router.navigate(['admin_page/ethical']);}
        else
        alert(data.message);
      },

    error => {
      alert(JSON.stringify(error));
    });
  }

}

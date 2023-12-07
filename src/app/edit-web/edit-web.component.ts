import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-web',
  templateUrl: './edit-web.component.html',
  styleUrls: ['./edit-web.component.css']
})
export class EditWebComponent implements OnInit {
addForm:any;
user_id:any;
  constructor(private data:DataService,private url:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]) ,
      password: new FormControl('',Validators.required),
      grade : new FormControl('',Validators.required),
      fees :new FormControl ('',Validators.required)
    });

    this.user_id = this.url.snapshot.params['id'];

    if (this.user_id>0) {
      this.data.getSingleWeb(this.user_id).subscribe(
                  (result:any)=>{
                    console.log(result.output);
                    this.addForm.patchValue(result.output[0]);
                  }
      )

    }
  }

  onEdit(){
    this.data.editUser(this.addForm.value).subscribe(
      (data:any)=>{
        if(data.success >0){
        console.log(data);
        this.router.navigate(['admin_page']);}
        else
        alert(data.message);
      },
    error => {
      alert(JSON.stringify(error));
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  web_users:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getWeb().subscribe(
      (result:any)=>{
        console.log(result)
        this.web_users=result.output;
      }
    )
  }

  deleteWeb(web:any){
    // console.log(id);
    this.data.deleteWeb(web.id).subscribe(
      data=>{
        this.web_users = this.web_users.filter((u: any) => u !== web);
        //assign to the data field contacts all contacts except the deleted contact
    })
    alert("User Deleted ..!");
  }
}

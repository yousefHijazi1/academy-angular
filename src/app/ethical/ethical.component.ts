import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl,Validators ,NgForm} from '@angular/forms';
@Component({
  selector: 'app-ethical',
  templateUrl: './ethical.component.html',
  styleUrls: ['./ethical.component.css']
})
export class EthicalComponent implements OnInit {
ethical_users:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getEthical().subscribe(
      (result:any)=>{
        console.log(result);
        this.ethical_users=result.output;
      }
    )
  }

  deleteEthical(e:any){
    this.data.deleteEthical(e.id).subscribe(
      (result:any)=>{
        console.log(result);
        this.ethical_users=this.ethical_users.filter((x: any) => x !== e);
        alert("User Deleted Succesfully...")
      }
    )
  }

}

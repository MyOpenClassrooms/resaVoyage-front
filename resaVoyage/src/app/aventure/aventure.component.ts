 import { Component, OnInit } from '@angular/core';
 import {AventureService} from "../services/aventure.service";

@Component({
  selector: 'app-aventure',
  templateUrl: './aventure.component.html',
  styleUrls: ['./aventure.component.css']
})
export class AventureComponent implements OnInit {
  public allAventures:any = [];
  public aventure;
  public aventureList:any = [];
  constructor(private aventureService: AventureService) { }

  ngOnInit() {
    this.getAllAventures();
    for (let i=1; i<5; i++){
      this.aventureList.push(this.getAventureById(i))
    }
  }

  getAllAventures(){
    this.aventureService.getAllAventures().subscribe((res)=>{
      this.allAventures = res;
      console.log("tessssssssst ",  this.allAventures );
    });
  }

  getAventureById(id:number){
    this.aventureService.getAventureById(id).subscribe((res)=>{
        this.aventure = res;
        JSON.stringify(this.aventure);
        console.log("aventure by Id is good avec id :",  this.aventure);

    });
  }

}

import { Component, OnInit } from '@angular/core';
import {AventureService} from "../services/aventure.service";
import {Aventure} from "../../shared/models/aventure";

@Component({
  selector: 'app-detail-aventure',
  templateUrl: './detail-aventure.component.html',
  styleUrls: ['./detail-aventure.component.css']
})
export class DetailAventureComponent implements OnInit {

  public aventure:Aventure;
  private id: number;

  constructor(private aventureService: AventureService) { }

  ngOnInit() {
    this.getAventureById(this.id);
  }

  getAventureById(id:number){
    return this.aventureService.getAventureById(id).subscribe((res)=>{
      this.aventure = res;
      //JSON.stringify(this.aventure);
      console.log("aventure by Id is good avec id :", this.aventure);

    });
  }

}

import { Component, OnInit } from '@angular/core';
import {AventureService} from "../services/aventure.service";
import {Aventure} from "../../shared/models/aventure";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-aventure',
  templateUrl: './detail-aventure.component.html',
  styleUrls: ['./detail-aventure.component.css']
})
export class DetailAventureComponent implements OnInit {

  public aventure:Aventure;
  private id: number;
  private aventureId: number;

  constructor(public activatedRoute: ActivatedRoute, private aventureService: AventureService) { }

  ngOnInit() {
    this.aventureId = this.activatedRoute.snapshot.params['id'];
    this.getAventureById(this.aventureId);
  }

  getAventureById(id:number){
    return this.aventureService.getAventureById(id).subscribe((res)=>{
      this.aventure = res;
      console.log("aventure by Id is good avec id :", this.aventure);
    });
  }

}

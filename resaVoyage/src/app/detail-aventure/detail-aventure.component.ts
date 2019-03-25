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

  aventure: Aventure = { id: null, title: '', description: '', location: '', price: null, image: '',nbparticipant: null, sessions: null, category_id: null };
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

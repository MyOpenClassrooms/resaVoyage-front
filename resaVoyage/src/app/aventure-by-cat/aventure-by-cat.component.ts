import { Component, OnInit } from '@angular/core';

import {AventureService} from "../services/aventure.service";
import {Aventure} from "../../shared/models/aventure";
import {ActivatedRoute} from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/shared/models/category';
import { CategoryService } from '../services/category.service';



@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}


@Component({
  selector: 'app-aventure-by-cat',
  templateUrl: './aventure-by-cat.component.html',
  styleUrls: ['./aventure-by-cat.component.css']
})
export class AventureByCatComponent implements OnInit {
  private aventuresByCat: Aventure[];
  categorie: Category = {  id: null, title: '', description : '', image: '',  keywords: ''};
  constructor(private aventureService:AventureService,private categoryService:CategoryService, private route: ActivatedRoute,) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCategoryById(id);
    this.getAventuresByCategory(id);

  }

  getAventuresByCategory(id:number){
    return this.aventureService.getAventuresByCategory(id).subscribe((res)=>{
      this.aventuresByCat = res;
    })
  }
  getCategoryById(id:number){
    return this.categoryService.getCategoryById(id).subscribe((res)=>{
      this.categorie = res;
    })
  }

}

import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {AventureService} from "../services/aventure.service";
import {Aventure} from "../../shared/models/aventure";


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
  selector: 'app-all-aventure',
  templateUrl: './all-aventure.component.html',
  styleUrls: ['./all-aventure.component.css']
})
export class AllAventureComponent implements OnInit {
  public allAventures:Aventure[] = [];


  constructor(private aventureService: AventureService) { }

  ngOnInit() {
    this.getAllAventures();

  }

  getAllAventures(){
    this.aventureService.getAllAventures().subscribe((res)=>{
      this.allAventures = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../services/commentaire.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service : CommentaireService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form !=null)
      form.resetForm();
    this.service.formData = {
      idcommentaire : null,
      idutilisateur : null,
      idaventure : null,
      content : '',
      date : null
    }

  }

  onSubmit(form: NgForm) {
     this.insertRecord(form);

  }

  insertRecord(form: NgForm){
     this.service.postCommentaire(form.value).subscribe(res=> {
       this.resetForm(form);
     }
       )
  }

}

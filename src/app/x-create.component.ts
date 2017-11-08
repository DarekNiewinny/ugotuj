import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-x-create',
  template: `
    <p>
      x-create works!
    </p>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" [(ngModel)]="x.name">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input class="form-control" [(ngModel)]="x.description">
    </div>  
<div>   
      <button (click)="save()">Save</button>
     
</div> 
<hr>
<button routerLink="/">Wroc do listy</button>`,

  styles: []
})
export class XCreateComponent implements OnInit {
  ngOnInit(): void {

  }
  x = {
    
  }

  save(){
    this.http.post('http://localhost:3000/recipes/', this.x)
    .subscribe( x=> {
       // po zapisaniu czyscimy formularz, aby moc dodawac nowe Xy
       this.x= {}
    })
  }

  constructor(private http: HttpClient){ }
}
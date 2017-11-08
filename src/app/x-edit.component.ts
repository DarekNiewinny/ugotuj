import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-x-edit',
  template: `
    <p>
      x-edit works!
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
    <button (click)="update()">Update</button>
</div>
    <hr>
    <button routerLink="/">Wroc do listy</button>`,
  styles: []
})
export class XEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  x= {}
  
  update(){    
    this.http.put('http://localhost:3000/recipes/'+ this.x['id'], this.x)
    this.http.put('http://localhost:3000/recipes/'+ this.x['id'], this.x)
    .subscribe( x=> {
      this.x = x
    })
  }

  ngOnInit() {
    this.x['id'] = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3000/recipes/'+ this.x['id'])
    .subscribe( x=> {
      this.x = x
    })
  }

}
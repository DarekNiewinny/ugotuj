import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-x-details',
  template: `
    <p>
      x-details works!
    </p>
     <h1>{{x.name}}</h1>
  `,
  styles: []
})
export class XDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  x = {}

  ngOnInit() {
    this.x['id'] = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3000/recipes/'+ this.x['id'])
    .subscribe( x => {
      this.x = x
    })
  }
}  
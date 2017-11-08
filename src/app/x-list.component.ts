import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-xlist-component',
  template: `
    <p>
      xlist-component works!
    </p>
<input class="form-control" placeholder="Wpisz zapytanie..." ngModel (ngModelChange)="search($event)">

 <table class="table">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th></th>
      </tr>
      <tr *ngFor="let x of list">
        <td>{{ x.name }}</td>
        <td>{{ x.description }}</td>
        <td>
          <button [routerLink]="['x-edit',x.id]">Edit</button>          
          <button [routerLink]="['x-details',x.id]">Details</button>
          <button (click)="remove(x.id)">&times;</button>
        </td>
      </tr>
    </table>
    <button routerLink="x-create">Utworz nowy</button>
  `,
  styles: []
})
export class XlistComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
 
 search(query){
    if(query){
      // Gdy zapytanie nie jest puste  - pytamy serwer
      this.http.get('http://localhost:3000/recipes/?q='+query)
      // aktualizujemy liste
      .subscribe(list => this.list = list)

    }else{
      // Gdy pole jest puste - wyswietlamy wszystko
      this.fetchAll()
    }
  }
  list
 remove(id){
    // kasujemy element 
    this.http.delete('http://localhost:3000/recipes/'+id)
    // Gdy serwer odpowie - pobieramy Xy ponownie aby usuniety element zniknal z listy
    .subscribe(()=> this.fetchAll())
  }


  fetchAll(){
    // tworzymy zapytanie
    this.http.get('http://localhost:3000/recipes/')
      // subskrybujemy sie na wyniki - przychodzace dane przypisujemy do tablicy this.list
      .subscribe(list => this.list = list)
  }

  ngOnInit() {
    // na starcie pobieramy wszystko
    this.fetchAll()
  }
}
 
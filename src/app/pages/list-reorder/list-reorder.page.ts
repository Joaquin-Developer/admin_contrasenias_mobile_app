import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ["Aquaman", "Superman", "Batman", "Mujer Maravilla", "Flash"];
  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(evt: any) {
    console.log(evt);
    const itemReorder = this.personajes.splice(evt.detail.from, 1)[0];
    this.personajes.splice(evt.detail.to, 0, itemReorder);

    evt.detail.complete();
  }

}

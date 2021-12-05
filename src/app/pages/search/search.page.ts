import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  searchText: string = "";

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albums => {
      this.albums = albums
    })
  }

  onSearchChange(evt) {
    this.searchText = evt.detail.value;
    console.log(evt)
  }

}

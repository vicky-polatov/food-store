import { Component } from '@angular/core';

@Component({
  selector: 'filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent {
  search = ''

  onSearch() {
    console.log(this.search)
  }

}

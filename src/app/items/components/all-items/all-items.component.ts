import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Item } from '../../../../data';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrl: './all-items.component.css'
})
export class AllItemsComponent {
  items: any;
  constructor(
    private itemService: ItemsService,
    private localStorageService: LocalStorageService
    ){ }

  ngOnInit(){
    this.getStoreItems()
  }

  getStoreItems(){
    this.itemService.getAllItems().subscribe({
      next: (response) => {
        this.items = response;
        this.items.forEach((item: Item) => {
          this.localStorageService.setItem(item.id, item)
        });
      },
      error: (err) => console.log(err.message)
    })
  }

}

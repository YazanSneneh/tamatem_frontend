import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.css'
})
export class ItemsDetailComponent implements OnInit {
  itemId: string | null = null;
  item: any = {};
  isUserAuthenticated = false

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.getItemFromLocalStorage()
    this.getItemDetails();
    this.checkAuthenticated()
  }

  getItemDetails() {
    this.itemsService.getItemDetails(this.itemId).subscribe({

      next: (response: any) => {
        this.item.description = response.description;
        this.localStorageService.setItem(this.item.id, this.item)
      },
      error: (err) => console.error(err.message)
    });

  }

  getItemFromLocalStorage(){
    if (this.itemId) {
      this.item = this.localStorageService.getItem(this.itemId) || {};
    }
  }

  checkAuthenticated(){
    const token = this.localStorageService.getItem("token")
    if (token){
      this.isUserAuthenticated = true
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../../../data';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent {
  itemId: string | null = null;
  item: any = {};
  isUserAuthenticated = false

  editForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    price: new FormControl<Number>(0.0),
  });

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private itemService: ItemsService,
    private router: Router
    ) {}

  ngOnInit(){
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.getItemFromLocalStorage()
    this.fillFormValues()
  }

  getItemFromLocalStorage(){
    this.item = this.localStorageService.getItem(this.itemId!);
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.checkAuthenticated()

      const { name, description, price } = this.editForm.value;
      const body = { name, description, price };

      if (this.isUserAuthenticated){
        this.itemService.updateItemDetails(this.item.id, body).subscribe({
            next: (response: any) => {
              this.router.navigate(['/items'], this.item.id);
            },
            error: (err) => console.error(err.message)
        });
    }
    }
  }

  checkAuthenticated(){
    const token = this.localStorageService.getItem("token")
    if (token){
      this.isUserAuthenticated = true
    }
  }

  fillFormValues(){
    this.editForm.patchValue({
      name: this.item.name,
      description: this.item.description,
      price: this.item.price
    })
  }
}

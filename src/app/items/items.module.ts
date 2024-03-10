import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AllItemsComponent } from './components/all-items/all-items.component';
import { ItemsDetailComponent } from './components/items-detail/items-detail.component';
import { SharedModule } from "../shared/shared.module";
import { EditItemComponent } from './components/edit-item/edit-item.component';

const routes:Routes = []

@NgModule({
    declarations: [
        AllItemsComponent,
        ItemsDetailComponent,
        EditItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        SharedModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ItemsModule { }

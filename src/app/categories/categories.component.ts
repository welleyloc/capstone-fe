import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  categoryCount: string;
  categorySize: HTMLElement;
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;

      this.categoryCount = JSON.stringify(this.categories.length);
    })
  }

headerTitle = "Product Categories List"

}

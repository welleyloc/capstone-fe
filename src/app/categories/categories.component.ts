import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  categoryDataSource = new MatTableDataSource(this.categories);
  displayedColumns = ['categoryId', 'categoryName', 'actions'];
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(private categoryService: CategoryService) {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
      this.categoryDataSource.data = this.categories;
    })
  }

  ngOnInit() {
    this.categoryDataSource.sort = this.sort;
    this.categoryDataSource.paginator = this.paginator;
  }

  public deleteCategory(categoryId: number) {
    var category = this.categories.filter(function (category) {
      return category.categoryId === categoryId;
    })

    let categoryString = JSON.stringify(category, null, 4);
    
    this.categoryService.delete(categoryId).subscribe(result => {
      this.categoryService.findAll().subscribe(data => {
        this.categories = data;
        this.categoryDataSource.data = this.categories;
      })
    })

    console.log("Category and associated products deleted.");

    error => {
      console.error("Category delete function error\n" + error);
    }
  }

headerTitle = "Product Categories List"

}

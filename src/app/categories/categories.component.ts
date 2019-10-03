import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DelDialogueService } from '../del-dialogue.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  category: Category;

  updateCategoryForm = this.formBuilder.group({
    categoryName: [''],
  })

  categoryDataSource = new MatTableDataSource(this.categories);
  displayedColumns = ['categoryId', 'categoryName', 'actions'];
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(
    private categoryService: CategoryService,
    private delDialogueService: DelDialogueService,
    private formBuilder: FormBuilder
    ) {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
      this.categoryDataSource.data = this.categories;
    })
  }

  ngOnInit() {
    this.categoryDataSource.sort = this.sort;
    this.categoryDataSource.paginator = this.paginator;
  }

  openCatAdd() {
    this.delDialogueService.openCatAdd().afterClosed().subscribe(add => {
      if (add) {
        console.log("Category added!")
      }
    })
  }

  updateCategory(formCategory: Category) {
    this.category = formCategory;
    this.updateCategoryForm.patchValue({
      categoryName: formCategory.categoryName
    })
  }

  submitUpdate() { 

    this.category.categoryName = this.updateCategoryForm.value.categoryName;

    console.log(this.category);
    this.categoryService.update(this.category, this.category.categoryId).subscribe(result => {
      console.log("Category updated!")
      location.reload();
    })
  }

  deleteCategory(categoryId: number) {
    
    this.delDialogueService.openConfirm('WARNING: Removing this category will remove all associated products.').afterClosed().subscribe(remove => {
      if (remove) {
        this.categoryService.delete(categoryId).subscribe(result => {
          location.reload();
        })
      }
    })
  }

headerTitle = "Product Categories List"

}

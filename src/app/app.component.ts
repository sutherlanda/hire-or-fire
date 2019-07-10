import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Category } from './models/category.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Hire-or-Fire?';
	categories: Category[] = [];

	constructor(private employeeService: EmployeeService) { }

	ngOnInit() {
		this.categories = this.employeeService.getEmployeeData();
	}

	onUpdate() {
		console.log(this.categories);
	}

	// // Filters the passed in set of categories and removes inactive employees
	// filterCategoriesByActive(categories: Category[]): Category[] {
		
	// 	const activeCategories: Category[] = [];
	// 	categories.map(category => {
	// 		category.employees = category.employees
	// 	})
	// }
}

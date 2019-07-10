import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Employee } from '../models/employee.model';

// import the JSON data as a module - this service could be extended to retrieve the data from an API instead,
// but for now this is sufficient
import * as data from '../../../data.json';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor() { }

	getEmployeeData(): Category[] {
		const categories: Category[] = [];
		data.categories.forEach(rawCategory => {
			const newCategory = new Category(rawCategory.name);
			rawCategory.employees.forEach(rawEmployee => {
				const newEmployee = new Employee(rawEmployee, true);
				newCategory.addEmployee(newEmployee);
			});
			categories.push(newCategory);
		});
		return categories;
	}
}

import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Category } from 'src/app/models/category.model';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

	@Input() categories: Category[] = [];
	@Input() isActiveList: boolean;

	selectedEmployees: Employee[];
	textFilter: string = '';

	constructor() { }

	ngOnInit() { }

	// Returns a count of the number of employees in this list
	getEmployeeCount(): number {

		let count = 0;
		this.categories.forEach(category => {
			count += category.employees.filter(employee => employee.isActive === this.isActiveList).length;
		});
		return count;
	}

	// Toggles the active status of the selected employees
	toggleSelectedEmployees(): void {
		this.selectedEmployees.forEach(employee => {
			employee.toggleActiveStatus();
		});
	}

	// Moves all employees to other list by setting their active status to the opposite of this list status.
	// Respects the current filter.
	toggleAllEmployees(): void {
		this.categories.forEach(category => {
			category.employees.filter(employee => employee.name.toLowerCase().includes(this.textFilter.toLowerCase()))
			.forEach(employee => {
				employee.isActive = !this.isActiveList;
			});
		});
	}
}

import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: false
})
@Injectable()
export class EmployeeFilter implements PipeTransform {

    // Filter by active status, text filter, and then sort
    transform(employees: Employee[], removeActive: boolean, textFilter: string = "") {
        return employees.filter(employee => employee.isActive === removeActive && employee.name.toLowerCase().includes(textFilter.toLowerCase()))
            .sort((employee1, employee2) => {
                if (employee1.name > employee2.name) {
                    return 1;
                } else {
                    return -1;
                }
            });
    }
}

import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: false
})
@Injectable()
export class EmployeeFilter implements PipeTransform {
    transform(employees: Employee[], removeActive: boolean, textFilter: string = "") {
        return employees.filter(employee => employee.isActive === removeActive && employee.name.toLowerCase().includes(textFilter.toLowerCase()));
    }
}

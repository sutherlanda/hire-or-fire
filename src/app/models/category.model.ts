import { Employee } from './employee.model';

export class Category {
    constructor(public name: string, public employees: Employee[] = []) { }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
}
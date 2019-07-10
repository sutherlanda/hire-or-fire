export class Employee {
    constructor(public name: string, public isActive: boolean = true) { }

    toggleActiveStatus(): void {
        this.isActive = !this.isActive;
    }
}

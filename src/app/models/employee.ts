export class Employee {
    name: string;
    surname: string;
    email: string;
    department: string;
    active: boolean;

    constructor(pName: string, pSurname: string, pEmail: string, pDepartment: string) {
        this.name = pName;
        this.surname = pSurname;
        this.email = pEmail;
        this.department = pDepartment;
        this.active = true;
    }
}
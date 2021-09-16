import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployees: Employee[] = [
    {
      employeeId: 1001,
      fName: 'Omkar',
      lName: 'Jagtap',
      gender: 'Male',
      dateOfBirth: new Date('12/14/1998'),
      dateJoined: new Date('01/06/2021'),
      phone: 7387633292,
      email: 'jagtapomkar555@gmail.com',
      street: 'Alandi road',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: 411039,
      dName: 'Software Developers',
      position: 'Trainee SDE'

    },
    {
      employeeId: 1002,
      fName: 'Ronda',
      lName: 'Norona',
      gender: 'Female',
      dateOfBirth: new Date('1999/05/19'),
      dateJoined: new Date('2021-08-09'),
      phone: 9988776655,
      email: 'johncena99@gmail.com',
      street: 'Los Angeles',
      city: 'West Newbury',
      state: 'Massacuhusetts',
      zipCode: 12234,
      dName: 'Software Developers',
      position: 'Trainee SDE'

    },
    {
      employeeId: 1001,
      fName: 'Omkar',
      lName: 'Jagtap',
      gender: 'male',
      dateOfBirth: new Date('12/14/1998'),
      dateJoined: new Date('01/06/2021'),
      phone: 7387633292,
      email: 'jagtapomkar555@gmail.com',
      street: 'Alandi road',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: 411039,
      dName: 'Software Developers',
      position: 'Trainee SDE'

    },
    {
      employeeId: 1001,
      fName: 'Omkar',
      lName: 'Jagtap',
      gender: 'male',
      dateOfBirth: new Date('14/12/1998'),
      dateJoined: new Date('01/06/2021'),
      phone: 7387633292,
      email: 'jagtapomkar555@gmail.com',
      street: 'Alandi road',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: 411039,
      dName: 'Software Developers',
      position: 'Trainee SDE'

    },
    {
      employeeId: 1001,
      fName: 'Omkar',
      lName: 'Jagtap',
      gender: 'male',
      dateOfBirth: new Date('14/12/1998'),
      dateJoined: new Date('01/06/2021'),
      phone: 7387633292,
      email: 'jagtapomkar555@gmail.com',
      street: 'Alandi road',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: 411039,
      dName: 'Software Developers',
      position: 'Trainee SDE'

    },
  ];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  url = 'https://localhost:44345/api/Employees';

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url)
  }

  // getEmployees(): Employee[] {
  //   return this.listEmployees;
  // }

  getEmployee(id: any) {
    return this.listEmployees.find(e => e.employeeId == id)
  }

  addEmployee(employee: Employee){
    // this.listEmployees.push(employee);
    console.log(employee);
    console.log(JSON.stringify(employee) );
    var emp = JSON.stringify(employee);
    return this.httpClient.post<Employee>(this.url, emp)
    .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );

  }

  // addEmployee(employee: Employee) {
  //   // this.listEmployees.push(employee);
  //   console.log(employee);
  //   this.httpClient.post(this.url, {
  //       "employeeId": 1041,
  //       "fName": "John",
  //       "lName": "Cena",
  //       "gender": "Male",
  //       "dateOfBirth": "12/05/1999",
  //       "dateJoined": "09/08/2021",
  //       "email": "johncena985@gmail.com",
  //       "street": "Los Angeles",
  //       "phone": "9988776655",
  //       "city": "West Newbury",
  //       "state": "Massacuhusetts",
  //       "zipCode": "12234",
  //       "position": "Trainee SDE",
  //       "dName": "Software Developers",
  //       "code": "TD01"
  //   }).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )


  // }

  updateEmployee(employee: Employee) {
    var updateEmployee: any = this.listEmployees.find(emp => emp.employeeId == employee.employeeId);
    // updateEmployee.id = employee.id;
    updateEmployee.firstname = employee.fName;
    updateEmployee.lastname = employee.fName;
    updateEmployee.gender = employee.gender;
    updateEmployee.dob = employee.dateOfBirth;
    updateEmployee.doj = employee.dateJoined;
    updateEmployee.email = employee.email;
    updateEmployee.contactNo = employee.phone;
    updateEmployee.street = employee.street;
    updateEmployee.city = employee.city;
    updateEmployee.state = employee.state;
    updateEmployee.zip = employee.zipCode;
    updateEmployee.position = employee.position;
    updateEmployee.Department = employee.dName;
  }

  deleteEmployee(id: number) {
    // const i = this.listEmployees.findIndex(e => e.employeeId == id);
    // if (i != -1) {
    //   this.listEmployees.splice(i, 1);
    // }

    const deleteEmp = 'https://localhost:44345/api/Employees/' + id;
    return this.httpClient.delete(deleteEmp, { responseType: 'text' });
  }
}

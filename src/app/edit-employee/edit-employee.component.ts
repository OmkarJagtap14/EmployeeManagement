import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee : any = {
    EmployeeId: 0,
    FName: "",
    LName: "",
    Gender: "",
    DateOfBirth: new Date("Dec 2 1998"),
    DateJoined: new Date("Dec 2 1998"),
    Email: "",
    Phone: 0,
    Street: "",
    City: "",
    State: "",
    ZipCode: 0,
    Position: "",
    DName: ""
  }

  Title: string = "Update Details ";

  constructor(
    private _employeeservice: EmployeeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}


  ngOnInit(): void {

    this._route.paramMap.subscribe(parametermMap => {
      const id = parametermMap.get('id');
      this.getEmployee(id);
    });
  }

  getEmployee(id : any){
    this.employee = this._employeeservice.getEmployee(id);
    console.log(this.employee);
  }

  // Method to update and employee
  updateEmployee() {
    this._employeeservice.updateEmployee(this.employee);
    //console.error(this.employee.firstName);
    this._router.navigate(['/dashboard/employees']);
  }

}

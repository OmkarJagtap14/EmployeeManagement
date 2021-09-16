import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [];
  nameOfEmployeeToDelete = '';
  employee! : Employee;

  constructor(
    private _employeeService: EmployeeService,
    private modalService: NgbModal,
    private _router : Router
  ) { }

  ngOnInit(): void {
    //this.employees =  this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(res => {
      this.employees = res;
      // console.log(this.employees[0]);
    });
  }

  // delete modal call

  opendeleteModal(deletModal: any, id: number, name: string) {
    this.nameOfEmployeeToDelete = name;
    const modalRef = this.modalService.open(deletModal).result.then(() => {
      this.deleteEmployee(id);
    }, (reason) => {
      console.log(reason);
    });
  }


  deleteEmployee(id: number) {
    // this._employeeService.deleteEmployee(id);
    console.log(id);
    this._employeeService.deleteEmployee(id).subscribe(data => {console.log(data)});
    location.reload();
  }

  //view Modal call

  openViewModal(viewModal: any, employee : Employee) {
    this.employee = employee;
    const modalRef = this.modalService.open(viewModal, {size : 'lg'}).result.then(() => {
      console.log(employee);
    }, (reason) => {
      console.log(reason);
    });
  }

  //edit employee method

  editEmployee(employee : Employee){
    this.employee = employee;
    this._router.navigate(['/dashboard/editEmployee', this.employee.employeeId])
  }

}

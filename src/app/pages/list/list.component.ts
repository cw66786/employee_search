import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/employee.service';
import { Employee } from 'src/app/interfaces/reqres';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  employeeList!: Employee[];
  userInput: string = '';
  

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(
      (res) =>
        (this.employeeList = res.sort((a, b) => {
          if (a.last_name < b.last_name) return -1;
          return 1;
        }))
    );

    this.employeeService.employee$.subscribe(res => this.userInput = res);
  }
}

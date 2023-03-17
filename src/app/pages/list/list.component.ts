import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employeeList: string[] = [];

  constructor(private employeeService: EmployeeService) {
    
  }
  
  ngOnInit(): void {
    
  
    
  }

}

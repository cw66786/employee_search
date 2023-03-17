import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Root } from '../interfaces/reqres';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string = 'https://reqres.in/api/users'
  private page2: string = '?page=2'

  employeeList: string[]= [];
  employeeListBehave = new BehaviorSubject(this.employeeList);
  employeeList$ = this.employeeListBehave.asObservable();


  constructor(private http: HttpClient) { }


  getEmployeeList(){
    return this.http.get<Root>(this.baseUrl + this.page2).pipe(
      map((res)=>{
        
        return res.data;
      
      })
    )

  }


getSingleEmployee(userInput: string){
  return 'works';
}


}

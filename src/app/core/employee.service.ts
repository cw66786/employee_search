import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string = 'https://regres.in/api/'
  private page2: string = '?page=2'

  employeeList: string[]= [];
  employeeListBehave = new BehaviorSubject(this.employeeList);
  employeeList$ = this.employeeListBehave.asObservable();


  constructor(private http: HttpClient) { }


  getEmployeeList(){
    return this.http.get(this.baseUrl + this.page2).pipe(
      map((res)=>{
        console.log(res)
        return res;
      
      })
    )

  }


getSingleEmployee(userInput: string){
  return 'works';
}


}

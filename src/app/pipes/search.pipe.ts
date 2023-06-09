import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/reqres';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employee: Employee[], userInput: string): Employee[] {
    
    if (userInput) {
      return employee.filter( (employee: { first_name: string; last_name: string; }) => {
        return employee.first_name.toLowerCase().includes(userInput.toLowerCase()) ||
        employee.last_name.toLowerCase().includes(userInput.toLowerCase())
        })
    }
    else  
      return employee;
    
  
  }

}

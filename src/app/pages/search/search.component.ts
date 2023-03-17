import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, Subscription, switchMap } from 'rxjs';
import { EmployeeService } from 'src/app/core/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchBox', {static: true}) input!: ElementRef;

  private eventSubscription!: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.eventSubscription = fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
     debounceTime(500),
     filter((_)=>{
       return this.input.nativeElement.value.trim() !== '';
     }),
     switchMap((_)=>{
       return this.employeeService.getSingleEmployee(
         this.input.nativeElement.value
       );
     })
    )
    .subscribe();
  }


  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }


}

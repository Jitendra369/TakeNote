import { Component, OnInit } from '@angular/core';
import { LogService } from '../../service/log.service';
import { Log } from '../../model/log';
import { DatePipe, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogCategory } from '../../model/logCateg';

@Component({
  selector: 'app-devlogging',
  imports: [NgFor, DatePipe, ReactiveFormsModule],
  templateUrl: './devlogging.component.html',
  styleUrl: './devlogging.component.css'
})
export class DevloggingComponent implements OnInit {


  logs: Log[] = [];
  logCateg: LogCategory[] = [];
  myForm!: FormGroup;
  selectedCategory: any;

  ngOnInit(): void {
    this.loadLogDetails();
    this.loadAllLogCategory();
  }

  constructor(private _logService: LogService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      content: ['', Validators.required]
      // logCategory : [null]
    });
  }

  loadAllLogCategory() {
    this._logService.getAllLogCategory().subscribe({
      next: (data) => {
        this.logCateg = data;
        console.log('all categ data ' + this.logCateg);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // load all logs details 
  loadLogDetails() {
    // debugger
    this._logService.getAllLogs().subscribe({
      next: (data) => {
        console.log(data);
        this.logs = data;
      },
      error: (error) => {
        console.log('error', error);
      }
    })
  }

  getSelectdLogCategory(selectLogCategory: any) {
    // debugger
    // return this.selectedCategory = selectLogCategory;
    // let val = this.myForm.get('logCateg')?.setValue(cat);
    this.myForm.patchValue({
      category: selectLogCategory
    })
  }

  onSubmit() {

    // debugger
    console.log(this.selectedCategory);
    

    if (this.myForm.valid) {

      // debugger
      console.log(this.logCateg);

      console.log(this.myForm.value);
      this._logService.addLog(this.myForm.value).subscribe({
        next: (savedlogDetails) => {
          console.log(savedlogDetails);

          // this.loadLogDetails();
          this.logs.unshift(savedlogDetails);
        }, error: (error) => {
          console.log(error);
        }
      })
    }

    this.myForm.reset();

  }
}

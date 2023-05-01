import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from 'src/app/Interfaces/items.interface';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  public checkButton = true;
  constructor(private apiService: ApiServicesService, private router: Router) {}
  private date = new Date().toISOString();
  public createFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('not completed'),
    priority: new FormControl('minor'),
    active: new FormControl(true),
    date: new FormControl(this.date),
    lastUpdated: new FormControl(this.date),
  });
  public submitHandler = (): void => {
    const payload: any = { ...this.createFormGroup.value };
    console.log(payload);
    this.apiService.setDetails(payload).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  };
  public onTitleChangeHandler(): void {
    this.checkButton = this.createFormGroup.invalid;
  }
  public onDescChangeHandler(): void {
    this.checkButton = this.createFormGroup.invalid;
  }
}

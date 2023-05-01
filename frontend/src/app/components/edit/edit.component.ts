import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  @Input('data') data!: any;
  public customData: any = {};
  constructor() {}
  ngOnChanges(): void {
    this.customData = { ...this.data };
    console.log('customdata', this.customData);
  }
  public checkButton = false;
  date = new Date().toISOString();
  public createFormGroup = new FormGroup({
    title: new FormControl(this.customData?.title, Validators.required),
    description: new FormControl(
      this.customData?.description,
      Validators.required
    ),
    status: new FormControl(this.customData?.status),
    priority: new FormControl(this.customData?.priority),
    active: new FormControl(this.customData?.active),
    date: new FormControl(this.date),
    lastUpdated: new FormControl(this.date),
  });
  public submitHandler(): void {}
  public onTitleChangeHandler() {}
  public onDescChangeHandler() {}
}

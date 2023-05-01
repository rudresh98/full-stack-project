import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  private itemId = '';
  public itemData: any = {
    title: '',
    description: '',
    active: '',
    status: '',
    date: null,
    priority: '',
    lastUpdated: '',
  };
  date = new Date().toISOString();
  public checkButton = false;

  public createFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl(''),
    priority: new FormControl(''),
    active: new FormControl(true),
    date: new FormControl(this.date),
    lastUpdated: new FormControl(this.date),
  });
  public isEdit = true;
  constructor(
    private apiService: ApiServicesService,
    private activated: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activated.paramMap.subscribe((res: any) => {
      this.itemId = res.params.id;
      this.getItemDetails(this.itemId);
    });
  }

  private getItemDetails(id: string) {
    this.apiService.detailsItem(id).subscribe(
      (res) => {
        this.itemData = { ...res };
        this.createFormGroup.setValue({
          title: this.itemData.title,
          description: this.itemData.description,
          status: this.itemData.status,
          priority: this.itemData.priority,
          active: this.itemData.active,
          date: this.itemData.date,
          lastUpdated: null,
        });
      },
      (err: HttpErrorResponse) => {
        console.error(err.message);
      }
    );
  }

  public submitHandler(): void {
    const payload = { id: this.itemId, ...this.createFormGroup.value };
    console.log(payload);
    this.apiService.updateItem(payload).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }
  public onTitleChangeHandler() {
    this.checkButton = this.createFormGroup.invalid;
  }
  public onDescChangeHandler() {
    this.checkButton = this.createFormGroup.invalid;
  }
}

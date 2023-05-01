import { Component } from '@angular/core';
import { Items } from 'src/app/Interfaces/items.interface';
import { ApiServicesService } from 'src/app/services/api-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public itemData: Array<any> = [];
  constructor(private apiService: ApiServicesService) {}
  ngOnInit(): void {
    this.getDetailsData();
  }
  private getDetailsData(): void {
    this.apiService.getDetails().subscribe((res: any) => {
      this.itemData = [...res];
      this.filteredData = [...this.itemData];
    });
  }
  filteredData: any = [];
  public onStatusFilterHandler(event: any) {
    console.log(event.target.value);
    if (event.target.value === 'all') {
      this.getDetailsData();
    }
    if (event.target.value === 'completed') {
      this.filteredData = this.itemData.filter(
        (ele) => ele.status === 'completed'
      );
    }
    if (event.target.value === 'not completed') {
      this.filteredData = this.itemData.filter(
        (ele) => ele.status === 'not completed'
      );
    }
  }
}

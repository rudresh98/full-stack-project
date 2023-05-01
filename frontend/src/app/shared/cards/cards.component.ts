import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input('priority') priority!: string;
  @Input('title') title!: string;
  @Input('description') description!: string;
  @Input('id') id!: string;
  @Input('lastUpdated') lastUpdated!: string;
  @Input('status') status!: string;
  public statusFilter = 'all';
  constructor(private apiService: ApiServicesService, private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public onDeleteHandler(id: string) {
    console.log(id);
    this.apiService.deleteItem(id).subscribe(
      (res) => {
        console.log(res);
        this.reloadHandler();
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }
  public reloadHandler() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}

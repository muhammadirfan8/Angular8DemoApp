import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from './emplyees';
import { images } from './images';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild(DataBindingDirective, {static:false}) dataBinding: DataBindingDirective;
    public gridData: any[] = employees;
    public gridView: any[];

    public mySelection: string[] = [];

    public ngOnInit(): void {
        this.gridView = this.gridData;
    }

    public onFilter(inputValue: string): void {
        this.gridView = process(this.gridData, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'full_name',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'job_title',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'budget',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'phone',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'address',
                        operator: 'contains',
                        value: inputValue
                    }
                ],
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    private photoURL(dataItem: any): string {
        const code: string = dataItem.img_id + dataItem.gender;
        const image: any = images;

        return image[code];
    }

    private flagURL(dataItem: any): string {
        const code: string = dataItem.country;
        const image: any = images;

        return image[code];
    }

}

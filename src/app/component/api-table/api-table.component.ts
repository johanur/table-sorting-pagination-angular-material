import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiTableService } from '../../_service/api-table.service';
import { IApiTable } from '../../_model/i-api-table';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css'],
  providers: [ApiTableService]
})


export class ApiTableComponent implements OnInit {

  dataSource; 
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  selectedRowIndex: number;

  displayedColumns = ['albumId', 'id', 'title', 'url', 'thumbnailUrl'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _apiResponse: ApiTableService) { }

  ngOnInit() {

    this._apiResponse.fetchData().subscribe
      ((response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })

  }

  onClick(row: any) {
    this.selectedRowIndex = row.id;
    this.id = row.id;
    this.albumId = row.albumId;
    this.title = row.title;
    this.url = row.url;
    this.thumbnailUrl = row.thumbnailUrl;
  }


}

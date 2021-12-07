import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table-uikit',
  templateUrl: './table-uikit.component.html',
  styleUrls: ['./table-uikit.component.css']
})
export class TableUikitComponent implements OnInit {

  @Input() isLoading: boolean = false;
  @Input() tableData: Array<any> = [];
  @Input() tableCols: Array<any> = [];
  @Input() templateOutlet: TemplateRef<any> | null = null;
  @Input() scroll: any;

  constructor() { }

  ngOnInit(): void {
  }

}

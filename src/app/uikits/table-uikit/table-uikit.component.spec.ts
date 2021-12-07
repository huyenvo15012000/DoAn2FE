import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUikitComponent } from './table-uikit.component';

describe('TableUikitComponent', () => {
  let component: TableUikitComponent;
  let fixture: ComponentFixture<TableUikitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUikitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUikitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

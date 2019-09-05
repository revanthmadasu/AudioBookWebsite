import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTheAppComponent } from './download-the-app.component';

describe('DownloadTheAppComponent', () => {
  let component: DownloadTheAppComponent;
  let fixture: ComponentFixture<DownloadTheAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadTheAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadTheAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

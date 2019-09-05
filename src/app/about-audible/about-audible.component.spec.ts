import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAudibleComponent } from './about-audible.component';

describe('AboutAudibleComponent', () => {
  let component: AboutAudibleComponent;
  let fixture: ComponentFixture<AboutAudibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAudibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAudibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

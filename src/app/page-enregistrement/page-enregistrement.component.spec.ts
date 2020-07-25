import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnregistrementComponent } from './page-enregistrement.component';

describe('PageEnregistrementComponent', () => {
  let component: PageEnregistrementComponent;
  let fixture: ComponentFixture<PageEnregistrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEnregistrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

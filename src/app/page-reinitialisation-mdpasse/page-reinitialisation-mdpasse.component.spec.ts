import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReinitialisationMDPasseComponent } from './page-reinitialisation-mdpasse.component';

describe('PageReinitialisationMDPasseComponent', () => {
  let component: PageReinitialisationMDPasseComponent;
  let fixture: ComponentFixture<PageReinitialisationMDPasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReinitialisationMDPasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReinitialisationMDPasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

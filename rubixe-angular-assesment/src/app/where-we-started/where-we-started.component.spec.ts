import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWeStartedComponent } from './where-we-started.component';

describe('WhereWeStartedComponent', () => {
  let component: WhereWeStartedComponent;
  let fixture: ComponentFixture<WhereWeStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereWeStartedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereWeStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

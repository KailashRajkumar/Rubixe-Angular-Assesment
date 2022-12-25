import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechForTeensComponent } from './tech-for-teens.component';

describe('TechForTeensComponent', () => {
  let component: TechForTeensComponent;
  let fixture: ComponentFixture<TechForTeensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechForTeensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechForTeensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

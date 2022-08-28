import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFourComponent } from './test-four.component';

describe('TestFourComponent', () => {
  let component: TestFourComponent;
  let fixture: ComponentFixture<TestFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCyberComponent } from './add-cyber.component';

describe('AddCyberComponent', () => {
  let component: AddCyberComponent;
  let fixture: ComponentFixture<AddCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCyberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

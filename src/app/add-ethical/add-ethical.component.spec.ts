import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEthicalComponent } from './add-ethical.component';

describe('AddEthicalComponent', () => {
  let component: AddEthicalComponent;
  let fixture: ComponentFixture<AddEthicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEthicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEthicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

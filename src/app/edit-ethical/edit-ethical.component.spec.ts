import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEthicalComponent } from './edit-ethical.component';

describe('EditEthicalComponent', () => {
  let component: EditEthicalComponent;
  let fixture: ComponentFixture<EditEthicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEthicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEthicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

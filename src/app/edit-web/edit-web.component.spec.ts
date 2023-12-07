import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWebComponent } from './edit-web.component';

describe('EditWebComponent', () => {
  let component: EditWebComponent;
  let fixture: ComponentFixture<EditWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

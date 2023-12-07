import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalComponent } from './ethical.component';

describe('EthicalComponent', () => {
  let component: EthicalComponent;
  let fixture: ComponentFixture<EthicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

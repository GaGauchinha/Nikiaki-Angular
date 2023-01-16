import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarUsuarioFormularioComponent } from './addUsuario-form.component';

describe('AdicionarUsuarioFormularioComponent', () => {
  let component: AdicionarUsuarioFormularioComponent;
  let fixture: ComponentFixture<AdicionarUsuarioFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarUsuarioFormularioComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarUsuarioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VUserRegister } from "./v-auth-register";

describe("VUserRegister", () => {
  let component: VUserRegister;
  let fixture: ComponentFixture<VUserRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VUserRegister],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VUserRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

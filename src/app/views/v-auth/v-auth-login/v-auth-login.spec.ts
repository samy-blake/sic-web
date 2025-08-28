import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VUserLogin } from "./v-auth-login";

describe("VUserLogin", () => {
  let component: VUserLogin;
  let fixture: ComponentFixture<VUserLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VUserLogin],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VUserLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

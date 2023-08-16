import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccountDataSpaceTitleComponent } from "./account-data-space-title.component";

describe("AccountDataSpaceTitleComponent", () => {
  let component: AccountDataSpaceTitleComponent;
  let fixture: ComponentFixture<AccountDataSpaceTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDataSpaceTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDataSpaceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccountDataSpaceDialogComponent } from "./account-data-space-dialog.component";

describe("AccountDataSpaceDialogComponent", () => {
  let component: AccountDataSpaceDialogComponent;
  let fixture: ComponentFixture<AccountDataSpaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDataSpaceDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDataSpaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

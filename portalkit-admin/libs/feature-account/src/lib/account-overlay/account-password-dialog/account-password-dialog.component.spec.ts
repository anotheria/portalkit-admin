import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccountPasswordDialogComponent } from "./account-password-dialog.component";

describe("AccountPasswordDialogComponent", () => {
  let component: AccountPasswordDialogComponent;
  let fixture: ComponentFixture<AccountPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountPasswordDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

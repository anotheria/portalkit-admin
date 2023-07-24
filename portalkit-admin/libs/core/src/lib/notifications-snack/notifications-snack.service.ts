import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { TranslateService } from "@ngx-translate/core";

const snackConfig: MatSnackBarConfig = {
  verticalPosition: "top",
  horizontalPosition: "right",
  duration: 5000,
};

@Injectable({
  providedIn: "root",
})
export class NotificationsSnackService {
  constructor(private snack: MatSnackBar, private readonly translateService: TranslateService) {}

  openSnackBar(message: string) {
    this.snack.open(message, "", {
      ...snackConfig,
    });
  }

  openActionSnack(message: string, formation?: boolean) {
    const formattedMessage = formation
      ? this.translateService.instant(message).split("\\n").join(" \n")
      : this.translateService.instant(message);

    this.snack.open(formattedMessage, this.translateService.instant("toast.agency.firstedit.close"), {
      ...snackConfig,
      duration: 50000,
      panelClass: "pat-snack-action",
    });
  }

  openSuccessSnack(message: string, item?: string) {
    this.snack.open(this.translateService.instant(message, { name: item }), "", {
      ...snackConfig,
      panelClass: "pat-snack-success",
    });
  }

  openErrorSnack(message: string, item?: string) {
    this.snack.open(this.translateService.instant(message, { name: item }), "", {
      ...snackConfig,
      panelClass: "pat-snack-error",
      duration: 10000,
    });
  }

  openWarnSnack(message: string, item: string) {
    this.snack.open(this.translateService.instant(message, { name: item }), "", {
      ...snackConfig,
      panelClass: "pat-snack-warn",
    });
  }
}

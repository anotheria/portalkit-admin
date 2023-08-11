import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { ModalOptions } from "ng-zorro-antd/modal/modal-types";

@Component({ template: "" })
export class OpenDialogComponent implements OnInit {
  constructor(private nzModalService: NzModalService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => this.openDialog(data));
  }

  openDialog(data: Data): void {
    const options: ModalOptions = { nzContent: data["component"], nzData: data };
    if (data["width"]) {
      options.nzWidth = data["width"];
    }
    const ref: NzModalRef = this.nzModalService.create(options);
    ref.afterClose.subscribe(() => {
      this.cleanOverlaySegments();
    });
  }
  cleanOverlaySegments(): void {
    if (this.hasOverlayOutletAncestor(this.route)) {
      this.router.navigate([{ outlets: { overlay: null } }]);
    } else {
      this.router.navigate(["../"], { relativeTo: this.route });
    }
  }

  hasOverlayOutletAncestor(route: ActivatedRoute): boolean {
    let current = route;
    while (current) {
      if (current.outlet === "overlay") {
        return true;
      }
      current = current.parent as ActivatedRoute;
    }
    return false;
  }
}

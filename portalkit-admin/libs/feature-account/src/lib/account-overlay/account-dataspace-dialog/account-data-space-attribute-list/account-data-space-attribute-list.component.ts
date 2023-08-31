import {Component, Input, OnInit} from "@angular/core";
import {AttributeType, DataSpaceAttribute} from "../../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-data-space-attribute-list",
  templateUrl: "./account-data-space-attribute-list.component.html",
  styleUrls: ["./account-data-space-attribute-list.component.scss"],
})
export class AccountDataSpaceAttributeListComponent implements OnInit {
  @Input() attributes: DataSpaceAttribute[] = [];

  i = 0;
  editCache: { [key: number]: { edit: boolean; data: DataSpaceAttribute } } = {};
  attributeTypeOptions: Array<{label: string, value: string}> = [];

  ngOnInit() {
    this.updateEditCache();
    this.attributeTypeOptions = Object.keys(AttributeType).map((key) => ({label: key, value: key}));
    if(this.attributes.length == 1 && !this.attributes[0].valueAsString) { // one attribute without value force attr edit
      this.startEdit(this.attributes[0].id)
    }
  }

  addRow(): void {
    const newId = this.i;
    this.attributes = [
      ...this.attributes,
      {
        id: newId,
        name: ``,
        valueAsString: ``,
        value: '',
        type: null
      }
    ];
    this.updateEditCache();
    this.startEdit(newId);
    this.i++;
  }

  deleteRow(id: number): void {
    this.attributes = this.attributes.filter(d => d.id !== id);
    this.updateEditCache();
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.attributes.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.attributes[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.attributes.findIndex(item => item.id === id);
    Object.assign(this.attributes[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.attributes.forEach(item => {
      this.editCache[item.id as number] = {
        edit: false,
        data: { ...item }
      };
    });
    this.i = this.attributes[this.attributes.length -1].id + 1;
  }
}

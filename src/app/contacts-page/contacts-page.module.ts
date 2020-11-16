import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactsPageRoutingModule } from "./contacts-page-routing.module";
import { ContactsPageComponent } from "./contacts-page.component";
import { IonicModule } from "@ionic/angular";
import { ContactEntryComponent } from "./contact-entry/contact-entry.component";
import { FormsModule } from "@angular/forms";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [ContactsPageComponent, ContactEntryComponent],
  imports: [
    CommonModule,
    IonicModule,
    ContactsPageRoutingModule,
    FormsModule,
    IonicStorageModule,
  ],
})
export class ContactsPageModule {}

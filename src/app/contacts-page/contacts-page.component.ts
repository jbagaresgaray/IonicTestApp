import { Component, OnInit } from "@angular/core";
import { MenuController, ModalController } from "@ionic/angular";
import { CameraResultType, CameraSource, Plugins } from "@capacitor/core";
import { ContactEntryComponent } from "./contact-entry/contact-entry.component";
import { StorageService } from '../services/storage.service';

const { Camera } = Plugins;

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"],
})
export class ContactsPageComponent implements OnInit {
  imageURL: string;
  users: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  openFirst() {
    this.menuCtrl.open("first");
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    this.imageURL = "data:image/png;base64," + image.base64String;
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ContactEntryComponent,
    });
    modal.present();
  }

  private async getUsers(event?: any) {
    const users = await this.storageService.getItem("users");
    if (users) {
      this.users = [...users];
      console.log("this.users: ", this.users);
    }

    setTimeout(() => {
      console.log('Async operation has ended');
      if(event){
        event.target.complete();
      }
    }, 2000);
  }

  doRefresh(event: any) {
    this.getUsers(event);
  }
}

import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-contact-entry",
  templateUrl: "./contact-entry.component.html",
  styleUrls: ["./contact-entry.component.scss"],
})
export class ContactEntryComponent implements OnInit {
  user: { lastname: string; firstname: string } = {
    lastname: "",
    firstname: "",
  };
  users: any[] = [];

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async saveData() {
    const loading = await this.loadingCtrl.create({
      message: "Saving...",
    });
    loading.present();
    console.log("user: ", this.user);

    this.users.push(this.user);

    this.storageService.setItem("users", this.users);

    setTimeout(() => {
      loading.dismiss();
      this.dismiss();
    }, 2000);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  private async getUsers() {
    const users = await this.storageService.getItem("users");
    if (users) {
      this.users = [...users];
      console.log("this.users: ", this.users);
    }
  }
}

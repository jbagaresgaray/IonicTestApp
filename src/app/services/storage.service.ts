import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  setItem(key: string, value: any) {
    this.storage.set(key, JSON.stringify(value));
  }

  async getItem(key: string) {
    const values = await this.storage.get(key);
    if(values){
      return JSON.parse(values);
    }
  }
}

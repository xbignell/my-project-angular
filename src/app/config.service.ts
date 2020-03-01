import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  configParameters = "assets/config.json";

  constructor(private client: HttpClient) {}

  getConfig() {
    return this.client.get(this.configParameters);
  }

}

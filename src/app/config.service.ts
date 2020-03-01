import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from './globals';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private client: HttpClient, private globals: Globals) {}

  getConfig() {
    let configParameters = this.globals.assetsUriConfig;
    return this.client.get(configParameters);
  }

}

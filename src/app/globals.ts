// This service which have global variables will set a service in a node api soon
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  standardTitle :string = "XBignell - ";
  assetsUriConfig :string = "assets/config.json";
}

// This service which have global variables will set a service in a node api soon
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  standardTitle :string = "XBignell - ";
  contentTextAreaContact :string = "What you need to tell me?";
  assetsUriConfig :string = "assets/config.json";
}

import { Component, OnInit, Input } from '@angular/core';
import { CarteB } from 'src/app/Models/Carteb.Model';
import { Client } from 'src/app/Models/Compte.Model';

@Component({
  selector: 'app-carte-b',
  templateUrl: './carte-b.component.html',
  styleUrls: ['./carte-b.component.css']
})
export class CarteBComponent implements OnInit {

  @Input() carte : CarteB;
  @Input() owner : Client;

  constructor() { }

  ngOnInit() {
   
  }

}

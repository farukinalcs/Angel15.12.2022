import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talepedilenler',
  templateUrl: './talepedilenler.component.html',
  styleUrls: ['./talepedilenler.component.scss']
})
export class TalepedilenlerComponent implements OnInit {

  onayBeklenenForm : any = 4;

  constructor() { }

  ngOnInit(): void {
  }

}

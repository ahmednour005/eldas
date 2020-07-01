import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


}

import { Component, OnInit } from '@angular/core';
declare var $;
import AOS from 'aos';
@Component({
  selector: 'app-feature-video',
  templateUrl: './feature-video.component.html',
  styleUrls: ['./feature-video.component.css']
})
export class FeatureVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init();
    $('#modal1').on('hidden.bs.modal', function (e) {
     $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
})

  }
}

import { Component, OnInit } from '@angular/core';
declare var $ ;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      var selectedClass = "";
      $(".portfolio li").click(function(){
      selectedClass = $(this).attr("data-rel");
      $(".portfolio .projects").fadeTo(50, 0.1);
      $(".portfolio .projects .pics").not("."+selectedClass).fadeOut().removeClass('animation');
      // $(".portfolio .projects .pics ").not("."+selectedClass).parent().attr("style", "display: none !important");
      setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('animation');
      $(".portfolio .projects").fadeTo(300, 1);
      }, 300);
      });
      });
 
      $('.portfolio li').click(function(){ 
        $('.portfolio li').removeClass( "filter active" )
        $(this).addClass('active');
             });

}
}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // ======================== Main function of Jquery ========================
    $(document).ready(() => {
      // Handle user resize height of screen
      responsiveHeightImage();
      $(window).resize(() => {
        responsiveHeightImage();
      });

      // Handle click event button 'Go now'
      $('#image-landing-page .btn-customer-2').click(() => {
        const positionListTutorials = $('.list-tutorial-title').offset().top;
        $([document.documentElement, document.body]).animate({ scrollTop: positionListTutorials }, 'slow');
        return false;
      });
    });

    // ============================ Common function ==============================
    function responsiveHeightImage() {
      const heightScreen = $(window).height();
      $('#image-landing-page').css({ height: heightScreen });
    }
  }

}

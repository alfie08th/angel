import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private elem: ElementRef, private route: Router) { }
  enterBlog: boolean;

  ngOnInit() {
    this.enterBlog = true;
    console.log('link:', window.location.href);
  }

  ngAfterViewInit(){
  }
  anchorHome(){
    this.route.navigateByUrl('home').then(r=>{})
    this.enterBlog = true;
  }
  anchorBlog(){
    this.route.navigateByUrl('blog').then(r=>{})
    this.enterBlog = false;
  }

  anchorLogin(){
    this.route.navigateByUrl('login').then(r=>{})
    this.enterBlog = false;
  }

}

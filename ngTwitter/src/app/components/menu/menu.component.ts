import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  twitterIcon = faTwitter;

  menuMock = [
    {
      name: "Główna",
      icon: faHome,
      route: "/home"
    },
    {
      name: "Przeglądaj",
      icon: faHashtag,
      route: "/explore"
    },
    {
      name: "Powiadomienia",
      icon: faBell,
      route: "/notification"
    },
    {
      name: "Wiadomości",
      icon: faEnvelope,
      route: "/messages"
    },
    {
      name: "Zakładki",
      icon: faBookmark,
      route: "/bookmarks"
    },
    {
      name: "Listy",
      icon: faFileAlt,
      route: "/user/lists"
    },
    {
      name: "Profil",
      icon: faUser,
      route: "/user"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

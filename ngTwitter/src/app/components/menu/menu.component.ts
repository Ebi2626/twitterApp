import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuMock = [
    {
      name: "Główna",
      icon: "home",
      route: "/home"
    },
    {
      name: "Przeglądaj",
      icon: "#",
      route: "/explore"
    },
    {
      name: "Powiadomienia",
      icon: "bell",
      route: "/notification"
    },
    {
      name: "Wiadomości",
      icon: "envelope",
      route: "/messages"
    },
    {
      name: "Zakładki",
      icon: "bookmark",
      route: "/bookmarks"
    },
    {
      name: "Listy",
      icon: "content",
      route: "/user/lists"
    },
    {
      name: "Profil",
      icon: "user",
      route: "/user"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

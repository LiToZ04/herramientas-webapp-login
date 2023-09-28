import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})

export class HomeScreenComponent
{
  constructor
  (
    private router:Router,
  )
  {}

  ngOnInit():void{}

  
}

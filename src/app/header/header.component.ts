import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>
  <nav>
      <a  routerLink='' class="nav__logo">Logo</a>
      <ul class="nav__list">
          <li><a routerLink="">Home</a></li>
          <li><a routerLink="contact" >Contact</a></li>
      </ul>
  </nav>
</header>`,
  styles: [`*{
    font-size: 62.5%;
}
header{
    nav{
        display: flex;
        justify-content: space-between;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
        padding: 0 5rem;
        @media(max-width: 950px){
            padding: 0 4rem;
        }
        @media(max-width: 550px){
            padding: 0 2rem;
        }
        @media(max-width: 350px){
            padding: 0 1rem;
        }
        .nav__logo{
            font-size: 2.5rem;
            text-decoration: none;
            font-weight: bolder;
            color: #009688;
            margin: 1rem;
            &:hover{
                color: #56d8e4 ;
            }
            @media(max-width: 950px){
                font-size: 2rem
            }
            
        }
        .nav__list{
            padding: 0;
            li{
                a{
                    text-decoration: none;
                    &:hover{
                        color: #9f01ea;
                    }
                    
                }
                display: inline-block;
                font-size: 1.8rem;
                color: black;
                margin: 1rem;
                @media(max-width: 950px){
                    font-size: 1.5rem;
                    margin: 0.8rem;
                }
            }
        }
    }
}`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

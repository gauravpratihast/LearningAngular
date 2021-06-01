import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="copyright_section">
  <p>Copyright <span>&copy;</span> 2021 Company Name | Designed by TemplateMo</p>
</div>`,
  styles: [`.copyright_section{
    text-align: center;
    font-size: 1.3rem;
    @media(max-width: 950px){
      font-size: 1rem;
    }
    @media(max-width: 550px){
      font-size: 0.7rem;
    }
    p{
        color: linear-gradient(#9f01ea, #56d8e4);
        span{
            color: red;
        }
    }
}`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gb-green-button',
  template: ` <input type="button" class="button" value="Boton de pago" /> `,
  styles: [
    `
      .button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
    `,
  ],
})
export class GreenButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

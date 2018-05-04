import { Component } from '@angular/core';
import { Teapot } from './models/teapot.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterTeapotList: Teapot[] =  [
    new Teapot('stump teapot with infuser',
        'This teapot combines beauty and functionality. A bold-colored body with an easy-to-use stainless steel lid will make this teapot a favorite in your home.',
        ['red', 'carrot', 'lime', 'blue', 'purple', 'black', 'white'],
        true,
        true,
        18,
        'https://cdn.shopify.com/s/files/1/0898/3392/products/41osluFjE7L_ffb727e5-e650-402d-b09d-fb438d7e7dbc_large.jpeg?v=1522694775'
        24.95,
        800838,
      ),
      new Teapot('stump teapot with infuser',
          'This teapot combines beauty and functionality. A bold-colored body with an easy-to-use stainless steel lid will make this teapot a favorite in your home.',
          ['red', 'carrot', 'lime', 'blue', 'purple', 'black', 'white'],
          true,
          true,
          18,
          'https://cdn.shopify.com/s/files/1/0898/3392/products/41osluFjE7L_ffb727e5-e650-402d-b09d-fb438d7e7dbc_large.jpeg?v=1522694775'
          24.95,
          800838,
        ),
        new Teapot('stump teapot with infuser',
            'This teapot combines beauty and functionality. A bold-colored body with an easy-to-use stainless steel lid will make this teapot a favorite in your home.',
            ['red', 'carrot', 'lime', 'blue', 'purple', 'black', 'white'],
            true,
            true,
            18,
            'https://cdn.shopify.com/s/files/1/0898/3392/products/41osluFjE7L_ffb727e5-e650-402d-b09d-fb438d7e7dbc_large.jpeg?v=1522694775'
            24.95,
            800838,
          )
  ]
}

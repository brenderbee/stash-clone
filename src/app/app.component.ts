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
        'https://cdn.shopify.com/s/files/1/0898/3392/products/41osluFjE7L_ffb727e5-e650-402d-b09d-fb438d7e7dbc_large.jpeg?v=1522694775',
        '24.95',
        800838,
        [1,2,3,4,5]
    ),
    new Teapot('josephine teapot',
        'Start a conversation with a good friend over a cup (or two) poured from this tea lover\'s teapot. The bamboo handle and calm cream color speaks to the influence of its Danish design origins, influenced by current Nordic trends centered around simplicity, soft shapes, and serenity.',
        [],
        false,
        true,
        32,
        'https://cdn.shopify.com/s/files/1/0898/3392/products/804040-Josephine-Teapot_large.jpg?v=1473358347',
        '19.95',
        804040,
        [1,2,3,4]
    ),
    new Teapot('stoneware 2-cup teapot',
        'This quaint English-style teapot is perfect for your daily tea. The classic shape of the teapot allows the tea leaves to be gently swirled around as boiling water is added, brewing a delicious pot of tea. Choose your favorite color for yourself or gift to a friend. Made of durable stoneware, holds 16 oz.',
        ['red', 'aqua', 'matte navy blue'],
        false,
        true,
        16,
        'https://cdn.shopify.com/s/files/1/0898/3392/products/B00THODF5M.01-A15D024ANKT1KE._SX1500_SCRMZZZZZZZ_V329881808_large.jpeg?v=1449440782',
        '10.95',
        804013,
        [1,2,3,4,5]
    ),
    new Teapot('owl tea set',
        'Whoo\'s got the cutest tea set? That would be you with this whimsical owl teapot and two matching cups. Quality is evident in the set\'s detailing which features a textured stoneware exterior that adds to the natural beauty of the pieces. Gift boxed. Teapot comes with a stainless steel infuser.',
        [],
        true,
        true,
        14,
        'https://cdn.shopify.com/s/files/1/0898/3392/products/41tQsZoTIfL_large.jpeg?v=1449438074',
        '45.00',
        800251,
        [1,2,3,4,5]
    )
  ]
}

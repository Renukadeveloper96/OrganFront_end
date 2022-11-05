import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    {
      id: 1,
      name: 'Learn Angular',
      description: 'Angular is powerful frame work',
      image:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/public-policy/061415_donor_THUMB_LARGE.jpg?w=1155&h=758',
        btn: 'Donor'
    },
    {
      id: 2,
      name: 'Learn Angular',
      description: 'Angular is powerful frame work',
      image:
        'https://thumbs.dreamstime.com/b/blood-groups-universal-donor-recipient-transfusion-chart-163090537.jpg',
        btn: 'Recipient'

    },
    {
      id: 3,
      name: 'Learn Typescript',
      description: 'Angular is powerful frame work',
      image:
        'https://www.thehealthy.com/wp-content/uploads/2019/01/9-Things-You-Didnt-Know-You-Could-Learn-from-a-Single-Blood-Test-5.jpg?fit=700,467',
        btn: 'Doctor'

      }
    // {
    //   id: 4,
    //   name: 'Learn Nodejs',
    //   description: 'Angular is powerful frame work',
    //   image:
    //     'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/public-policy/061415_donor_THUMB_LARGE.jpg?w=1155&h=758',
    // }
  ];
}

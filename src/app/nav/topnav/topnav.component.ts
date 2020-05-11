import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {


  j = 1;
  slideData = [
    {
      heading: 'Unique and affordable',
      subheading: 'We offer our clients a unique variety of affordable flooring products.',
      img: 'https://livedemo00.template-help.com/wt_prod-20688/images/slide-3-1920x850.jpg'
    },
    {
      heading: 'Highest quality flooring solutions',
      subheading: 'Parquetry has been providing top-notch flooring products and solutions since our establishment.',
      img: 'https://livedemo00.template-help.com/wt_prod-20688/images/slide-1-1920x850.jpg'
    },
    {
      heading: 'Professionals  You can rely on',
      subheading: 'Let our professional team design the floor of your dreams today.',
      img: 'https://livedemo00.template-help.com/wt_prod-20688/images/slide-2-1920x850.jpg'
    }];
  slide = this.slideData[0];
  interval = setInterval(() => {
    {
      this.slide = this.slideData[this.j++];
      if (this.j === 3) { this.j = 0; }
    }
  }, 5000);

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}

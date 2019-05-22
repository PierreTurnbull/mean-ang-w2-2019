import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../services/merchant/merchant.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  constructor(private merchantService: MerchantService) {
  }

  private getMerchantList = () => {
    this.merchantService.loadData()
  }

  ngOnInit() {
    this.getMerchantList()
  }

}

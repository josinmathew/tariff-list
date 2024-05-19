import { Component, OnInit } from '@angular/core';
import { TariffService } from '../tariff.service';
import { Tariff } from '../models/tariff.model';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {

  tariffs: Tariff[] = [];
  selectedSort: string = 'none';

  constructor(private tariffService: TariffService) { }

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe(data => this.tariffs = data);
  }

  onSortChange(sortBy: string) {
    this.selectedSort = sortBy;
    this.tariffService.sortTariffs(sortBy).subscribe(data => this.tariffs = data);
  }
}

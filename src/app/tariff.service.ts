import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tariff } from './models/tariff.model';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  private mockData: Tariff[] = [
    {
      name: 'Tarif Name 1',
      downloadSpeed: '12 Mbit/s',
      uploadSpeed: '6 Mbit/s',
      price: 123.45,
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
    },
    {
      name: 'Tarif Name 2',
      downloadSpeed: '10 Mbit/s',
      uploadSpeed: '5 Mbit/s',
      price: 100.45,
      benefits: ['Tariff1 Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
    },
  ];

  constructor() { }

  getTariffs(): Observable<Tariff[]> {
    return of(this.mockData);
  }

  sortTariffs(sortBy: string): Observable<Tariff[]> {
    let sortedTariffs = [...this.mockData];
    switch (sortBy) {
      case 'downloadSpeed':
        sortedTariffs.sort((a, b) => a.downloadSpeed.localeCompare(b.downloadSpeed));
        break;
      case 'uploadSpeed':
        sortedTariffs.sort((a, b) => a.uploadSpeed.localeCompare(b.uploadSpeed));
        break;
      case 'price':
        sortedTariffs.sort((a, b) => a.price - b.price);
        break;
    }
    return of(sortedTariffs);
  }
}

import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './Wydatek';

@Injectable()
export class WydatkiService {

  private wydatki: Wydatek[];
  private nextId: number;

  constructor() { 
    this.wydatki = [
        new Wydatek(1,'Tankowanie', 252.43, '', new Date(2018, 4, 30), 523, 47.5),
        new Wydatek(2,'Myjnia', 75, '', new Date(2018, 4, 2)),
        new Wydatek(3,'Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
        new Wydatek(4,'Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
        new Wydatek(5,'Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 100)
    ];
    this.nextId = 7;
  }

  getWydatki() {
    return this.wydatki;
  }

  getKategorie(): string[] {
    return KATEGORIE;
  }

  dodajWydatek(nowyWydatek: Wydatek): void {
    this.wydatki.push(nowyWydatek);
    nowyWydatek.id = this.nextId++;
  }

  usunWydatek(id: number): void {
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
  }

}
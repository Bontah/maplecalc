import {Component, OnInit} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
  hide: boolean;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  tilesEquipment: Tile[] = [
    {text: 'RING', cols: 1, rows: 1, border: '', hide: false},
    {text: '', cols: 1, rows: 1, border: '', hide: true},
    {text: 'HAT', cols: 1, rows: 1, border: '', hide: false},
    {text: '', cols: 1, rows: 1, border: '', hide: true},
    {text: 'EMBLEM', cols: 1, rows: 1, border: '', hide: false},
    {text: 'RING', cols: 1, rows: 1, border: '', hide: false},
    {text: 'PENDANT', cols: 1, rows: 1, border: '', hide: false},
    {text: 'FACE', cols: 1, rows: 1, border: '', hide: false},
    {text: '', cols: 1, rows: 1, border: '', hide: true},
    {text: 'BADGE', cols: 1, rows: 1, border: '', hide: false},
    {text: 'RING', cols: 1, rows: 1, border: '', hide: false},
    {text: 'PENDANT', cols: 1, rows: 1, border: '', hide: false},
    {text: 'EYE', cols: 1, rows: 1, border: '', hide: false},
    {text: 'EARRING', cols: 1, rows: 1, border: '', hide: false},
    {text: 'MEDAL', cols: 1, rows: 1, border: '', hide: false},
    {text: 'RING', cols: 1, rows: 1, border: '', hide: false},
    {text: 'WEAPON', cols: 1, rows: 1, border: '', hide: false},
    {text: 'TOP', cols: 1, rows: 1, border: '', hide: false},
    {text: 'SHOULDER', cols: 1, rows: 1, border: '', hide: false},
    {text: 'SUP WEAPON', cols: 1, rows: 1, border: '', hide: false},
    {text: 'POCKET', cols: 1, rows: 1, border: '', hide: false},
    {text: 'BELT', cols: 1, rows: 1, border: '', hide: false},
    {text: 'BOTTOM', cols: 1, rows: 1, border: '', hide: false},
    {text: 'GLOVE', cols: 1, rows: 1, border: '', hide: false},
    {text: 'CAPE', cols: 1, rows: 1, border: '', hide: false},
    {text: 'BOX', cols: 1, rows: 1, border: '', hide: false},
    {text: '', cols: 1, rows: 1, border: '', hide: true},
    {text: 'SHOES', cols: 1, rows: 1, border: '', hide: false},
    {text: 'ANDROID', cols: 1, rows: 1, border: '', hide: false},
    {text: 'HEART', cols: 1, rows: 1, border: '', hide: false},
  ];

  tilesTotems: Tile[] = [
    {text: '1', cols: 1, rows: 1, border: '', hide: false},
    {text: '2', cols: 1, rows: 1, border: '', hide: false},
    {text: '3', cols: 1, rows: 1, border: '', hide: false},
  ];

  tilesArcane: Tile[] = [
    {text: '1', cols: 1, rows: 1, border: '', hide: false},
    {text: '2', cols: 1, rows: 1, border: '', hide: false},
    {text: '3', cols: 1, rows: 1, border: '', hide: false},
    {text: '4', cols: 1, rows: 1, border: '', hide: false},
    {text: '5', cols: 1, rows: 1, border: '', hide: false},
    {text: '6', cols: 1, rows: 1, border: '', hide: false},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  hideEquipmentTile(tile: Tile): number {
    return tile.hide ? 0 : 1;
  }
}

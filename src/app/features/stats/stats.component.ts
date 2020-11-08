import {Component, OnInit} from '@angular/core';

export interface CharacterWindowStats {
  name: string;
  value: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  hyperStats: CharacterWindowStats[] = [
    {name: 'STR', value: '0'},
    {name: 'DEX', value: '0'},
    {name: 'INT', value: '0'},
    {name: 'LUK', value: '0'},
    {name: 'HP', value: '0'},
    {name: 'MP', value: '0'},
    {name: 'DF/TF/MANA', value: '0'},
    {name: 'CRIT RATE', value: '0'},
    {name: 'CRIT DMG', value: '0'},
    {name: 'IED', value: '0'},
    {name: 'DAMAGE', value: '0'},
    {name: 'BOSS DAMAGE', value: '0'},
    {name: 'STATUS RES', value: '0'},
    {name: 'KNOCKBACK RES', value: '0'},
    {name: 'ATT & M.ATT', value: '0'},
    {name: 'ATT & M.ATT', value: '0'},
    {name: 'BONUS EXP', value: '0'},
    {name: 'ARCANE FORCE', value: '0'},
  ];

  characterStats: CharacterWindowStats[] = [
    {name: 'Name', value: '0'},
    {name: 'Class', value: '0'},
    {name: 'Damage', value: '0'},
    {name: 'HP', value: '0'},
    {name: 'MP', value: '0'},
    {name: 'STR', value: '0'},
    {name: 'DEX', value: '0'},
    {name: 'INT', value: '0'},
    {name: 'LUK', value: '0'},
  ];

  detailedStats: CharacterWindowStats[] = [
    {name: 'DAMAGE', value: '0'},
    {name: 'DAMAGE BONUS', value: '0'},
    {name: 'BOSS DAMAGE', value: '0'},
    {name: 'FINAL DAMAGE', value: '0'},
    {name: 'IED', value: '0'},
    {name: 'CRIT RATE', value: '0'},
    {name: 'CRIT DAMAGE', value: '0'},
    {name: 'STATUS RES', value: '0'},
    {name: 'KNOCKBACK RES', value: '0'},
    {name: 'DEFENSE', value: '0'},
    {name: 'SPEED', value: '0'},
    {name: 'STARFORCE', value: '0'},
    {name: 'ARCANE POWER', value: '0'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

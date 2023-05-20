import { Injectable } from '@angular/core';
import { Drug } from '../common/drug';
import drugsJSON from '../../assets/drugs.json';

@Injectable({
  providedIn: 'root',
})
export class DrugListService {

  drugList: drugs[] = drugsJSON;

  constructor() {}
}

interface drugs {
  name: string; 
  strength: number;
  vialSizes: number[];
  active: string;
}

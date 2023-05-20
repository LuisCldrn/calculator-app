import { Injectable } from '@angular/core';
import { Supply } from '../common/supply';
import suppliesJSON from '../../assets/supplies.json';

@Injectable({
  providedIn: 'root',
})
export class SuppliesService {

  suppliesList: supplies[] = suppliesJSON;



   constructor() {}



}


interface supplies {
  IRC: number;
  NDC: string;
  name: string;
  admin: string[];
  prescriber: string;
  formula: number;
  qty: number;
  sig: string;
  notes: string;
  type: string;
  status: string;
  required: string;
}
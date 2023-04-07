import { Injectable } from '@angular/core';
import { Drug } from '../common/drug';

@Injectable({
  providedIn: 'root',
})
export class DrugListService {
  Gammagard: Drug = new Drug(
    'Gammagard 10%',
    10,
    [30, 20, 10, 5, 2.5, 1],
    'inActive'
  );
  HizentraVial = new Drug('Hizentra 20%', 5, [10, 4, 2, 1], 'inActive');
  HizentraPfs = new Drug('Hizentra PFS', 5, [4, 2, 1], 'inActive');
  Cuvitru = new Drug('Cuvitru', 5, [10, 8, 4, 2, 1], 'inActive');
  Gamunex = new Drug('Gamunex 10%', 10, [40, 20, 10, 5, 2.5, 1], 'inActive');
  Cutaquig = new Drug('Cutaquig', 10, [8, 4, 2, 1], 'inActive');
  Xembify = new Drug('Xembify', 10, [10, 4, 2, 1], 'inActive');
  Octagam5 = new Drug('Octagam 5%', 10, [10, 5, 2.5, 1], 'inActive');
  Octagam10 = new Drug('Octagam 10%', 10, [30, 20, 10, 5, 2], 'inActive');
  Privigen = new Drug('Privigen', 10, [40, 20, 10, 5], 'inActive');
  Panzyga = new Drug('Panzyga', 10, [30, 20, 10, 5, 2.5, 1], 'inActive');
  Gammaplex = new Drug('Gammaplex', 10, [20, 10, 5], 'inActive');
  Gamastan = new Drug('Gamastan', 10, [10, 2], 'inActive');
  GammagardSD5 = new Drug('Gammagard S/D 5%', 10, [10, 5], 'inActive');
  GammagardSD10 = new Drug('Gammagard S/D 10%', 10, [10, 5], 'inActive');
  Hyqvia = new Drug('Hyqvia', 10, [30, 20, 10, 5, 2.5], 'inActive');

  drugList: Drug[] = [
    this.Gammagard,
    this.HizentraVial,
    this.HizentraPfs,
    this.Cuvitru,
    this.Gamunex,
    this.Cutaquig,
    this.Xembify,
    this.Octagam5,
    this.Octagam10,
    this.Privigen,
    this.Panzyga,
    this.Gammaplex,
    this.Gamastan,
    this.GammagardSD10,
    this.GammagardSD5,
    this.Hyqvia,
  ];

  constructor() {}
}

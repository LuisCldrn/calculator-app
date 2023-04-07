import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/common/drug';
import { Vials } from 'src/app/common/vials';
import { DrugListService } from 'src/app/services/drug-list.service';

@Component({
  selector: 'app-drug-selection',
  templateUrl: './drug-selection.component.html',
  styleUrls: ['./drug-selection.component.css'],
})
export class DrugSelectionComponent implements OnInit {
  ngOnInit() {}

  constructor(public drugListService: DrugListService) {}

  errorMsg: string = '';
  selectedDrug!: Drug;
  dose: number = 0;
  unchangedDose: number = 0;
  doseMls: number = 0;
  numberOfInf: number = 0;
  daySupply: number = 0;
  vialsToUse: number[] = [];
  //routes of admin to choose from
  routeOfAdmin: string[] = ['SQ', 'PIV', 'PORT', 'PICC'];
  //current drug list
  vialDisplay: Vials[] = [];
  admin: string = '';
  frequency: string = '';

  saveInputs(daySupply: number, numberOfInf: number) {
    this.daySupply = daySupply;
    this.numberOfInf = numberOfInf;
  }

  //select a drug to make it active and remove others active class
  selectDrug(drug: Drug) {
    if (this.selectedDrug !== undefined) {
      this.selectedDrug.active = 'inActive';
    }
    this.selectedDrug = drug;
    this.selectedDrug.active = 'isActive';
  }
  //calcualte the dose and assign dose
  calculateDose(num: string) {
    this.dose = +num;
    this.unchangedDose = +num;
    this.doseMls = this.selectedDrug.strength * +num;
  }

  calculateVials(infusions: number, daySupply: number) {
    this.saveInputs(daySupply, infusions);
    if (this.dose % 1 === 0) {
      this.removeTwoFiveVial();
    }
    this.vialsToUse = [];
    for (let i = 0; i < this.selectedDrug.vialSizes.length; i++) {
      if (this.dose <= 0) {
        break;
      } else if (this.dose - this.selectedDrug.vialSizes[i] < 0) {
      } else {
        do {
          this.dose -= this.selectedDrug.vialSizes[i];
          this.vialsToUse.push(this.selectedDrug.vialSizes[i]);
        } while (this.dose - this.selectedDrug.vialSizes[i] >= 0 === true);
      }
    }
    if (this.dose > 0) {
      this.errorMsg =
        'Please Double check dose and vial sizes. As does cannot be made with vials';
    }

    this.generateVials(this.vialsToUse);
    this.calcVialsFields();
  }
  //remove the 2.5gm vial dose from vials of drug as its not always needed
  removeTwoFiveVial() {
    const index = this.selectedDrug.vialSizes.indexOf(2.5);
    if (index > 0) {
      this.selectedDrug.vialSizes.splice(index, 1);
      console.log(this.selectedDrug.vialSizes);
    }
  }
  print(tis: any) {
    console.log(tis);
  }

  checkIfVialExist(vialSize: number) {
    let index = this.vialDisplay.findIndex((e) => e.size === vialSize);
    return index;
  }

  generateVials(vialsToUse: number[]) {
    vialsToUse.forEach((vial) => {
      if (this.checkIfVialExist(vial) === -1) {
        this.vialDisplay.push(new Vials(1, vial, '', 0, ''));
        console.log(`new vial: ${this.vialDisplay}`);
      } else {
        this.vialDisplay[this.checkIfVialExist(vial)].amount++;
        console.log(
          `updated vial: ${this.vialDisplay[this.checkIfVialExist(vial)]}`
        );
      }
    });
  }

  calcVialsFields() {
    this.vialDisplay.forEach((e) => {
      if (
        this.selectedDrug === this.drugListService.GammagardSD10 ||
        this.selectedDrug === this.drugListService.GammagardSD5
      ) {
        e.dispenseMls = e.amount * this.numberOfInf;
      } else {
        e.dispenseMls = Math.round(
          e.amount * e.size * this.selectedDrug.strength * this.numberOfInf
        );
      }
      switch (true) {
        case this.daySupply === 84 &&
          (this.numberOfInf === 3 ||
            this.numberOfInf === 12 ||
            this.numberOfInf === 6):
          e.commentLine = `${e.dispenseMls}MLS = ${this.daySupply}DS | ${
            e.dispenseMls / 3
          }MLS = ${this.daySupply / 3}DS `;
          return;
        case this.daySupply === 84 && this.numberOfInf === 4:
          e.commentLine = `${e.dispenseMls}MLS = ${this.daySupply}DS | ${
            e.dispenseMls / 4
          }MLS = ${this.daySupply / 4}DS `;
          return;
        default:
          e.commentLine = `${e.dispenseMls}MLS = ${this.daySupply}DS`;
          return;
      }
    });
  }

  mainDrugSigBuilder() {
    switch (true) {
      case this.selectedDrug === this.drugListService.Hyqvia: {
        let sig = `Infuse every 3 weeks`;
        this.updateVialSig(sig);
        return;
      }
      case this.selectedDrug ===
        (this.drugListService.GammagardSD10 ||
          this.drugListService.GammagardSD5): {
        let sig = 'gammagard sig';
        this.updateVialSig(sig);
        return;
      }
      case this.admin === 'SQ': {
        let sig = `INFUSE ${this.unchangedDose}GM (${this.doseMls}) SUBCUTANENOUSLY ${this.frequency}`;
        this.updateVialSig(sig);
        return;
      }
      default: {
        let sig = `INFUSE ${this.unchangedDose}GM (${this.doseMls}) INTRAVENOUSLY ${this.frequency}`;
        this.updateVialSig(sig);
        return;
      }
    }
  }

  updateVialSig(sig: string) {
    this.vialDisplay.forEach((e) => (e.sig = sig));
  }
}

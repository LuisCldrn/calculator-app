import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Drug } from 'src/app/common/drug';
import { Supply } from 'src/app/common/supply';
import { Vials } from 'src/app/common/vials';
import { ClarificationListService } from 'src/app/services/clarification-list.service';
import { DrugListService } from 'src/app/services/drug-list.service';
import { SuppliesService } from 'src/app/services/supplies.service';

@Component({
  selector: 'app-drug-selection',
  templateUrl: './drug-selection.component.html',
  styleUrls: ['./drug-selection.component.css'],
})
export class DrugSelectionComponent implements OnInit {
  ngOnInit() {}

  constructor(
    public drugListService: DrugListService,
    public matTabGroup: MatTabsModule,
    public suppliesService: SuppliesService,
    public clarificationService: ClarificationListService,
  ) {}
  errorMsg: string = '';
  selectedDrug!: Drug;
  dose: number = 0;
  unchangedDose: number = 0;
  doseMls: number = 0;
  numberOfInf: number = 0;
  daySupply: number = 0;
  vialsToUse: number[] = [];
  hydrationB: string = 'false';
  conseqB: string = 'false';
  concurrent: string = 'false';
  hydrationMls: number = 0;
  numberOfVials: number = 0;
  premedCount: number = 0;
  highestPremedMls: number = 0;
  piccLumens: number = 0;
  //routes of admin to choose from
  routeOfAdmin: adminType[] = [
    new adminType('SQ', 'inActive'),
    new adminType('PIV', 'inActive'),
    new adminType('PORT', 'inActive'),
    new adminType('PICC', 'inActive'),
  ];
  //current drug list
  vialDisplay: Vials[] = [];
  admin!: adminType;
  frequency: string = '';

  //SET METHODS FOR IV PREMEDS

  setPremedCount(num: number) {this.premedCount = num}
  setHighestPremed(num: number) {this.highestPremedMls = num}
  setConseqB(str: string) {this.conseqB = str}

  
  saveInputs(daySupply: number, numberOfInf: number, frequency: string) {
    this.daySupply = daySupply;
    this.numberOfInf = numberOfInf;
    this.frequency = frequency;
  }

  setAdmin(admin: adminType) {
    if (this.admin !== undefined) {
      this.admin.status = 'inActive';
    }
    this.admin = admin;
    this.admin.status = 'isActive';
    
  }

  setVials(num: number) {
    this.numberOfVials = num;
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

  setPicc(num: number) {
    this.piccLumens = num;
  }

  printArray() {
    let exportData = this.clarificationService.clarificationList;

    console.log(JSON.stringify(exportData, null, 2));
  }

  calculateVials(
    infusions: number,
    daySupply: number,
    frequency: string,
    num: string
  ) {
    this.vialDisplay = [];
    this.errorMsg = '';
    if(num === '' || infusions === 0 || frequency === '' || daySupply === 0) {
      this.errorMsg='PLEASE ENTER/SELECT ALL FIELDS'; return
    }
    this.calculateDose(num);
    this.saveInputs(daySupply, infusions, frequency);
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
    this.numberOfVials === 0 && (this.numberOfVials = this.vialsToUse.length);

    if (this.dose > 0) {
      this.errorMsg =
        'Please Double check dose and vial sizes. As does cannot be made with vials';
    }

    this.generateVials(this.vialsToUse);
    this.calcVialsFields();
    this.mainDrugSigBuilder();
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
        this.selectedDrug.name === 'Gammagard S/D 5%' ||
        this.selectedDrug.name === 'Gammagard S/D 10%'
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
      case this.selectedDrug.name === 'Hyqvia': {
        let sig = `ADMINISTER HYALURONIDASE THEN SUBCUTANEOUSLY INFUSE HYQVIA ${this.unchangedDose}GM (${this.unchangedDose*10}ML) ${this.frequency}`;
        this.updateVialSig(sig);
        return;
      }
      case (this.selectedDrug.name === 'Gammagard S/D 5%' ||
        this.selectedDrug.name === 'Gammagard S/D 10%'): {
        let sig = `RECONSTITUTE AS DIRECTED TO ${this.unchangedDose/this.doseMls * 100}%. INFUSE ${this.unchangedDose}GM (${this.doseMls}ML) INTRAVENOUSLY ${this.frequency}`;
        this.updateVialSig(sig);
        return;
      }
      case this.admin.admin === 'SQ': {
        let sig = `INFUSE ${this.unchangedDose}GM (${this.doseMls}ML) SUBCUTANENOUSLY ${this.frequency}`;
        this.updateVialSig(sig);
        return;
      }
      default: {
        let sig = `INFUSE ${this.unchangedDose}GM (${this.doseMls}ML) INTRAVENOUSLY ${this.frequency}`;
        this.updateVialSig(sig);
        return;
      }
    }
  }

  updateVialSig(sig: string) {
    this.vialDisplay.forEach((e) => (e.sig = sig));
  }

  //HYDRATION CODE 

  hydrationFreq: string = '';
  hydrationSig: string = '';
  hydrationQty: number = 0;
  hydrationComment: string = '';

  sethydraMls(num: number ) {
    this.hydrationMls = num;
  }
  
  setHydraFreq (str: string) {
    this.hydrationFreq = str;
    this.hydrationBuilder()
  }

  setHydration (str: string) {
    this.hydrationB = str;
  }

  setConcurrent (str: string) {
    this.concurrent = str;
  }

  hydrationBuilder() {
    console.log(this.hydrationMls, this.hydrationQty, this.hydrationFreq, this.hydrationB, this.concurrent)
    this.hydrationSig = `ADMINISTER ${this.hydrationMls}ML INTRAVENOUSLY ${this.hydrationFreq} EACH IG INFUSION (MAX INFUSION RATE XXXML PER HOUR).`
    this.hydrationQty = this.hydrationFreq === 'PRIOR TO AND POST' ? +this.hydrationMls * this.numberOfInf * 2 : +this.hydrationMls * this.numberOfInf;
    this.hydrationComment = this.calculateHydrationComment()
  }

  calculateHydrationComment() {
    switch (true) {
      case this.daySupply === 84 &&
        (this.numberOfInf === 3 ||
          this.numberOfInf === 12 ||
          this.numberOfInf === 6):
        return  `${this.hydrationQty}ML = ${this.daySupply}DS | ${
          this.hydrationQty / 3
        }ML = ${this.daySupply / 3}DS `;

      case this.daySupply === 84 && this.numberOfInf === 4:
        return `${this.hydrationQty}ML = ${this.daySupply}DS | ${
          this.hydrationQty / 4
        }ML = ${this.daySupply / 4}DS `;
      default:
        return `${this.hydrationQty}ML = ${this.daySupply}DS`;
    }
  }


  //DIPHENHYDRAMIN SPECIFIC CODE

  diphenDoseSelected!: Doses;
  diphenFreqSelected!: preFreq;
  diphenSig!: string;
  diphenqty!: number;
  diphenComment!: string;

  diphenDoses: Doses[] = [
    new Doses('25MG', 1, '1 CAPSULE', 'inActive'),
    new Doses('50MG', 2, '2 CAPSULES', 'inActive'),
    new Doses('25-50MG', 2, '1-2 CAPSULE(S)', 'inActive'),
  ];

  diphenFreq: preFreq[] = [
    new preFreq('DOES NOT REPEAT', '', 'inActive'),
    new preFreq('REPEATS ONCE', 'MAY REPEAT ONCE AS NEEDED', 'inActive'),
    new preFreq(
      'REPEATS AS NEEDED',
      'MAY REPEAT EVERY 4-6 HOURS AS NEEDED FOR RASH, HIVES, OR NAUSEA. MAX 100MG PER DAY',
      'inActive'
    ),
  ];

  setDiphenDoseSelected(dose: Doses) {
    if (this.diphenDoseSelected !== undefined) {
      this.diphenDoseSelected.status = 'inActive';
    }
    this.diphenDoseSelected = dose;
    this.diphenDoseSelected.status = 'isActive';
    if (this.diphenDoseSelected !== null && this.diphenFreqSelected !== null) {
      this.generateDiphen();
    }
  }

  setDiphenFreqSelected(freq: preFreq) {
    if (this.diphenFreqSelected !== undefined) {
      this.diphenFreqSelected.status = 'inActive';
    }
    this.diphenFreqSelected = freq;
    this.diphenFreqSelected.status = 'isActive';
    if (this.diphenDoseSelected !== null && this.diphenFreqSelected !== null) {
      this.generateDiphen();
    }
  }

  generateDiphen() {
    this.diphenSig = '';
    this.diphenSig = `TAKE ${this.diphenDoseSelected.sig} (${this.diphenDoseSelected.dose}) BY MOUTH 
    30 MINUTES PRIOR TO INFUSION. ${this.diphenFreqSelected.freqsig} `;
    this.calculateDiphenQty();
    this.calcDiphenComment()
  }

  calculateDiphenQty() {
    let dose = this.diphenFreqSelected.freq;
    switch (true) {
      case dose === 'DOES NOT REPEAT':
        this.diphenqty = this.diphenDoseSelected.qty * this.numberOfInf;
        return;
      case dose === 'REPEATS ONCE':
        this.diphenqty = this.diphenDoseSelected.qty * 2 * this.numberOfInf;
        return;
      case dose === 'REPEATS AS NEEDED':
        this.diphenqty = 4 * this.numberOfInf;
        return;
      default:
        return;
    }
  }

  calcDiphenComment() {
    switch (true) {
      case this.daySupply === 84 &&
        (this.numberOfInf === 3 ||
          this.numberOfInf === 12 ||
          this.numberOfInf === 6):
        this.diphenComment = `${this.diphenqty} = ${this.daySupply}DS | ${
          this.diphenqty / 3
        } = ${this.daySupply / 3}DS `;
        return;
      case this.daySupply === 84 && this.numberOfInf === 4:
        this.diphenComment = `${this.diphenqty} = ${this.daySupply}DS | ${
          this.diphenqty / 4
        } = ${this.daySupply / 4}DS `;
        return;
      default:
        this.diphenComment = `${this.diphenqty} = ${this.daySupply}DS`;
        return;
    }
  }
  //ACETAMINOPHEN CODE

  apapDoseSelected!: Doses;
  apapFreqSelected!: preFreq;
  apapqty!: number;
  apapSig!: string;
  apapCommentLine!: string;

  apapDoses: Doses[] = [
    new Doses('325MG', 1, '1 TABLET', 'inActive'),
    new Doses('650MG', 2, '2 TABLETS', 'inActive'),
    new Doses('325MG-650MG', 2, '1-2 TABLET(S)', 'inActive'),
    new Doses('500MG', 1, '1 TABLET', 'inActive'),
    new Doses('1000MG', 2, '2 TABLETS', 'inActive'),
    new Doses('500MG-1000MG', 2, '1-2 TABLET(S)', 'inActive'),
  ];

  apapFreq: preFreq[] = [
    new preFreq('DOES NOT REPEAT', '', 'inActive'),
    new preFreq('REPEATS ONCE', 'MAY REPEAT ONCE AS NEEDED', 'inActive'),
    new preFreq(
      'REPEATS AS NEEDED',
      'MAY REPEAT EVERY 4-6 HOURS AS NEEDED FOR ACHES, PAIN OR FEVER. (MAX 2000MG PER DAY)',
      'inActive'
    ),
  ];

  setApapDoseSelected(dose: Doses) {
    if (this.apapDoseSelected !== undefined) {
      this.apapDoseSelected.status = 'inActive';
    }
    this.apapDoseSelected = dose;
    this.apapDoseSelected.status = 'isActive';
    if (this.apapDoseSelected !== null && this.apapFreqSelected !== null) {
      this.generateApap();
    }
  }


  setApapFreqSelected(freq: preFreq) {
    if (this.apapFreqSelected !== undefined) {
      this.apapFreqSelected.status = 'inActive';
    }
    this.apapFreqSelected = freq;
    this.apapFreqSelected.status = 'isActive';
    if (this.apapDoseSelected !== null && this.apapFreqSelected !== null) {
      this.generateApap();
    }
  }

  generateApap() {
    this.apapSig = '';
    this.apapSig = `TAKE ${this.apapDoseSelected.sig} (${this.apapDoseSelected.dose}) BY MOUTH 
    30 MINUTES PRIOR TO INFUSION. ${this.apapFreqSelected.freqsig} `;
    this.calculateApapQty();
    this.calcApapComment()
  }

  calculateApapQty() {
    let dose = this.apapFreqSelected.freq;
    switch (true) {
      case dose === 'DOES NOT REPEAT':
        this.apapqty = this.apapDoseSelected.qty * this.numberOfInf;
        return;
      case dose === 'REPEATS ONCE':
        this.apapqty = this.apapDoseSelected.qty * 2 * this.numberOfInf;
        return;
      case dose === 'REPEATS AS NEEDED' && (this.apapDoseSelected.dose === "500MG" || this.apapDoseSelected.dose === "1000MG" || this.apapDoseSelected.dose === "500MG-1000MG" ):
        this.apapqty = 4 * this.numberOfInf;
        return;
      case dose === 'REPEATS AS NEEDED' && (this.apapDoseSelected.dose === "325MG" || this.apapDoseSelected.dose === "650MG" || this.apapDoseSelected.dose === "325MG-650MG" ):
        this.apapqty = 6 * this.numberOfInf;
        return;
      default:
        return;
    }
  }

  calcApapComment() {
    switch (true) {
      case this.daySupply === 84 &&
        (this.numberOfInf === 3 ||
          this.numberOfInf === 12 ||
          this.numberOfInf === 6):
        this.apapCommentLine = `${this.apapqty} = ${this.daySupply}DS | ${
          this.apapqty / 3
        } = ${this.daySupply / 3}DS`;
        return;
      case this.daySupply === 84 && this.numberOfInf === 4:
        this.apapCommentLine = `${this.apapqty} = ${this.daySupply}DS | ${
          this.apapqty / 4
        } = ${this.daySupply / 4}DS`;
        return;
      default:
        this.apapCommentLine = `${this.apapqty} = ${this.daySupply}DS`;
        return;
    }
  }

  //SUPPLIES CALCULATIONS

  calculateSupplyQty(num: number): any {
    switch (true) {
      case num === 1: {
        return 1;
      }
      case num === 2: {
        return 4;
      }
      case num === 3: {
        return this.numberOfInf + 1;
      }
      case num === 4: {
        return this.numberOfInf * 3 + 1;
      }
      case num === 5:
        return this.numberOfInf * 3;
      case num === 6:
        return this.numberOfInf > 1 ? Math.ceil(this.daySupply / 28) * 25 :  25;
      case num === 7:
        return this.numberOfInf > 1 ? Math.ceil(this.daySupply / 28) * 20 :  20;
      case num === 8:
        return this.doseMls <= 250 ? this.numberOfInf + 1 : 0;
      case num === 9:
        if (this.doseMls <= 500 && this.doseMls > 250) {
          return this.numberOfInf + 1;
        } else return 0;
      case num === 10:
        if (this.doseMls <= 1000 && this.doseMls > 500) {
          return this.numberOfInf + 1;
        } else return 0;
      case num === 11:
        if (this.hydrationB === 'true') {
          return this.numberOfInf + 1;
        } else return 1;
      case num === 12:
        if (this.conseqB === 'true') {
          return this.numberOfInf * 15;
        } else return 0;
      case num === 13:
        return this.numberOfInf * 25;
      case num === 14:
        return this.numberOfInf * 50;
      case num === 15:
        if (this.selectedDrug.name === "Hizentra PFS") {
          return 0;
        } else if (this.admin.admin === 'SQ') {
          return this.numberOfVials * this.numberOfInf + 1;
        } else return this.numberOfVials * this.numberOfInf;
      case num === 16:
        return this.concurrent === 'true' ? this.numberOfInf + 1 : 0;
      case num === 17:
        return 100;
      case num === 18:
        return 200;
      case num === 19:
        return this.admin.admin === 'SQ'
          ? Math.ceil(this.doseMls / 50) * this.numberOfInf + 1
          : this.numberOfInf + 1;
      case num === 20:
        return this.admin.admin === 'HYQVIA'
          ? (this.numberOfInf + 1) * 2
          : this.numberOfInf + 1;
      case num === 21:
        return this.highestPremedMls <= 3 && this.highestPremedMls > 0
          ? this.premedCount * this.numberOfInf + 1
          : 0;
      case num === 22:
        return this.highestPremedMls > 3
          ? this.premedCount * this.numberOfInf + 1
          : 0;
      case num === 23:
        return this.premedCount > 0
          ? this.premedCount * this.numberOfInf + 1
          : 0;
      case num === 24:
        return this.numberOfInf * 15;
      case num === 25:
        console.log(this.numberOfInf, this.piccLumens, this.daySupply, this.numberOfInf)
        return (
          50 * this.numberOfInf * this.piccLumens +
          20 * (this.daySupply - this.numberOfInf) * this.piccLumens
         ) ;
      case num === 26:
        return (
          Math.ceil(12.5 * this.numberOfInf * this.piccLumens) +
          5 * (this.daySupply - this.numberOfInf) * this.piccLumens
        );
      case num === 27:
        return (Math.round(this.unchangedDose * 0.5) < 10 && Math.round(this.unchangedDose * 0.5) > 0)
          ? this.numberOfInf + 1
          : 0;
      case num === 28:
        return (Math.round(this.unchangedDose * 0.5) < 20 && Math.round(this.unchangedDose * 0.5) >= 10)
          ? this.numberOfInf + 1
          : 0;
      case num === 29:
        return (Math.round(this.unchangedDose * 0.5) < 30 && Math.round(this.unchangedDose * 0.5) >= 20)
          ? this.numberOfInf + 1
          : 0;
      case num === 30:
        return this.doseMls < 500 ? this.numberOfInf + 1 : 0;
      case num === 31:
        return this.selectedDrug.name === 'Hizentra PFS'
          ? Math.ceil(this.doseMls / 50) * this.numberOfInf + 1
          : 0;
      case num === 32:
        if ( this.selectedDrug.name === "Gammagard S/D 10%" || this.selectedDrug.name === 'Gammagard S/D 5%') {
          return this.numberOfInf + 1
        }
        else {return 0}
    }
  }

  displayedSupplies: Supply[] = [];
  mdDisplayedSupplies: Supply[] = [];
  cvsDisplayedSupplies: Supply[] = [];

  calculateSupplies() {
    this.selectedDrug.name === 'Hyqvia' && (this.admin.admin = 'HYQVIA'); 
    this.displayedSupplies = this.suppliesService.suppliesList.filter(e => e.admin.includes(this.admin.admin));
    //calculate qty
    this.displayedSupplies.forEach(e => {
      e.qty = this.calculateSupplyQty(e.formula);
    }
    )

    //premark supplies gray if qty is 0
    this.displayedSupplies.forEach(e => {
      if (e.qty===0) {e.status = 'complete'}
    })

    //filter to mdo and cvs supplies
    this.mdDisplayedSupplies = this.displayedSupplies.filter(e => e.prescriber === 'MD');
    this.cvsDisplayedSupplies = this.displayedSupplies.filter(e => e.prescriber === 'CVS');

  }
  //mark a supply complete by changing supply attribute to complete mark back to pending if clicked again
  markComplete(status:string, supply: Supply) {
    console.log(status)
    if(supply.status === 'pending') {
      supply.status = 'complete';
    }

    else {
      supply.status = 'pending'
    }

  }




}




export class Doses {
  constructor(
    public dose: string,
    public qty: number,
    public sig: string,
    public status: string
  ) {}
}
export class preFreq {
  constructor(
    public freq: string,
    public freqsig: string,
    public status: string
  ) {}
}
export class adminType {
  constructor(public admin: string, public status: string) {}
}

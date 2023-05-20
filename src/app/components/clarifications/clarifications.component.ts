import { Component } from '@angular/core';
import { Clarification } from 'src/app/common/clarification';
import { ClarificationListService } from 'src/app/services/clarification-list.service';

@Component({
  selector: 'app-clarifications',
  templateUrl: './clarifications.component.html',
  styleUrls: ['./clarifications.component.css']
})
export class ClarificationsComponent {

  constructor(
    private clarificationList: ClarificationListService,
  ) {
    
  }
  
  public finalClarifications: Clarification[] = [];
  public patientClar: Clarification[] = this.clarificationList.clarificationList.filter(e => e.clarifType === "PT");
  public rxClar: Clarification[] = this.clarificationList.clarificationList.filter(e => e.clarifType === "RX")
  //patient specific questions
  public mdClar: Clarification[] = this.clarificationList.clarificationList.filter(e => e.clarifType === "MD")
  public genClar: Clarification[] = this.clarificationList.clarificationList.filter(e => e.clarifType === "GEN")
  public shortOutput: string = '';
  public longOutput: string = '';


  addClar(clar: Clarification) {
    if (this.finalClarifications.includes(clar)) {
      let index = this.finalClarifications.indexOf(clar);
      delete this.finalClarifications[index];
      clar.status = 'nonActive'
    }
    else {
      this.finalClarifications.push(clar);
      clar.status = 'active';
    }
    this.buildShortString()
  }

  buildShortString() {
    let tempString: string = '';
    this.finalClarifications.forEach(e => tempString += `${e.code}, `)
    tempString = tempString.slice(0, tempString.length-2)
    this.shortOutput = `Need to clarify for ${tempString}`

    let tempString2: string = '';
    this.finalClarifications.forEach(e => tempString2 += `${e.desc}, `)
    tempString2 = tempString2.slice(0, tempString2.length-2)
    this.longOutput = `Need to clarify ${tempString2}`

  }

}

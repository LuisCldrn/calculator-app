import { Injectable } from '@angular/core';
import { Clarification } from '../common/clarification';
import { Vials } from '../common/vials';

@Injectable({
  providedIn: 'root'
})
export class ClarificationListService {

  constructor() { }

  
  

  PtName = new Clarification('PT-NAME', 'Missing/Invalid Patient Name', 'inActive', 'PT', 'required' );
  PtDOB = new Clarification('PT-DOB', 'Missing/Invalid Patient DOB', 'inActive', 'PT', 'required' );
  PtAdd = new Clarification('PT-ADD', 'Missing/Invalid Patinet Address', 'inActive', 'PT', 'required' );
  Ptphone = new Clarification('PT-PH', 'Missing/Invalid Patient Phone', 'inActive', 'PT', 'nonrequired' );
  HBS = new Clarification('HBS#', 'HBS account Incorrect', 'inActive', 'PT', 'nonrequired' );
  PTHT = new Clarification('PT-HT', 'Missing/Invalid Patient Height', 'inActive', 'PT', 'nonrequired' );
  PTWT = new Clarification('PT-WT', 'Missing/Invalid Patient Weight', 'inActive', 'PT', 'nonrequired' );
  PTIden = new Clarification('PT-Identifier', 'Patient Information (Name, DOB, address etc) does not match what we have on file', 'inActive', 'PT', 'required' );      
  IgErx = new Clarification('IG-Erx', 'ERX not accepted for IVIG please provide complete nursing orders', 'inActive', 'GEN', 'nonrequired' ); 
  Loa = new Clarification('LOA/LOS', 'Location of Service', 'inActive', 'RX', 'required' ); 
  PreMed = new Clarification('PRE-MED', 'Missing or need clarification on Premed for ______', 'inActive', 'RX', 'nonrequired' ); 
  Epi = new Clarification('EPI', 'Missing/Invalid EpiPen Information', 'inActive', 'RX', 'required' );
  Referral = new Clarification('NEW REFERRAL', 'FOR NPE - NEED TO CREATE A CVS PRE-POPULATED FORM FOR VALID PRESCRIPTION AUTHORIZATION TO BE SENT TO MDO FOR APPROVAL', 'inActive', 'GEN', 'Nonrequired'); 
  NY = new Clarification('NY', 'NEW YORK PRESCRIBER/NEED A VERBAL PER NY MDO PROTOCOL RX', 'inActive', 'GEN', 'Nonrequired'); 
  DS = new Clarification('DS', 'Missing/Invalid RX Day Supply', 'inActive', 'RX', 'required'); 
  QTY = new Clarification('QTY', 'Missing/Invalid RX Quantity', 'inActive', 'RX', 'required'); 
  vialSize = new Clarification('VIAL SIZE', 'Vial sizes and dose do not match', 'inActive', 'RX', 'Nonrequired'); 
  Dose = new Clarification('DOSE', 'Missing/Invalid Dose', 'inActive', 'RX', 'required');
  DQ = new Clarification('DQ', 'Missing/Invalid Dispense Quantity', 'inActive', 'RX', 'required'); 
  Refills = new Clarification('REFILLS', 'Missing/Invalid Refills', 'inActive', 'RX', 'required'); 
  Drug = new Clarification('DRUG', 'Missing/Invalid main drug', 'inActive', 'RX', 'required'); 
  ROA = new Clarification('ROA', 'Missing/Invalid Route of Administration', 'inActive', 'RX', 'required'); 
  Signature = new Clarification('Signature', 'Missing/Invalid Signature', 'inActive', 'MD', 'required');
  PFLW = new Clarification('PFLW', 'Patient Liability Waiver - self infusion waiver', 'inActive', 'PT', 'Nonrequired');  
  MDinfo = new Clarification('MD', 'Missing/Invalid MD Name', 'inActive', 'MD', 'Nonrequired'); 
  NPI = new Clarification('NPI', 'Missing/Invalid MD NPI', 'inActive', 'MD', 'Nonrequired');  
  MDPhFax = new Clarification('MD Phone/Fax/Add', 'Missing/invalid MD phone, fax or address', 'inActive', 'MD', 'Nonrequired');
  RPHreview = new Clarification('RPH-Review', 'Rx needs Clinical review from RPH before Entering', 'inActive', 'GEN', 'Nonrequired');  
  ALTMed = new Clarification('ALT MED', 'Alternative Medication Needed', 'inActive', 'RX', 'Nonrequired'); 
  Freq = new Clarification('FREQ', 'Missing/Invalid Frequency', 'inActive', 'RX', 'Nonrequired'); 
  ChangeOrder = new Clarification('CHANGE IN ORDERS-RPH', 'Need RPh Review for Change in orders for __________', 'inActive', 'GEN', 'Nonrequired'); 


  
  
  // new Clarification('', '', 'inActive', 'RX', 'Nonrequired'); 

  public clarificationList: Clarification[] = [
    this.PtName,
    this.PtDOB,
    this.PtAdd,
    this.Ptphone,
    this.HBS,
    this.PTHT,
    this.PTWT,
    this.PTIden,
    this.IgErx,
    this.Loa,
    this.PreMed,
    this.Epi,
    this.Referral,
    this.NY,
    this.DS,
    this.QTY,
    this.vialSize,
    this.Dose,
    this.DQ,
    this.Refills,
    this.Drug,
    this.ROA,
    this.Signature,
    this.PFLW,
    this.MDinfo,
    this.NPI,
    this.MDPhFax,
    this.RPHreview,
    this.ALTMed,
    this.Freq,
    this.ChangeOrder,
  ];
}
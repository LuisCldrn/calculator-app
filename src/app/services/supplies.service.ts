import { Injectable } from '@angular/core';
import { Supply } from '../common/supply';

@Injectable({
  providedIn: 'root',
})
export class SuppliesService {

  freedomPump = new Supply(
    34308,
    '00000-0343-08',
    'FREEDOM 60 PUMP',
    ['SQ', 'HYQVIA'],
    'MD',
    1,
    0,
    'USE AS DIRECTED TO ADMINISTER IG',
    'NPE & PUMP MAINTNANCE ONLY',
    'NPE'
  );
  CurlinPump = new Supply(
    36299,
    '00000-0362-99',
    'CURLIN PUMP',
    ['PICC', 'PORT', 'PIV'],
    'MD',
    1,
    0,
    'USE AS DIRECTED TO ADMINISTER IG',
    'NPE & PUMP MAINTNANCE ONLY',
    'NPE'
  );

  PumpManual = new Supply(40427, '00000-0404-27', 'PUMP MANUAL', ['PICC', 'SQ', 'PORT', 'PIV'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE & PUMP MAINTENANCE', 'NPE');
  Battery = new Supply(47729, '', 'BATTERY C', ['PICC', 'PORT', 'PIV'], 'CVS', 2, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Curlin90 = new Supply(37140, '00000-0371-40', 'CURLING SET 90"', ['PICC', 'PORT', 'PIV'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  IVPole = new Supply(36293, '00000-0411-57', 'IV POLE', ['PICC', 'PORT', 'PIV'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE ONLY', 'NPE');
  IVClamp = new Supply(36331, '00000-0363-31', 'IV POLE CLAMP', ['PICC', 'PORT', 'PIV'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE ONLY', 'NPE');
  IVHolster = new Supply(36332, '00000-0363-32', 'PUMP HOLSTER', ['PICC', 'PORT', 'PIV'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE ONLY', 'NPE');
  PivCath24 = new Supply(31237, '08290-3814-12', 'PIV Catheter, 24G x 3/4"', ['PIV'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 22G AND 24G, THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL');
  PivCath24win = new Supply(40204, '00000-0402-04', 'PIV Catheter, 24G x 3/4" winged', [ 'PIV'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 22G AND 24G, THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL');
  PivCath22 = new Supply(39333, '00000-0393-33', 'PIV Catheter, 24G x 3/4" winged', ['PIV'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 22G AND 24G, THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL');
  Huber22G = new Supply(39819, '00000-0398-19', 'PORT Huber set, 22G x 3/4"', ['PORT'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 3/4" HUBER AND 1" HUBER FOR NPE THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL');
  Huber22G1 = new Supply(35386, '00000-0353-86', 'PORT Huber set, 22G x 1"', ['PORT'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 3/4" HUBER AND 1" HUBER FOR NPE THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL');
  ClaveConnector = new Supply(28870, '00000-0288-70', 'Clave connector (needleless)', ['PORT'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  ClaveExt = new Supply(43187, '00000-0431-87', 'Clave ext set 7"', ['PIV'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  GravTubing = new Supply(32666, '00000-0326-66', 'IV Set sol w/ dou-vent', ['PIV', 'PORT', 'PICC'], 'MD', 11, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Diaflo = new Supply(35289, '85412-0024-27', 'IV Set extension (Dial-a-Flo extension)', ['PIV', 'PORT', 'PICC'], 'MD', 11, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Bag1L = new Supply(38967, '00000-0389-67', 'CORAM GRAVITY BAG (3 LEGGED BAG), 1000ML', ['PIV', 'PORT', 'PICC'], 'MD', 10, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Bag500ml = new Supply(39779, '00000-0397-79', 'CORAM GRAVITY BAG (2 PORT, 500ML)', ['PIV', 'PORT', 'PICC'], 'MD', 9, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Bag250ml = new Supply(40355, '00000-0389-67', 'CORAM GRAVITY BAG (2 PORT, 250ML)', ['PIV', 'PORT', 'PICC'], 'MD', 8, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  IvTransferSet = new Supply(34524, '00000-0403-55', 'IV TRANSFER SET, 23" W/17G NEEDLE', ['PIV', 'PORT', 'PICC'], 'MD', 17, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  VentedSpike = new Supply(37079, '00000-0370-79', 'VENTED SPIKE ADAPTER', ['PIV', 'PORT', 'PICC'], 'MD', 15, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  DressingKit = new Supply(48513, '00000-0417-92', 'PICC/PORT DRESSING CHANGE KIT', ['PORT', 'PICC'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  IvStartKit = new Supply(37247, '00000-0372-47', 'IV START KIT', ['PIV'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  SterileDrapes = new Supply(38490, '00000-0384-90', 'STERILE DRAPES', ['PORT', 'PICC'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Underpads = new Supply(33860, '00000-0338-60', 'UNDERPADS', ['SQ', 'PIV'], 'CVS', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Gauze = new Supply(39250, '00000-0392-50', 'GAUZE 2X2', ['SQ', 'PORT', 'PIV', 'PICC'], 'CVS', 0, 6, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Bandages = new Supply(40288, '00000-0402-88', 'BANDAGES, WATERPROOF', ['SQ','PIV', 'PORT', 'PICC'], 'CVS', 7, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Gloves = new Supply(45670, '00000-0437-17', 'GLOVES, MEDIUM (BOX)', ['SQ', 'PIV', 'PORT', 'PICC'], 'CVS', 17, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Wrap = new Supply(40238, '00000-0392-57', 'WRAP, 2" COBAN', ['PIV', 'PORT', 'PICC', 'SQ'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  PaperTape = new Supply(23511, '08333-1530-01', 'TAPE, PAPER 1" MICROPORE', ['PIV', 'PORT', 'PICC', 'SQ'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  AlcoholSwabs = new Supply(34094, '00000-0340-94', 'ALCOHOL PADS', ['SQ','PIV', 'PORT', 'PICC'], 'CVS', 18, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Sharps2G = new Supply(39170, '00000-0391-70', 'SHARPS CONTAINER, 2 GALLON', ['PIV', 'PORT', 'PICC', 'SQ'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Sharps3G = new Supply(35205, '63418-8001-03', 'SHARPS CONTAINER, 2 GALLON', ['PIV', 'PORT', 'PICC', 'SQ'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Syring50 = new Supply(24288, '08290-3096-53', 'SYRINGE, 50-60ML', [ 'SQ', 'PIV', 'PORT', 'PICC'], 'MD', 19, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Needle18G = new Supply(52210, '00000-0522-10', 'NEEDLE 18GX1" HYPO', ['PIV', 'PORT', 'PICC'], 'MD', 20, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Syringe10 = new Supply(43637, '08290-3029-95', 'SYRINGE, 10ML', ['PIV', 'PORT', 'PICC'], 'MD', 0, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  Syringe3 = new Supply(0, '', '', ['PIV', 'PORT', 'PICC'], '', 0, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');
  // SUPPLY = new Supply(0, '', '', ['PIV', 'PORT', 'PICC'], '', 0, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');

   constructor() {}


  suppliesList: Supply[] = [
    this.freedomPump,
    this.CurlinPump,
    this.PumpManual,
    this.Battery,
    this.Curlin90,
    this.IVPole, 
    this.IVClamp,
    this.IVHolster,
    this.PivCath24,
    this.PivCath24win, 
    this.PivCath22,
    this.Huber22G,
    this.Huber22G1,
    this.ClaveConnector,
    this.ClaveExt,
    this.GravTubing,
    this.Diaflo,
    this.Bag1L,
    this.Bag250ml,
    this.Bag500ml,
    this.IvTransferSet,
    this.DressingKit,
    this.IvStartKit,
    this.SterileDrapes,
    this.Underpads,
    this.Gauze,
    this.Bandages,
    this.Gloves,
    this.Wrap,
    this.PaperTape,
    this.AlcoholSwabs,
    this.Sharps2G,
    this.Sharps3G

  ]

}

import { Injectable } from '@angular/core';
import { Supply } from '../common/supply';

@Injectable({
  providedIn: 'root',
})
export class SuppliesService {

  freedomPump = new Supply(34308, '00000-0343-08', 'FREEDOM 60 PUMP', ['SQ'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE & PUMP MAINTNANCE ONLY','NPE', "pending", 'nrequire');
  CurlinPump = new Supply(36299,'00000-0362-99', 'CURLIN PUMP', ['PICC', 'PORT', 'PIV', 'HYQVIA'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE & PUMP MAINTNANCE ONLY', 'NPE', "pending", 'nrequire');
  PumpManual = new Supply(40427, '00000-0404-27', 'PUMP MANUAL', ['PICC', 'SQ', 'PORT', 'PIV', 'HYQVIA'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE & PUMP MAINTENANCE', 'NPE', "pending", 'nrequire');
  Battery = new Supply(47729, '', 'BATTERY C', ['PICC', 'PORT', 'PIV', 'HYQVIA'], 'CVS', 2, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Curlin90 = new Supply(37140, '00000-0371-40', 'CURLING SET 90"', ['PICC', 'PORT', 'PIV', 'HYQVIA'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  IVPole = new Supply(36293, '00000-0411-57', 'IV POLE', ['PICC', 'PORT', 'PIV', 'HYQVIA'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE ONLY', 'NPE', "pending", 'nrequire');
  IVClamp = new Supply(36331, '00000-0363-31', 'IV POLE CLAMP', ['PICC', 'PORT', 'PIV', 'HYQVIA'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE ONLY', 'NPE', "pending", 'nrequire');
  IVHolster = new Supply(36332, '00000-0363-32', 'PUMP HOLSTER', ['PICC', 'PORT', 'PIV', 'HYQVIA'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'NPE ONLY', 'NPE', "pending", 'nrequire');
  PivCath24 = new Supply(31237, '08290-3814-12', 'PIV Catheter, 24G x 3/4"', ['PIV'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 22G AND 24G, THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL', "pending", 'require');
  PivCath24win = new Supply(40204, '00000-0402-04', 'PIV Catheter, 24G x 3/4" winged', [ 'PIV'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 22G AND 24G, THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL', "pending", 'require');
  PivCath22 = new Supply(39333, '00000-0393-33', 'PIV Catheter, 22G x 1" Introcan - Braun', ['PIV'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 22G AND 24G, THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL', "pending", 'require');
  Huber22G = new Supply(39819, '00000-0398-19', 'PORT Huber set, 22G x 3/4"', ['PORT'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 3/4" HUBER AND 1" HUBER FOR NPE THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL', "pending", 'require');
  Huber22G1 = new Supply(35386, '00000-0353-86', 'PORT Huber set, 22G x 1"', ['PORT'], 'MD', 5, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'SEND BOTH 3/4" HUBER AND 1" HUBER FOR NPE THEN ONLY ONE OR THE OTHER PER PATIENT/NURSE PREFERENCE', 'ALL', "pending", 'require');
  ClaveConnector = new Supply(28870, '00000-0288-70', 'Clave connector (needleless)', ['PORT'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  ClaveExt = new Supply(43187, '00000-0431-87', 'Clave ext set 7"', ['PIV'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  GravTubing = new Supply(32666, '00000-0326-66', 'IV Set sol w/ dou-vent', ['PIV', 'PORT', 'PICC'], 'MD', 11, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'IF GRAVITY/HYDRATION, THEN GIVE 1 PER INFUSION + 1 EXTRA (AND INCLUDE REFILLS)', 'ALL', "pending", 'nrequire');
  Diaflo = new Supply(35289, '85412-0024-27', 'IV Set extension (Dial-a-Flo extension)', ['PIV', 'PORT', 'PICC'], 'MD', 11, 0, 'USE AS DIRECTED TO ADMINISTER IG', 'IF GRAVITY/HYDRATION, THEN GIVE 1 PER INFUSION + 1 EXTRA (AND INCLUDE REFILLS)', 'ALL', "pending", 'nrequire');
  Bag1L = new Supply(38967, '00000-0389-67', 'CORAM GRAVITY BAG (3 LEGGED BAG), 1000ML', ['PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 10, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  Bag500ml = new Supply(39779, '00000-0397-79', 'CORAM GRAVITY BAG (2 PORT, 500ML)', ['PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 9, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  Bag250ml = new Supply(40355, '00000-0389-67', 'CORAM GRAVITY BAG (2 PORT, 250ML)', ['PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 8, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  IvTransferSet = new Supply(34524, '00000-0403-55', 'IV TRANSFER SET, 23" W/17G NEEDLE', ['PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 30, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  VentedSpike = new Supply(37079, '00000-0370-79', 'VENTED SPIKE ADAPTER', ['PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 15, 0, 'USE AS DIRECTED TO ADMINISTER IG', '<span></span>NO REFILLS - ONLY GIVE IN PLACE OF GRAVITY BAG', 'ALL', "pending", 'nrequire');
  DressingKit = new Supply(48513, '00000-0417-92', 'PICC/PORT DRESSING CHANGE KIT', ['PORT', 'PICC', ], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  IvStartKit = new Supply(37247, '00000-0372-47', 'IV START KIT', ['PIV'], 'MD', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'require');
  SterileDrapes = new Supply(38490, '00000-0384-90', 'STERILE DRAPES', ['PORT', 'PICC'], 'CVS', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'nrequire');
  Underpads = new Supply(33860, '00000-0338-60', 'UNDERPADS', ['SQ', 'PIV', 'HYQVIA'], 'CVS', 3, 0, 'USE AS DIRECTED TO ADMINISTER IG', '# OF INFUSIONS + 1 EXTRA', 'ALL', "pending", 'nrequire');
  Gauze = new Supply(39250, '00000-0392-50', 'GAUZE 2X2', ['SQ', 'PORT', 'PIV', 'PICC', 'HYQVIA'], 'CVS', 6, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Bandages = new Supply(40288, '00000-0402-88', 'BANDAGES, WATERPROOF', ['SQ','PIV', 'PORT', 'PICC', 'HYQVIA'], 'CVS', 7, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Gloves = new Supply(45670, '00000-0437-17', 'GLOVES, MEDIUM (BOX)', ['SQ', 'PIV', 'PORT', 'PICC', 'HYQVIA'], 'CVS', 17, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Wrap = new Supply(40238, '00000-0392-57', 'WRAP, 2" COBAN', ['PIV',], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  PaperTape = new Supply(23511, '08333-1530-01', 'TAPE, PAPER 1" MICROPORE', ['PIV', 'PORT', 'PICC', 'SQ', 'HYQVIA'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  AlcoholSwabs = new Supply(34094, '00000-0340-94', 'ALCOHOL PADS', ['SQ','PIV', 'PORT', 'PICC', 'HYQVIA'], 'CVS', 18, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Sharps2G = new Supply(39170, '00000-0391-70', 'SHARPS CONTAINER, 2 GALLON', ['PIV', 'PORT', 'PICC', 'SQ', 'HYQVIA'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Sharps3G = new Supply(35205, '63418-8001-03', 'SHARPS CONTAINER, 3 GALLON', ['PIV', 'PORT', 'PICC', 'SQ', 'HYQVIA'], 'CVS', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Syring50 = new Supply(24288, '08290-3096-53', 'SYRINGE, 50-60ML', [ 'SQ', 'PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 19, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Needle18G = new Supply(52210, '00000-0522-10', 'NEEDLE 18GX1" HYPO', ['PIV', 'PORT', 'PICC', 'HYQVIA'], 'MD', 20, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Syringe10 = new Supply(43637, '08290-3029-95', 'SYRINGE, 10ML', ['PIV', 'PORT', 'PICC'], 'MD', 22, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Syringe3 = new Supply(34399, '08290-3096-57', 'SYRINGE, 3ML', ['PIV', 'PORT', 'PICC'], 'MD', 21, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  Needle25 = new Supply(12157, '08290-3051-25', 'NEEDLE, 25G X 1"', ['PIV', 'PORT', 'PICC'], 'MD', 23, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  LabInBox = new Supply(36217, '00000-0362-17', 'LAB IN A BOX', ['PIV', 'PORT', 'PICC'], 'MD', 1, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'nrequire');
  NsFlush = new Supply(32795, '64253-0111-35', 'PIV NS FLUSH 5ML', ['PIV'], 'MD', 13, 0, 'USE AS NEEDED WITH INFUSION TO MAINTAIN IV ACCESS AND PATENCY', '', 'ALL', "pending", 'require');
  HaparinPIV = new Supply(38526 , '64253-0222-35', 'PIV HEPARIN 10 U/ML 5ML', ['PIV'], 'MD', 12, 0, 'USE AS NEEDED WITH INFUSION TO MAINTAIN IV ACCESS AND PATENCY', '', 'ALL', "pending", 'require');
  PosiFlush = new Supply(35290, '08290-3065-53', 'STERILEFIELD PREFILLED SYRINGE POSIFLUSH', ['PORT'], 'MD', 14, 0, 'USE AS NEEDED WITH INFUSION TO MAINTAIN IV ACCESS AND PATENCY', '', 'ALL', "pending", 'require');
  HeparinPORT = new Supply(33503, '64253-0333-35', 'HEPARIN 100U/ML (5ML)', ['PORT'], 'MD', 24, 0, 'USE AS NEEDED WITH INFUSION TO MAINTAIN IV ACCESS AND PATENCY', '', 'ALL', "pending", 'require');
  NsFlushPICC = new Supply(33633, '64253-0111-30', 'NS FLUSH 10ML', ['PICC'], 'MD', 25, 0, 'USE AS NEEDED WITH INFUSION TO MAINTAIN IV ACCESS AND PATENCY', '', 'ALL', "pending", 'require');
  HeparinPICC = new Supply(33503, '64253-0333-35', 'HEPARIN 100U/ML (5ML)', ['PICC'], 'MD', 26, 0, 'USE AS NEEDED WITH INFUSION TO MAINTAIN IV ACCESS AND PATENCY', '', 'ALL', "pending", 'require');
  MiniSpikes = new Supply(32623, '00000-0326-23', 'MINISPIKES OR 18G NEEDLE (16611) FOR VIALS', ['SQ'], 'MD', 15, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  ConnectorFluid = new Supply(33520, '00000-0355-20', 'B BRAUN FLUID DISPENSING CONNECTOR', ['SQ'], 'MD', 31, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  HyqSyringe10 = new Supply(43637, '08290-3029-95', 'SYRINGE, 10ML', ['HYQVIA'], 'MD', 27, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  HyqSyringe20 = new Supply(38642, '08290-3028-30', 'SYRINGE, 20ML', ['HYQVIA'], 'MD', 28, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  HyqSyringe30 = new Supply(37100, '08290-3028-32', 'SYRINGE, 30ML', ['HYQVIA'], 'MD', 29, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL', "pending", 'require');
  
  
  
  // SUPPLY = new Supply(0, '', '', ['PIV', 'PORT', 'PICC'], '', 0, 0, 'USE AS DIRECTED TO ADMINISTER IG', '', 'ALL');

   constructor() {}


  suppliesList: Supply[] = [
    this.NsFlush,
    this.HaparinPIV,
    this.PosiFlush,
    this.HeparinPORT,
    this.NsFlushPICC,
    this.HeparinPICC,
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
    this.VentedSpike,
    this.SterileDrapes,
    this.Underpads,
    this.Gauze,
    this.Bandages,
    this.Gloves,
    this.Wrap,
    this.PaperTape,
    this.AlcoholSwabs,
    this.Sharps2G,
    this.Sharps3G,
    this.Syring50,
    this.Needle18G,
    this.Syringe10,
    this.Syringe3,
    this.Needle25,
    this.LabInBox,
    this.MiniSpikes,
    this.ConnectorFluid,
    this.HyqSyringe10,
    this.HyqSyringe20,
    this.HyqSyringe30,
  ]

}

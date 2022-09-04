import { SmartPoint } from './smart-point.interface';

export interface SmartCard {
  id: number;
  imagePath: string;
  smartPoints: SmartPoint[];
}

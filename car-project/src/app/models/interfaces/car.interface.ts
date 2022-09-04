import { Article } from './article.interface';
import { IColor } from './color.interface';
import { IDesign } from './design.interface';
import { IMaker } from './maker.interface';
import { IMotor } from './motor.interface';
import { SmartCard } from './smart-card.interface';
import { ITransmission } from './transmission.interface';

export interface ICar {
  id?: string;
  maker: IMaker;
  model: string;
  design: IDesign;
  title: string;
  description: string;
  avaiableColors: IColor[];
  madeIn: number;
  cardImage: string;
  motor: IMotor;
  transmission: ITransmission;
  seats: number;
  images: string[];
  price: number;
  mainImage: string;
  articles: Article[];
  smartCard: SmartCard;
}

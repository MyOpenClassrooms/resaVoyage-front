import { Session } from "./session";

export class Aventure {
  id: number;
  title: string;
  description : string;
  location: string;
  price: number;
  image: string;
  sessions: Session[];
  category_id: number;
}

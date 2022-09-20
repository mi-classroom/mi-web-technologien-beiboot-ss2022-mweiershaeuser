import Relation from './relation.model';

export default interface Artwork {
  inventoryNumber: string;
  title: string;
  date: number;
  category: string;
  artist: string;
  owner: string;
  preview: string;
  sortingId: string;
  width: number;
  height: number;
  relations: Relation[];
}

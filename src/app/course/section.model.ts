import { Lecture } from './lecture.model';
export interface Section {
  createdAt: string;
  updatedAt: string;
  title: string;
  creator: string;
  zipFilePath: string;
  id: number;
  sequence: number;
  lectures: Lecture[];
}

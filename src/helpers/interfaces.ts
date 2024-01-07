import { FILE_TYPE } from '@/helpers/enums';

export interface IParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface IMeta {
  totalPages: number;
  totalItems: number;
  current: number;
  size: number;
}

export interface IFile {
  id: string;
  name: string;
  url: string;
  size: string;
  type: FILE_TYPE;
  extension: string;
  uuid: string;
}

export interface IMinFile {
  id: string;
  name: string;
  url: string;
  uuid: string;
}

export interface IMultiName {
  oz: string;
  uz: string;
  ar: string;
  ru: string;
  en: string;
}

export interface IIdAndMultiName {
  id: string;
  name: IMultiName;
}

export interface IIdAndName {
  id: string;
  name: string;
}

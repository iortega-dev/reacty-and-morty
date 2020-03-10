import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import { Character } from '~Types/Character';
import { Episode } from '~Types/Episode';
import { Location } from '~Types/Location';

type Entity = 'character' | 'location' | 'episode';

type ResponseTypeAll<T extends Entity> = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ResultTypeMap<T>[];
};

type ResultTypeMap<T extends Entity> = T extends 'character'
  ? Character
  : T extends 'location'
  ? Location
  : Episode;

/** API Class  */
export class API<T extends Entity = 'character'> {
  baseURL = 'https://rickandmortyapi.com/api';
  entityType: Entity;
  instance: AxiosInstance;

  /**
   * Create API instance for given entity
   * @param {Entity} entityType Entity Type - [default] character
   */
  constructor(entityType: T) {
    this.entityType = entityType;
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: 2000,
    });
  }

  /**
   * Returns all items from entity
   * @param filter [optional] - Filter configuration
   * @returns response - request response
   */

  getAll(filter = {}): Promise<ResponseTypeAll<T>> {
    return this.instance
      .get(`${this.baseURL}/${this.entityType}`, { params: { ...filter } })
      .then((response: AxiosResponse<ResponseTypeAll<T>>) => {
        const { data } = response;
        return data;
      })
      .catch((error: AxiosError) => {
        console.log(`API - getAll [Error]: ${error}`);
        throw error;
      });
  }

  /**
   * Returns single item from entity by id
   * @param id - Entity id
   * @returns response - request response
   */
  getSingle(id: number | string = 1): Promise<ResultTypeMap<T>> {
    return this.instance
      .get(`${this.baseURL}/${this.entityType}/${id}`)
      .then((response: AxiosResponse<ResultTypeMap<T>>) => {
        const { data } = response;
        return data;
      })
      .catch((error: AxiosError) => {
        console.log(`API - getSingle [Error]: ${error}`);
        throw error;
      });
  }

  /**
   * Returns multiple items from entity given id array
   * @param ids - Entity ids
   * @returns response - request response
   */
  getMultiple(ids: Array<number | string> = [1]): Promise<ResultTypeMap<T>[]> {
    return this.instance
      .get(`${this.baseURL}/${this.entityType}/${ids}`)
      .then((response: AxiosResponse<ResultTypeMap<T>[]>) => {
        const { data } = response;
        return data;
      })
      .catch((error: AxiosError) => {
        console.log(`API - getMultiple [Error]: ${error}`);
        throw error;
      });
  }
}

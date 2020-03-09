import axios, { AxiosInstance, AxiosResponse } from 'axios';

type Entity = 'character' | 'location' | 'episode';

/** API Class  */
export class API {
  baseURL = 'https://rickandmortyapi.com/api/';
  entityType: Entity;
  instance: AxiosInstance;

  /**
   * Create API instance for given entity
   * @param {Entity} entityType Entity Type - [default] character
   */
  constructor(entityType: Entity = 'character') {
    this.entityType = entityType;
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: 2000,
    });
  }

  /**
   * Returns all items from entity
   * @param {} filter [optional] - Filter configuration
   * @returns {Promise<AxiosResponse>} response - request response
   */
  getAll(filter: {} = {}): Promise<AxiosResponse> {
    return this.instance.get(`${this.baseURL}/${this.entityType}`, filter);
  }

  /**
   * Returns single item from entity by id
   * @param {number|string} id - Entity id
   * @returns {Promise<AxiosResponse>} response - request response
   */
  getSingle(id: number | string): Promise<AxiosResponse> {
    return this.instance.get(`${this.baseURL}/${this.entityType}/${id}`);
  }

  /**
   * Returns multiple items from entity given id array
   * @param {Array<number|string>} ids - Entity ids
   * @returns {Promise<AxiosResponse>} response - request response
   */
  getMultiple(ids: Array<number | string>): Promise<AxiosResponse> {
    return this.instance.get(`${this.baseURL}/${this.entityType}/${ids}`);
  }
}

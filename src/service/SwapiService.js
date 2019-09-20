/* eslint-disable class-methods-use-this */
/**
 * File: SwapiService.js
 * Type: DatabaseService
 * Author: Jaison Schmidt
 * Description: All API methods available to this application.
 * Data: 17/09/2019
 */
export default class SwapiService {
  /**
   * Consume a list of people, can be used for generic porpuses.
   * @param {string} page URL of API.
   * @return {array} A list of people.
   */
  async getPeople(page) {
    const response = await fetch(`${page}`);
    const json = await response.json();
    return json;
  }

  /**
   * Get one image based on name.
   * @param {string} name Name of people.
   * @return {array} A list of images - at this time return one image.
   */
  async getPersonImage(name) {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?imgSize=xlarge&num=1&searchType=image&key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=Star%20Wars%20${name}`
    );
    const json = await response.json();
    return json;
  }

  /**
   * Consume details about a specific starship.
   * @param {string} page URL of API.
   * @return {object} An object representing a starship.
   */
  async getStarshipDetail(page) {
    const response = await fetch(`${page}`);
    const json = await response.json();
    return json;
  }
}

import axios from 'axios';
import { GESTIKULATOR_API_BASE_URL, LEVELS_ENDPOINT } from './constants';

export const getLevels = async () => {
  try {
    const response = await axios.get(`${GESTIKULATOR_API_BASE_URL}/${LEVELS_ENDPOINT}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch levels.');
  }
};



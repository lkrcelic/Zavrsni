import axios from 'axios';
import { GESTIKULATOR_API_BASE_URL, SUB_LEVELS_ENDPOINT } from './constants';

export const getSubLevelsByLevelId = async (id) => {
  try {
    const response = await axios.get(`${GESTIKULATOR_API_BASE_URL}/${SUB_LEVELS_ENDPOINT}/level/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch levels.');
  }
};



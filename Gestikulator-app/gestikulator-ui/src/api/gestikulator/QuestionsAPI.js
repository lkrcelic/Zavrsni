import axios from 'axios';
import { GESTIKULATOR_API_BASE_URL, QUESTIONS_ENDPOINT } from './constants';

export const getQuestionsBySubLevelId = async (id) => {
  try {
    const response = await axios.get(`${GESTIKULATOR_API_BASE_URL}/${QUESTIONS_ENDPOINT}/sub_level/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch questions.');
  }
};

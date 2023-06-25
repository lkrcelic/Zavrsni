import axios from 'axios';
import {PREDICT_ENDPOINT, PYTHON_API_BASE_URL} from "./constants";

export const getResult = async (gestureName, results) => {
  try {
    const gestureNameSmall = gestureName.toLowerCase();

    const response = await axios.post(`${PYTHON_API_BASE_URL}/${PREDICT_ENDPOINT}`, {
      frames: results,
      gesture: gestureNameSmall
    }, {
      headers: {'Content-Type': 'application/json'}
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch result.');
  }
};

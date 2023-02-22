import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const TrainingContext = createContext();

const TrainingProvider = ({ children }) => {
  const [training, setTraining] = useState([]);

  useEffect(() => {
    getTrainingData();
  }, []);

  const getTrainingData = async () => {
    const getTraining = await axios.get(
      "https://traineeapp.azurewebsites.net/gettrainings"
    );
    const data = getTraining.data;
    setTraining(data);
  };


  const value = { training, getTrainingData };

  return (
    <TrainingContext.Provider value={value}>
      {children}
    </TrainingContext.Provider>
  );
};
export default TrainingProvider;

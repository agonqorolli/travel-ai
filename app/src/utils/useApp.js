import React, { createContext, useContext, useState } from "react";

const defaultAppState = {
  step: 1,
  cityInput: "",
  budgetInput: "",
  daysInput: "",
  activitiesInput: [],
  travelPlan: "",
};

const AppContext = createContext(defaultAppState);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const [cityInput, setCityInput] = useState("");
  const [budgetInput, setBudgetInput] = useState("");
  const [daysInput, setDaysInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState([]);

  const [travelPlan, setTravelPlan] = useState("");

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        cityInput,
        setCityInput,
        budgetInput,
        setBudgetInput,
        daysInput,
        setDaysInput,
        activitiesInput,
        setActivitiesInput,
        travelPlan,
        setTravelPlan,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

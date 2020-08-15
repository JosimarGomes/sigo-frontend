import React, {
    useReducer, useContext,
} from 'react';
  
export const types = {
    SET_CONSULTING_VALUES: 'SET_DOCUMENTS',
    SET_OBJECTIVE_VALUES: 'SET_DOCUMENTS_FILES',
    CLEAR_CONSULTING_VALUES: 'CLEAR_CONSULTING_VALUES',
    SET_REGULATION_VALUES: 'SET_REGULATION_VALUES',
    SET_CONSULTANT_VALUES: 'SET_CONSULTANT_VALUES'
};

const initialState = {
    objetivos: [],
    normas: [],
    consultores: []
};


const setConsultingValues = (state, action) => {
    return {...state,...action.payload};
}

const setObjectivesValues = (state, action) => {
    let objetivos = [];
    
    if (state.objetivos.find(obj => action.payload.id && obj.id === action.payload.id)) {
        objetivos = state.objetivos.map(obj => {
        
            if (obj.id === action.payload.id) {
                return {...obj, ...action.payload };
            }
            return obj;
        });
    } else {
        objetivos = state.objetivos;
        objetivos.push(action.payload)
    }
    

    return { ...state, ...{ objetivos } }
}

const setRegulationValues = (state, action) => {
    let normas = [];
    const newRegulation = action.payload;

    if (!state.normas.find(regulation => regulation === newRegulation)) {
        normas = state.normas;
        normas.push(newRegulation);

        return {...state, ...{ normas }};
    }

    return state;

}

const setConsultantValues = (state, action) => {
    let consultores = [];
    const newConsultant = action.payload;
    if (!state.consultores.find(consultant => consultant.id === newConsultant.id)) {
        consultores = state.consultores;
        consultores.push(newConsultant);
        
        return {...state, ...{ consultores } };
    }

    return state;
}
  
const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_CONSULTING_VALUES:
            return setConsultingValues(state, action);
        case types.CLEAR_CONSULTING_VALUES:
            return initialState;
        case types.SET_OBJECTIVE_VALUES:
            return setObjectivesValues(state, action);        
        case types.SET_REGULATION_VALUES:
            return setRegulationValues(state, action);
        case types.SET_CONSULTANT_VALUES:
            return setConsultantValues(state, action);
            
      default: return state;
    }
};
  
const ConsultingContext = React.createContext();
  
const ConsultingProvider = ({ children }) => {
    const contextValue = useReducer(reducer, initialState);
  
    return (
      <ConsultingContext.Provider value={contextValue}>
        {children}
      </ConsultingContext.Provider>
    );
};
  
const useConsultingContext = () => useContext(ConsultingContext);
  
export {
    ConsultingProvider,
    useConsultingContext,
};
  
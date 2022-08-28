// Начальное состояние для управления модалками
const initialState = {
  name: ''
}

// Обработчик действий в redux
export default function(state = initialState, action){
  switch (action.type) {
    case "modal/open":
      return { ...state, name: action.payload.name};
    case "modal/close":
      return { ...state, name: null };
    case "modal/comment":
      return {...state, name : comment};
    default:
      // Нет изменений
      return state;
  }
}
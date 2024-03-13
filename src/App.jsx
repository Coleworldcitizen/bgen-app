import DateInput from './components/DateInput';
import BirthdayCard from './components/BirthdayCard';
import Modal from './components/Modal';

import { useRef, useReducer } from 'react';

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TRACKING_INPUT': {
      const { name, value } = payload.target;
      return {
        ...state,
        [name]: value
      };
    }
    case 'SUBMITTING': {
      payload.event.preventDefault();
      if (
        state.dob.trim() === '' ||
        state.name.trim() === '' ||
        state.occupation.trim() === '' ||
        state.surname.trim() === ''
      ) {
        payload.modal.current.open();
        return {
          ...state,
          showModal: true
        };
      }
      return {
        ...state,
        click: true
      };
    }
    case 'CHANGE_FILE': {
      const file = payload.target.files[0];
      const reader = new FileReader();
    
      reader.onload = (e) => {
        dispatch({
          type: 'FILE_RELOAD',
          payload: {
            imageSrc: e.target.result
          }
        });
      };
    
      reader.readAsDataURL(file);
    
    }
    
    case 'FILE_RELOAD': {
      return {
        ...state,
        imageSrc: payload.imageSrc
      };
    }

    default:
      return state;
  }

}

export default function App() {
  const modal = useRef(null);
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    surname: '',
    dob: '',
    occupation: '',
    imageUpload: '',
    summary: '',
    click: false,
    file: null,
    imageSrc: null,
    showModal: false
  });

  function handleChange(event) {
    dispatch({
      type: 'TRACKING_INPUT',
      payload: event
    });
  }

  function handleSubmit(event) {
    dispatch({
      type: 'SUBMITTING',
      payload: {
        event,
        modal
      }
    });
  }

  function handleChangeFile(event) {
    dispatch({
      type: 'CHANGE_FILE',
      payload: event
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className='font-kode text-center font-bold text-stone-700'>Invalid input</h2>
        <h2 className='font-kode mt-4 font-bold text-stone-700'>Please enter valid input...</h2>
      </Modal>
      <h1 className='font-barriecito uppercase tracking-wide text-center mt-4 text-3xl'>Card Generator</h1>
      <DateInput onChange={handleChange} onSubmit={handleSubmit} onFile={handleChangeFile} />
      {state.click && <BirthdayCard state={state} file={state.file ? state.file.name : null} image={state.imageSrc} />}
    </>
  );
}

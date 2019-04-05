import React, {useCallback, useEffect, useState} from 'react';
import {useMappedState, useDispatch} from 'redux-react-hook';

import './App.css';
import {START_BOOT_SEQUENCE} from './actions';

const App = () => {

  const mapSate = useCallback(
      state => ({
        hasBootSequenceStarted: state.appBoot.hasBootSequenceStarted,
        isAdditionalDataLoadingCompleted: state.appBoot.isAdditionalDataLoadingCompleted
      }),
      []
  );

  const {
    hasBootSequenceStarted,
    isAdditionalDataLoadingCompleted
  } = useMappedState(mapSate);

  const dispatch = useDispatch();
  const startBootSequence = useCallback(
      () => {
        dispatch({ type: START_BOOT_SEQUENCE })
      },
      []
  );

  const [error, setError] = useState(false);

  useEffect(
      () => {
        try{
          if(!hasBootSequenceStarted){
            startBootSequence();
          }
        } catch (e) {
          setError(true);
        }
      },
      []
  );


  const Body = () => {
    const Error = <p>App booting sequence failed.</p>;
    const Loading = <p>App booting up...</p>;
    const Loaded = <p>App booted!</p>;

    if(error) {
      return Error;
    } else if(!isAdditionalDataLoadingCompleted) {
      return Loading;
    }
    return Loaded;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Body/>
      </header>
    </div>
  );

};

export default App;

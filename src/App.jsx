
import { useImmer } from 'use-immer';

const INITIAL_STATE = {
  user: {
    id: 2,
    firstname: 'mario',
    lastname: 'rossi',
    workspaces: [
      {
        id: 1, 
        name: 'main', 
        layout: 'full',
        data: {
          count: 0
        }
      }
    ]
  }
}

export default function App() {

  const [state, setState] = useImmer(INITIAL_STATE);

  function inc() {
    const workspaceIndex = state.user.workspaces.findIndex(w => w.name == 'main');
    
    setState(draft => {
      draft.user.workspaces[workspaceIndex].data.count++;
    });
  }


  function dec() {
    const workspaceIndex = state.user.workspaces.findIndex(w => w.name == 'main');
    
    setState(draft => {
      draft.user.workspaces[workspaceIndex].data.count--;
    });
  }


  function reset() {
    const workspaceIndex = state.user.workspaces.findIndex(w => w.name == 'main');
    
    setState(draft => {
      draft.user.workspaces[workspaceIndex].data.count = 0;
    });
  }

  return (
    <>
      <h1>{state.user.workspaces[0].data.count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}


import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitle from './components/DocTitle';
import DocTitleTwo from './components/DocTitleTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent />
      <Counter /> */}
      {/* <FocusInput />
       */}
       {/* <ClassTimer />
       <HookTimer /> */}

       <DocTitle />

       <DocTitleTwo />
       <UserForm />
    </div>
  );
}

export default App;

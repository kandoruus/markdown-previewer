import React from 'react';
import logo from '../assests/logo.svg';
import '../App.css';

export interface IToolbarProps {
  id: string;
  text: string;
}

export const Toolbar: React.FC<IToolbarProps> = (props) => {
  return (
    <div className='toolbar' id={props.id + "toolbar"}>
      <div className='toolbar-logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='toolbar-text-wrapper'>
        <p className='toolbarText'>{props.text}</p>
      </div>
    </div>
  );
}
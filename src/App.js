import React, { Component } from 'react';
import './App.css';

import DropDown from './component/DropDown';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showDropDown : false,
      arr:['MY PROFILE','MESSAGES','NOTIFICATIONS','EVENT','SETTINGS','LOGOUT'],
      title:'GET Free Money',
      chooseBackGround:'#323232',
      chooseFont:'#fff',
      chooseFontSize:'12px'
    }

  }

  toggleDropDown=(e)=>{
      e.preventDefault();

      this.setState({ showDropDown: true }, () => {
        document.addEventListener('click', this.closeMenu);
        console.log(this.state.showDropDown);
      });
  }
  
  closeMenu=(e)=> {
      this.setState({ showDropDown: false }, () => {
        document.removeEventListener('click', this.closeMenu);
        console.log(this.state.showDropDown);        
      });  
  }

  render() {

    const { showDropDown,
            title,
            chooseBackGround
            ,arr
            ,chooseFont,
            chooseFontSize } = this.state;  

    return (
      <div>
        <button onClick={this.toggleDropDown}>{title}</button>
        { showDropDown ? 
            <DropDown 
              list={arr}
              BKColor={chooseBackGround}
              MyFontColor={chooseFont}
              MyFontSize ={chooseFontSize}
            /> 
        : ''}
      </div>
    );
  }
}

export default App;


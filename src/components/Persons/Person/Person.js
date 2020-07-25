import React, { Component } from 'react';

import classes from './Person.module.css';

class Person extends Component{
  /*shouldComponentUpdate(nextProps, nextState){
    console.log('[Person.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
      console.log('[Person.js] shouldComponentUpdate - Yes !!!');
      return true;
    }else{
      console.log('[Person.js] shouldComponentUpdate - No !!!');
      return false;
    }
  }*/

  render(){
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
};

export default Person;

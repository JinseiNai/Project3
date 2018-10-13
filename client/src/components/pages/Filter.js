import React, { Component } from 'react'
// import styled, { css } from 'react-emotion'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NestedList from '../NestedList/NestedList';
// import NavButton from '../NavButtons/index';

class Filter extends Component {
    constructor() {
      super()
      this.state = {

      }  
    }
    render() {
        return (
            <div>
                <Header />
                    
                <Footer />
            </div>
        )
    }
}

export default Filter
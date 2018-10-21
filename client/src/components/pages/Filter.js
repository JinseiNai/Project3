import React, { Component } from 'react'
// import styled, { css } from 'react-emotion'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FilterForm from './FilterForm';
// import NestedList from '../NestedList/NestedList';
// import NavButton from '../NavButtons/index';
import { hideWheel } from '../HideWheel/HideWheel'

class Filter extends Component {
    componentDidMount() {
        hideWheel()
    }

    render() {
        return (
            <div>
                <Header />

                   <FilterForm />
                    
                <Footer />
            </div>
        )
    }
}

export default Filter
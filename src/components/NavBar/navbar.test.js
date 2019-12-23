import React, { Component } from 'react';
import {shallow} from 'enzyme';
import NavBar from './NavBar' ;
import {findByTestAtrr} from '../../Utils'
const setUp=(props={})=>{
    const component=shallow(<NavBar {...props}/>);
    return component;
}



describe("your test suite", () => {
    let component ;
    beforeEach(()=>{
        component=setUp();
    })

    it("it should render",()=>{
        
        const wrapper=findByTestAtrr(component,'nav');
        expect(wrapper.length).toBe(1);
    })

    it("it should render items",()=>{
      
        const items=component.find('.nav-bar__item');
        expect(items.length).toBe(3);
    })
  });

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import ContactInfo from './ContactInfo'
import {checkProps} from '../../../Utils'
const setUp=(props={})=>{
    const component=shallow(<ContactInfo {...props}/>);
    return component
}

describe('ContactInfro component',()=>{

    describe('Checking propTypes',()=>{
        it('Should not rhrow warning',()=>{
            const expectedProps={
                header:'Test Header',
                desc:'Test desc',
                tempArr:[{
                    name:'Test Name',
                    email:'test@gmail.com',
                    age:22,
                    onlineStatus:false

                }]
            };
            const propsErr=checkProps(ContactInfo,expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });
    describe('Have props',()=>{
        
    });
    describe('Have No props',()=>{
        
    });



})
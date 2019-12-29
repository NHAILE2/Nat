import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import {findByTestAtrr,checkProps} from '../../Utils'
import SharedButton from './index'

describe('Test SharedButton component',()=>{
    describe('Checking propTyes',()=>{

    })
    it('should not throw warning',()=>{
        const expectedProps={
            buttonText:'Example Button',
            emitEvent:()=>{

            }
        };
        const propErr=checkProps(SharedButton,expectedProps);
        expect(propErr).toBeUndefined();
        
    })
});

describe('Renders',()=>{
    let wrapper;
    beforeEach(()=>{
        const props={
            buttonText:'Example Button',
            emitEvent:()=>{

            }
        }

         wrapper=shallow(<SharedButton {...props}/>)
    })

    it('Should render a button',()=>{
        const button=findByTestAtrr(wrapper,'buttonComponent');
        expect(button.length).toBe(1)
    })
})

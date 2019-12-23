
import React from 'react'
import {shallow} from 'enzyme';
import TableRow from './TableRow' ;
 import {findByTestAtrr} from '../../Utils'

 const setUp=(props={})=>{
     const component=shallow(<TableRow {...props}/>);
     return component;
 }

 describe("TableRow component",()=>{

    describe("Have props",()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                item:{},
                handleTableClick: ()=>{return null}
            }
        wrapper=setUp(props)
        })
        it("Should render handleTableClick",()=>{
            const component=findByTestAtrr(wrapper,'row');
            expect(component.length).toBe(1)
        })
        it("Should render item",()=>{
            const items=findByTestAtrr(wrapper,'row-item');
            expect(items.length).toBe(1)
        })
    })
    describe("Have No props",()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setUp()
        })
        it("Should not render",()=>{
            const component=findByTestAtrr(wrapper,'row');
            expect(component.length).toBe(0)
        })
    })


 })
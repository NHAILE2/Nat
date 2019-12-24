import CheckPropType from 'check-prop-types'
import { checkPropTypes } from 'prop-types';

export const findByTestAtrr=(component,atrr)=>{
    const wrapper=component.find(`[data-test='${atrr}']`);
    return wrapper;
}

export const checkProps=(component,expectedProps)=>{
    const propErr=checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propErr;
}
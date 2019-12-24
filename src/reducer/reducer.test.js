import {FETCH_DATA} from '../Action/type'
import PlaceholderReducer from './PlaceholderReducer'

describe("Test Placeholder Reducer",()=>{
    it("Should return default state",()=>{
        const newState=PlaceholderReducer(undefined,{"items": []});
        expect(newState).toEqual({"items": []});
    })
    it("Should return new state if receiving type",()=>{
        const items={"items": [{title:'Test1'},{title:'Test2'}]}

        const newState=PlaceholderReducer(undefined,{
            type:FETCH_DATA,
            payload:items
        });
        
        expect(newState).toEqual({items:items});
    })
})
import React from 'react'; 
import {shallow} from 'enzyme';
import {findByTestAttr} from './testUtils';

import App from '../src/App';  

/**
 * 
 * @param {*} props 
 * @param {*} state - initial state for setup
 * @returns {shallowwrapper}
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<App.wrappedComponent {...props}/>);
    if (state) wrapper.setState(state);
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

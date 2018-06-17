import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App'; 

Enzyme.configure({adapter: new EnzymeAdapter()});

/**
 * 
 * @param {*} props 
 * @param {*} state - initial state for setup
 * @returns {shallowwrapper}
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<App {...props}/>);
    if (state) wrapper.setState(state);
    return wrapper;
}

/**
 * return shallowwrapper containing node(s) with the given data-test value 
 * @param {*} wrapper - Enzyme shallow wrapper to search within
 * @param {*} val 
 * @returns {shallowwrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});


test('renders counter display', () => {
    const wrapper = shallow(<App />);
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});



describe('incremment', () => {
    test('renders increment button', () => {
        const wrapper = shallow(<App />);
        const button = findByTestAttr(wrapper, 'increment-button');
        expect(button.length).toBe(1);
    });
    test('clicking button increments counter', () => {
        const counter = 7;
        const wrapper = setup(null, { counter});
        //find button and click
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate('click');
        wrapper.update();
    
        //find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1);
    
    });
});

describe('decrement', () => {
    test('renders decrement button', () => {
        const wrapper = shallow(<App />);
        const button = findByTestAttr(wrapper, 'decrement-button');
        expect(button.length).toBe(1);
    });

    test('clicking button decrements counter when counter is greater than 0', () => {
        const counter = 7;
        const wrapper = setup(null, {counter});
        
        //find button and click
        const button = findByTestAttr(wrapper, 'decrement-button');
        button.simulate('click');  
        wrapper.update();
     
        //find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter -1); 
       
    });
});

describe('counter is 0 and decrement is click', () => {
    let wrapper;
    beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
      wrapper = setup();

      // find button and click
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
      wrapper.update();
    });
    test('error show', () => {
        // check the class of the error message
        const warning = findByTestAttr(wrapper, 'counter-warning');
        const errorHasHiddenClass = warning.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(false);
    });
    test('counter still displays 0', () => {
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(0);
    });
    test('clicking increment clears the error', () => {
        // find and click the increment button
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate('click');
  
        // check the class of the error message
        const errorDiv = findByTestAttr(wrapper, 'counter-warning');
        const errorHasHiddenClass = errorDiv.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(true);
      });
});
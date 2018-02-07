import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>); 
   expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid from submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value }});
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { target: { value }});
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount to valid value', () => {
    const value = '123.45';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value }});
    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount to invalid value', () => {
    const value = '1.23.45';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value }});
    expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop with valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('Should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
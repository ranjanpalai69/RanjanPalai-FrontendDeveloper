/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {statusOptions, typeOptions} from '../constants/siteConstants';
import SubmitForm from '../components/SubmitForm';

describe('SubmitForm component', () => {
  let fetchCapsulesDataMock;

  beforeEach(() => {
    fetchCapsulesDataMock = jest.fn();
  });

  it('renders the form with status, type and original launch fields', () => {
    const { getByLabelText } = render(<SubmitForm fetchCapsulesData={fetchCapsulesDataMock} />);
    expect(getByLabelText('Status:')).toBeInTheDocument();
    expect(getByLabelText('Type:')).toBeInTheDocument();
    expect(getByLabelText('Original Launch:')).toBeInTheDocument();
  });

  it('calls the `fetchCapsulesData` function with the correct parameters on form submit', () => {
    const { getByLabelText, getByText } = render(<SubmitForm fetchCapsulesData={fetchCapsulesDataMock} />);
    const statusSelect = getByLabelText('Status:');
    const typeSelect = getByLabelText('Type:');
    const originalLaunchInput = getByLabelText('Original Launch:');
    fireEvent.change(statusSelect, { target: { value: statusOptions[0].value } });
    fireEvent.change(typeSelect, { target: { value: typeOptions[0].value } });
    fireEvent.change(originalLaunchInput, { target: { value: '' } });
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    expect(fetchCapsulesDataMock).toHaveBeenCalledWith(statusOptions[0].value, typeOptions[0].value, '');
  });
});

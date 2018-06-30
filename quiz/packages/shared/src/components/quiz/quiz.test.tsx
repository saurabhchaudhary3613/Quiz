import * as React from 'react';

import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getTestTheme } from '../test-support/get-test-theme';
import { Quiz } from './quiz';

test('Header renders specified title', () => {
    const wrapper = mount(
        <MuiThemeProvider theme={getTestTheme()}>
            <Quiz />
        </MuiThemeProvider>
    );
    //expect(wrapper.find(Quiz).text()).toEqual('React Template');
});

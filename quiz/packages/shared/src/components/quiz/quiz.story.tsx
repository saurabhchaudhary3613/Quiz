import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../test-support/story-decorator';
import { TestRootStore } from '../../stores/test-support/test-root.store';
import { Quiz } from './quiz';
import { jsQuestions } from '../../domain/data';

storiesOf('Quiz', module)
    .addDecorator(StoryDecorator)
    .add('order list', () => {
        const rootStore = new TestRootStore();
        const { questionStore } = rootStore;
        questionStore.initialize(jsQuestions);
        return <Quiz rootStore={rootStore} />;
    });

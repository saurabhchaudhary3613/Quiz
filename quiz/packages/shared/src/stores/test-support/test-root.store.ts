import { RouterState, RouterStore } from 'mobx-state-router';
import { QuestionStore } from '../question.store';
import { MockQuestionAdapter } from './mock-question.adapter';


export class TestRootStore {
    questionStore = new QuestionStore(this);

    // Adapters for use by all stores
    adapters = {
        questionAdapter: new MockQuestionAdapter(),
    };
}

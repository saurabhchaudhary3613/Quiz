import { RouterState, RouterStore } from 'mobx-state-router';
import { QuestionStore } from 'shared';
import { HttpQuestionAdapter } from 'shared';
import { routes } from './routes';

const notFound = new RouterState('notFound');

export class RootStore {
    routerStore = new RouterStore(this, routes, notFound);

    questionStore = new QuestionStore(this);
    adapters = {
        questionAdapter: new HttpQuestionAdapter()
    };

    // ----- Lifecycle hooks -----
    // Useful for starting and stopping observers, autoruns and reactions

    init() {}

    destroy() {}
}

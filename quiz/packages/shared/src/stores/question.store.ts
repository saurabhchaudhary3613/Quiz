import { action, computed, decorate, observable, ObservableMap } from 'mobx';
import { jsQuestion, Question } from '../domain/question';

export class QuestionStore {
    rootStore: any;
    questionMap = new ObservableMap();

    constructor(rootStore: any) {
        this.rootStore = rootStore;
    }

    initialize = (jsQuestions: jsQuestion[]) => {
        jsQuestions.forEach(jsQuestion => {
            this.createQuestion(jsQuestion);
        });
    };

    // Action to create one order in the store
    createQuestion = (jsQuestion: jsQuestion) => {
        const newQuestion = new Question(
            jsQuestion.qNo,
            jsQuestion.question,
            jsQuestion.answers,
            jsQuestion.correct
        );
        this.questionMap.set(jsQuestion.qNo, newQuestion);
    };

    loadQuestion = () => {
        const { questionAdapter } = this.rootStore.adapters;
        questionAdapter.fetchQuestions().then(
            (questions: jsQuestion[]) => {
                this.initialize(questions);
            },
            () => {}
        );
    };

    getQuestion = () => {
        return Array.from(this.questionMap.values());
    };
}
decorate(QuestionStore, {
    questionMap: observable,
    initialize: action,
    createQuestion: action
});

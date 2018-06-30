import { jsQuestions } from '../../domain/data';

export class MockQuestionAdapter {
    fetchQuestions = () => {
        return new Promise((resolve: any) => {
            const message = 'Questions are Fetched';
            resolve(message);
        });
    };
}

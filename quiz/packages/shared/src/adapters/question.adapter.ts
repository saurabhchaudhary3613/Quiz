import axios from 'axios';
import { jsQuestion } from '../domain/question';

const url = process.env.REACT_APP_API;

export interface QuestionAdapter {
    createOrder(jsOrder: jsQuestion): Promise<any>;
    fetchQuestions(): Promise<jsQuestion[]>;
}

export interface OrderAdapter {
    
    fetchQuestions(): Promise<jsQuestion[]>;
}

export class HttpQuestionAdapter implements QuestionAdapter {
    createOrder(jsQuestion: jsQuestion): Promise<any> {
        return axios.post(url + '/api/questions', jsQuestion);
    }
    fetchQuestions(): Promise<jsQuestion[]> {
        return axios.get(url + '/api/questions').then((response:any) => {
            return response.data;
        });
    }
}

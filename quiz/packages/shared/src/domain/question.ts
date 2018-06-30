import { action, computed, decorate, observable } from 'mobx';
import { toJS } from 'mobx';



/**
 * An interface describing a plain JavaScript question.
 * Such an object will be used to receive/send question to the server.
 */
export interface jsQuestion {
    qNo: string;
    question: string;
    answers:any;
    correct: string;
    
}

/**
 * An order to buy or sell a security for a specific fund.
 */
export class Question {
    constructor(
        public qNo: string,
        public question: string,
        public answers: any,
        public correct: string,
       
    ) {}

    

    /**
     * Converts the MobX observable to a plain JavaScript object
     */
    serialize(): jsQuestion {
        return toJS(this);
    }

    
}

// decorate(Question, {
//     qNo: observable,
//     question: observable,
//     correct: observable,
    
// });

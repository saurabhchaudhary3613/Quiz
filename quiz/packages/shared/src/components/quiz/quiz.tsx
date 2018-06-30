import * as React from 'react';
import {
    StyledComponentProps,
    WithStyles,
    withStyles
} from 'material-ui/styles';
import { Theme } from 'material-ui/styles/createMuiTheme';
import { QuestionView } from './question-view/question-view';
import { AnswerView } from './answer-view/answer-view';
import { jsQuestions } from '../../domain/data';
import { inject, observer } from 'mobx-react';


const styles = (theme: Theme) => ({
    quizContainer: {
       marginBottom: '40px',
    },
    qholder: {
        marginTop: '40px',
        width: '38%',
        height: 'auto',
        margin: '0 auto',
        padding: '30px 0 0 0',
    }
    
});

export interface QuizProps {
    rootStore?: any;
    children?: any;
}

const decorate = withStyles(styles);

export const Quiz = inject('rootStore')(
    decorate<QuizProps>(
        observer(
            class extends React.Component<
            QuizProps &
                    WithStyles<
                    'quizContainer' | 'qholder'
                    >
            > {
                render() {
                    const { classes, children, rootStore } = this.props;
                    console.log("rootStore====",rootStore);

                    const { questionStore } = rootStore;
                    console.log("questions====",questionStore.getQuestion());
                    const questions = questionStore.getQuestion();
                    
                    return (
                        <div>
                        {questions.map((question:any)=>{
                            return (
                                <div className= {classes.quizContainer} key={question.qNo}>
                                    <div className={classes.qholder}>
                                        <QuestionView question={question}/>
                                        <AnswerView question={question}/>
                                    </div>
                                </div>
                            )
                            
                        })}
                    </div>
                    );
                }
            }
        )
    )
);


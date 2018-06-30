import {
    StyledComponentProps,
    WithStyles,
    withStyles
} from 'material-ui/styles';

import { Theme } from 'material-ui/styles/createMuiTheme';
import { observer } from 'mobx-react';
import * as React from 'react';


const styles = (theme: Theme) => ({
    answerContainer: {
        width:'87%',
        padding: '65px 0 35px 65px',
        background: '#fff',
        color: '#000',
        display: 'inline-block',
        boxShadow: '5px 5px 20px #c3c2c2',
        margin: '20px 0 0 20px',
    },
    optionContainer: {
        display: 'inline-block'
    },
    optionRow: {
       // display: 'inline-block'
    },
    optionHolder: {
        margin: '8px 0',
    }
});

export interface AnswerViewProps {
    question: any;
}
const decorate = withStyles(styles);

export const AnswerView = decorate(
    observer(
        class extends React.Component<
        AnswerViewProps &
                WithStyles<
                    | 'answerContainer'
                    | 'optionContainer'
                    | 'optionRow'
                    | 'optionHolder'
                >
        > {
            render() {
                const { classes, question } = this.props;

                console.log('answer-view', question);
                console.log('answers=====', question.answers);
                const options = question.answers;
                
                return (
                    <div className={classes.answerContainer}>
                        <div className={classes.optionContainer}>
                            
                            {options.map((value:string, index:number)=>{
                                return (
                                        <div className={classes.optionRow} key={index}>
                                                <div  className={classes.optionHolder}>
                                                <input type='radio' /><span>{value}</span>
                                            </div>
                                        </div>
                                    )
                                    
                            })}
                        </div>
                    </div>
                );
            }
        }
    )
);

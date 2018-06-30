import {
    StyledComponentProps,
    WithStyles,
    withStyles
} from 'material-ui/styles';

import { Theme } from 'material-ui/styles/createMuiTheme';
import { observer } from 'mobx-react';
import * as React from 'react';

const styles = (theme: Theme) => ({
    questionContainer: {
        position: 'absolute' as 'absolute'
    },
    qNo: {
        padding: '25px',
        color: '#fff',
        background: '#0030FF',
        display: 'inline-block',
        height: 70,
        float: 'left' as 'left',
        fontSize: '20px',
        fontWeight: 'bold' as 'bold'
    },
    qText: {
        padding: '20px 40px 20px 15px',
        color: '#000',
        background: '#FFF',
        display: 'inline-block',
        boxShadow: '5px 5px 20px #c3c2c2',
        height: '70px',
        width: '365px'
    }
});

export interface QuestionViewProps {
    question: any;
}
const decorate = withStyles(styles);

export const QuestionView = decorate(
    observer(
        class extends React.Component<
            QuestionViewProps &
                WithStyles<'questionContainer' | 'qNo' | 'qText'>
        > {
            render() {
                const { classes, question } = this.props;
                const postionStyle = {
                    position: 'absolute'
                };
                console.log('question-view===>', question);
                return (
                    <div
                        className={classes.questionContainer}
                        key={question.qNo}
                    >
                        <div className={classes.qNo}>{question.qNo}</div>
                        <div className={classes.qText}>{question.question}</div>
                    </div>
                );
            }
        }
    )
);

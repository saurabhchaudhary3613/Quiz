import * as React from 'react';
import {
    StyledComponentProps,
    WithStyles,
    withStyles
} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Theme } from 'material-ui/styles/createMuiTheme';

export interface HeaderProps {
    children?: any;
}
const styles = (theme: Theme) => ({
    toolbar: {
        background: '#0030FF',
        padding: '20px 0',
    },
    lowerText: {
        textAlign: 'center' as 'center',
        width: '100%',
        fontSize: '16px',
        color: '#FFFFFF',
        letterSpacing: '6px',
        lineHeight: '24px',
        //fontWeight: 'bold'
    },
    upperText: {
        textAlign: 'center' as 'center',
        width: '100%',
        fontSize: '16px',
        color: '#FFFFFF',
        letterSpacing: '6px',
        lineHeight: '24px',
        //fontWeight: 'bold',
    },
    text: {
        //fontWeight: 'bold'
    }
});

const decorate = withStyles(styles);

export const Header = decorate(
   
    class extends React.Component<
        HeaderProps &
            WithStyles<'toolbar' | 'upperText' | 'lowerText' | 'text'>
    > {
        render() {
            const { classes, children } = this.props;
            
            return (
                <AppBar position="static" className={classes.toolbar}>
                    <div className={classes.upperText}><span className={classes.text}>GENERAL</span></div>
                    <div className={classes.lowerText}><span className={classes.text}>KNOWLEDGE_</span></div>
                </AppBar>
            );
        }
    }
        
);


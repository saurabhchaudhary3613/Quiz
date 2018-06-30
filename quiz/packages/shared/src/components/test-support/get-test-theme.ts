import { PaletteType } from 'material-ui';
import brown from 'material-ui/colors/brown';
import orange from 'material-ui/colors/orange';
import red from 'material-ui/colors/red';
import createMuiTheme, { Theme } from 'material-ui/styles/createMuiTheme';
import { PaletteOptions } from 'material-ui/styles/createPalette';
import { TypographyOptions } from 'material-ui/styles/createTypography';
import { Overrides } from 'material-ui/styles/overrides';

const paletteType: PaletteType = 'light';

const overrides: Overrides = {
    MuiButton: {
        root: {
            // Button text should not be all upper case
            textTransform: 'none'
        }
    }
};

export function getTestTheme(): Theme {
    const palette: PaletteOptions = {
        primary: {
            main: brown[700]
        },
        secondary: {
            main: orange.A400,
            contrastText: '#ffffff'
        },
        error: {
            main: red.A400
        }
    };
    return createMuiTheme({ palette, overrides });
}

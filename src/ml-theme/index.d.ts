import { ThemeOptions } from "@material-ui/core";
import { MlPalette } from "./palette";
export interface MlThemeOptions extends ThemeOptions {
    palette: ThemeOptions["palette"] & MlPalette;
}
declare const themeOptions: MlThemeOptions;
export default themeOptions;

import React from "react";
export declare const DEFAULT_LOCALE = "US English";
export interface FooterBottomProps {
    locale?: string;
    localeOptions?: {
        label: string;
        value: string;
    }[];
    handleLocaleChange?: (newLocale: string) => any;
}
export declare const FooterBottom: React.FC<FooterBottomProps>;

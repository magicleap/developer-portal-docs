import React from "react";
declare type LinkId = "legal" | "privacy" | "email" | "cookies";
declare type LinkDescriptor = {
    id: LinkId;
    label: string;
    to?: string;
    render: (props: any) => JSX.Element;
};
export declare const linkDescriptors: LinkDescriptor[];
export interface FooterTopProps {
    /**
     * A list of link IDs to exclude from the footer, e.g. ['legal']
     */
    excludeLinks?: LinkId[];
    /**
     * If provided, overrides the default onClick behavior, which is to call window.CookieControl.open().
     * The default behavior assumes that <CookieControl /> is present in the react tree.
     * See https://gitlab.magicleap.io/cloud/cloud-analytics for more information on <CookieControl />
     */
    handleClickCookiePreferences?: () => void;
}
export declare const FooterTop: React.FC<FooterTopProps>;
export {};

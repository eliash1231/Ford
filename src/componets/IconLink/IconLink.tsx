import { FC, ReactNode } from "react";

import './IconLink.styles.scss';

interface IconLinckProps {
    label?: string;
    labelTextColor?: string;
    labelBackgroundColor?: string;
    href: string;
    children: ReactNode;
}

const IconLink: FC<IconLinckProps> = ({
    label,
    labelTextColor = 'black',
    labelBackgroundColor = 'rgb(79 203 255)',
    href,
    children
}) => {
    return <a href={href} className="icon-link">
       {children}
       {
            label && <div style={{
                color: labelTextColor,
                backgroundColor:
                labelBackgroundColor
           }}
           className="icon-link-label"
           >{label}</div>
       }
    </a>
};

export { IconLink };
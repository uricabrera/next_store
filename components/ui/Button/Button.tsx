
import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[],
}

const Button: FC<Props> = ({children,className,...rest}) => {
    return(
        <button className={cn(styles.root,className)} type="button" {...rest}>
            {children}
        </button>
    )
}


export default Button;
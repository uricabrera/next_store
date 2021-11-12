import React,{FC, Children, isValidElement} from "react";
import styles from "./ProductSlider.module.css";
import {useKeenSlider} from "keen-slider/react";
import cn from "classnames"


const ProductSlider: FC = ({children}) => {

    const [sliderRef,slider] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(s){
            console.log("changing to slide: ", s.details().relativeSlide)
        }
    })

    return(
        <div className={styles.root}>
            <div ref={sliderRef as React.RefObject<HTMLDivElement>} className="keen-slider h-full transition-opacity">
                <button onClick={slider?.prev} className={cn(styles.leftControl,styles.control)}/>
                <button onClick={slider?.next} className={cn(styles.rightControl,styles.control)}/>
                {
                    Children.map(children, (child) => {
                        if(isValidElement(child)){



                            return React.cloneElement(child, {className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`})
                        }

                        return child
                    }
                    )
                }
            </div>
        </div>
    )
}

export default ProductSlider
import { useState } from "react"
import { Loading } from "../components/load/load"


export const WithLoader = (Component) => {
    return (props) => {
        const [load, setLoad] = useState(true);

        const startLoading = () => {
            setLoad(true);
        };

        const stopLoading = () => {
            setLoad(false);
        };

        return (
            <>
                {load ? <Loading text={props.textLoad} /> : ""}
                <Component startLoading={startLoading} stopLoading={stopLoading} textLoad={props.textLoad} {...props} />
            </>
        );
    };
};
    
import {useGet} from "../Providers/Frak";
import React  from "react";
import Spinner from "react-bootstrap/Spinner";

const DogPage = props => {
    const ImageFetch = props => {
        const res = useGet('https://dog.ceo/api/breeds/image/random', {});
        if (!res || !res.response) {
            return <Spinner animation="grow" size="lg">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
        const imageUrl = res.response.message;
        return (
            <div>
                <img src={imageUrl} alt="avatar" width={400} height="auto" />
            </div>
        );
    };

    return (
        <>
            <p>
                This is an example of what can be done with React calling an API via fetch.
            </p>
            <ImageFetch/>
            <p>
                Leave this tab and return to refresh the image.
            </p>
        </>
    );
};


export default DogPage;
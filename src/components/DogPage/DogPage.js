import {useGet} from "../Providers/Frak";
import React  from "react";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";

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
                <Image src={imageUrl} alt="puppy" height="auto" width="400px" rounded/>
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
            <p>
                <a href="https://github.com/RyanNerd/ryannerd.github.io/blob/source/src/components/Providers/Frak.js">Fetch React hooks implementation details</a>
            </p>
        </>
    );
};


export default DogPage;
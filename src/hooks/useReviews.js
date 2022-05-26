import { useEffect, useState } from "react";

function useReviews() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-harbor-06116.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews];
}

export default useReviews;
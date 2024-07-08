import { IoStarSharp } from "react-icons/io5"
import RentForm from "../RentForm/RentForm"
import css from "./Reviews.module.css"

function Reviews({openReviews, item}) {
    console.log(item)
    function EartWord (name) {
        return name.charAt(0)
    }

    function renderStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<IoStarSharp key={i} fill="yellow" stroke="yellow" size="16px" />);
        };
        return stars;
    }
    return (
        <>
        {openReviews && (
            <div className={css.container}>
                <div className={css.blockReviewers}>
                {item.reviews.map(review => {
                        return ( <div key={review.reviewer_name} className={css.blockReviews}>
                        <div className={css.blockInfoUser}>
                        <span className={css.avatar}>{EartWord(review.reviewer_name)}</span>
                            <div className={css.nameAndRate}>
                            <h2 className={css.title}>{review.reviewer_name}</h2>
                            <p><span className={css.rateSpan}>{renderStars(review.reviewer_rating)}</span></p>
                            </div>
                        </div>
                         <p className={css.text}>{review.comment}</p>
                         </div>)
                    })}
                    </div>
                <div>
                    <RentForm />
                </div>
            </div>
        )}
        </>
    )
}

export default Reviews;
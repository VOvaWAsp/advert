import RentForm from "../RentForm/RentForm"
import css from "./Reviews.module.css"

function Reviews({openReviews, item}) {
    console.log(item)
    function EartWord (name) {
        return name.charAt(0)
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
                            <p>{review.reviewer_rating}</p>
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
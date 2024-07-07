import RentForm from "../RentForm/RentForm";
import css from "./Features.module.css"

function Features({open, item}) {
    return (
        <>
        {open && (
           <div className={css.container}>
             <div className={css.blockBenefits}>
                <div className={css.benefits}>
                    <div className={css.service}>
                        <p className={css.text}>{item.adults} adults</p>
                    </div>
                    <div className={css.service}>
                        <p>{item.transmission}</p>
                    </div>
                    <div className={css.service}>
                        <p>{item.details.airConditioner > 0 ? "AC" : null}</p>
                    </div>
                    <div className={css.service}>
                        <p>{item.engine}</p>
                    </div>
                    <div className={css.service}>
                        <p>{item.details.kitchen > 0 ? "kitchen" : null}</p>
                    </div>
                    <div className={css.service}>
                        <p>{item.details.beds} beds</p>
                    </div>
                    <div className={css.service}>
                        <p>{item.details.airConditioner} air conditioner</p>
                    </div>
                    {item.details.CD > 0 ?  <div className={css.service}>
                        <p className={css.text}>{item.details.CD > 0 ? 'CD' :  null}</p>
                    </div> :  null}
                    <div className={css.service}>
                        <p className={css.text}>{item.details.radio > 0 ? 'radio' :  null}</p>
                    </div>
                    <div className={css.service}>
                        <p className={css.text}>{item.details.hob} hob</p>
                    </div>
                </div>
                <div>
                    <h2 className={css.title}>Vehicle details</h2>
                    <hr />
                        <div className={css.blockInfo}>
                           <p className={css.subtitle}>Form</p> 
                           <p className={css.subtitle}>{item.form}</p>
                        </div>
                        <div className={css.blockInfo}>
                           <p className={css.subtitle}>Length</p> 
                           <p className={css.subtitle}>{item.length}</p>
                        </div>
                        <div className={css.blockInfo}>
                           <p className={css.subtitle}>Width</p> 
                           <p className={css.subtitle}>{item.width}</p>
                        </div>
                        <div className={css.blockInfo}>
                           <p className={css.subtitle}>Height</p> 
                           <p className={css.subtitle}>{item.height}</p>
                        </div>
                        <div className={css.blockInfo}>
                           <p className={css.subtitle}>Tank</p> 
                           <p className={css.subtitle}>{item.tank}</p>
                        </div>
                        <div className={css.blockInfo}>
                           <p className={css.subtitle}>Consumption</p> 
                           <p className={css.subtitle}>{item.consumption}</p>
                        </div>
                </div>
            </div>
            <div>
                <RentForm />
            </div>
           </div>
        )}
        </>
    )
}

export default Features;
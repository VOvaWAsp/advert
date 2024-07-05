import { NavLink } from "react-router-dom";
import css from "./Home.module.css"

function Home() {
    return <div className={css.container}>
        <h1 className={css.title}>Advert</h1>
        <p className={css.text}>Make good camping with our company</p>
        <div className={css.blockOurServices}>
            <h2 className={css.subtitle}>Our services</h2>
            <div className={css.blockInfo}>
                <div>
                    <img className={css.img} src="https://st3.depositphotos.com/1000647/33428/i/450/depositphotos_334288646-stock-photo-family-vacation-travel-rv-holiday.jpg" alt="" />
                    <p className={css.textSevices}>100% safety guarantee</p>
                </div>
                <div>
                    <img className={css.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi10d93geQiyE-x7GWvxVMO0ZTGn_5sjRDiQ&s" alt="" />
                    <p className={css.textSevices}>fast service</p>
                </div>
                <div>
                    <img className={css.img} src="https://img.freepik.com/free-photo/group-business-people-working-office_1303-30566.jpg" alt="" />
                    <p className={css.textSevices}>technical support</p>
                </div>
                </div>
                <h2 className={css.textSevices}>Show Catalog</h2>
                <NavLink to="/catalog" className={css.link}>Catalog</NavLink>
        </div>
    </div>
}

export default Home;
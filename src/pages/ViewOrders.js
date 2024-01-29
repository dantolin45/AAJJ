import React from "react";
import "../css/UserProfile.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import HaveToLogin from "../components/HaveToLogin";
const ViewOrders = () => {
    const context = useUserContext();

    function isLogged() {
        if (context) {
            return <>
                <section className="profile-actions">
                    <div className="navigation-section__container">
                        <div className="navigation__container--content">
                            <ol className="links-redirection__navigator">
                                <li className="linkToRedirect__navigator"> <Link className="navigatorLink" to="/profile"> Mi perfil </Link> </li>
                                {">"}
                                <li className="linkToRedirect__navigator unavailable">Ordenes</li>
                            </ol>
                        </div>
                    </div>
                    <div className="header profile-card__buttons">
                        <h2 className="profile-card__title"> <span className="headerEditProfile">Ordenes</span></h2>
                        <div className="profile-card__buttons-editProfile">
                            <span className="editProfileDetailTitle"> Todavía no realizo ninguna orden</span>
                        </div>
                    </div>

                </section>
            </>
        }
        else {
            return <HaveToLogin />
        }
    }
    return (
        <>
            {isLogged()}
        </>
    );
}

export default ViewOrders;
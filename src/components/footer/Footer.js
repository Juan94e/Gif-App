import React from 'react'
import '../../styles/Footer.css';


export const Footer = () => {

        //Current year for "copyright"
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };   

    return (
        <footer className="manualFooter">
            <div className="manualFooter-info"> 
                <h1>Juan Espinosa</h1>
                <p>Electronic Engineer | Software Developer</p>
            </div>
            <div className="manualFooter-contact">
                <h3>Contact Me</h3>
                <p>And let's get down work</p>
            </div>
            <div className="manualFooter-sns">
                <div className="designBy">
                    <p>
                        Copyright &copy; {getCurrentYear()} | All rights reserved 
                    </p>
                </div>
                <div className="manualSns-links" >
                    <a href="https://github.com/Juan94e"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-david-espinosa-aa9562161/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

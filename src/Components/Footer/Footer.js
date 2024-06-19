import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <h3 className="text-uppercase">Let's build something.</h3>
            <p>Send me a message.</p>
            <textarea></textarea>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Bookshelf</a></li>
                    <li><a href="#!">Podcast</a></li>
                    <li><a href="#!">Portfolio</a></li>
                    <li><a href="#!">Tree</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
<h3> Miguel Almodóvar
    </h3>
                    <ul className="list-unstyled">
                    
                    <li><a href="https://nostree.me/npub1ajt9gp0prf4xrp4j07j9rghlcyukahncs0fw5ywr977jccued9nqrcc0cs">Social Media</a></li>
                    <li><a href="https://miguelalmodo.com">Landing Page</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:
        <a href="https://miguelalmodo.com/"> Miguel Almodovar</a>
    </div>

</footer>

export default Footer
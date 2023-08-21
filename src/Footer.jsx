import './footer.css'

function Footer() {

  return (
    <>
    <div className='footer'>
        <div className="footerHead">
            <h2 className='footerHeading'>INSURE</h2>

            <div className="footerLinks">
                <img src="images\icon-facebook.svg" alt="" />
                <img src="images\icon-instagram.svg" alt="" />
                <img src="images\icon-pinterest.svg" alt="" />
                <img src="images\icon-twitter.svg" alt="" />
            </div>
        </div>

        <div className="footerMain">
            <div className="footerContent">
                <h4>OUR COMPANY</h4>

                <div className="footerList">
                    <p>HOW WE WORK</p>
                    <p>WHY INSURE?</p>
                    <p>VIEW PLANS</p>
                    <p>REVIEWS</p>
                </div>
            </div>
            <div className="footerContent">
                <h4>HELP ME</h4>

                <div className="footerList">
                    <p>FAQ</p>
                    <p>TERMS OF USE</p>
                    <p>PRIVACY POLICY</p>
                    <p>COOKIES</p>
                </div>
            </div>
            <div className="footerContent">
                <h4>CONTENT</h4>

                <div className="footerList">
                    <p>SALES</p>
                    <p>SUPPORT</p>
                    <p>LIVE CHAT</p>
                </div>
            </div>
            <div className="footerContent">
                <h4>OTHERS</h4>

                <div className="footerList">
                    <p>CAREERS</p>
                    <p>PRESS</p>
                    <p>LICENSES</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer

import './About.css'

function About() {

  return (
    <>
    <div className='aboutSection'>
      <h1 className='aboutHeading'>We're Different</h1>

      <div className="aboutQuality">
        <div className="qualities">
          <img src="images\icon-snappy-process.svg" alt="" />
          <h3>Snappy Process</h3>
          <p className='aboutPara'>Our application process can be completed in minutes, not hours. Don't get 
            stuck filling in tedious forms.</p>
        </div>
        <div className="qualities">
          <img src="images\icon-affordable-prices.svg" alt="" />
          <h3>Affordable Prices</h3>
          <p className='aboutPara'>We don't want you worrying about high monthly costs. Out prices may be low, 
            but we still offer the best coverage possible.</p>
        </div>
        <div className="qualities">
          <img src="images\icon-people-first.svg" alt="" />
          <h3>People First</h3>
          <p className='aboutPara'>Our plans aren't full of conditions and clauses to prevent payouts. We make 
            sure that you when you need it.</p>
        </div>
      </div>

      <div className="moreSection">
        <div className='more'>
          <h2 className='moreHead'>Find out more about how we work.</h2>
          <img src="images\bg-pattern-how-we-work-desktop.svg" alt="" className='howWeWorkPattern'/>
          <img src="images\bg-pattern-how-we-work-mobile.svg" alt="" className='howWeWorkMobile'/>

          <button className="moreButton">HOW WE WORK</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About

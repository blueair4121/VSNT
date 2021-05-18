export const Navigation = (props) => {
    return (
      <div className='container'>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              {/* <span className='sr-only'>Toggle navigation</span>{' '} */}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            {/* <img src="img/1.jpg" alt="" className="logo"/> */}
            <a className='navbar-brand page-scroll' href='#page-top'>
             <h2>VSNT</h2>
            </a>{' '}
          
            </div>
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#features' className='page-scroll'>
                  Features
                </a>
              </li>
              <li>
                <a href='#about' className='page-scroll'>
                  About
                </a>
              </li>
              <li>
                <a href='#concept' className='page-scroll'>
                  Concept
                </a>
              </li>
              <li>
                <a href='#tokenomic' className='page-scroll'>
                  Tokenomic
                </a>
              </li>
              <li>
                <a href='#service' className='page-scroll'>
                  Services
                </a>
              </li>
              <li>
                <a href='#roadmap' className='page-scroll'>
                  Roadmap
                </a>
              </li>
              <li>
                <a href='#faqs' className='page-scroll'>
                  Faqs
                </a>
              </li>
              <li>
                <a href='#portfolio' className='page-scroll'>
                  partners
                </a>
              </li>
              <li>
                <a href='#media' className='page-scroll'>
                  Media
                </a>
              </li>
              {/* <li>
                <a href='#team' className='page-scroll'>
                  Team
                </a>
              </li> */}
              <li>
                <a href='#contact' className='page-scroll'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
    



          </nav>
        </div>
      
      // </div>
    )
  }
  
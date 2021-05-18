export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
            <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about/about.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h2>Why Vassana Token?</h2>
              </div>
      </div>
      
              <div className='container'>
              <div className='section-title'>
              <div className='about-text'>
                <div className='row'>
              <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
              <div className='hover-bg'>
                {''}
                  <a
                    href='img/about/1.png'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <img
                      src='img/about/1.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>
                  <p>
                  VSNT is designed to recognise more ownership of cryptocurrency assets.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
              <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/about/2.png'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <img
                      src='img/about/2.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                  <p>
                  Website Vassanatoken can be purchased and traded.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
              <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/about/3.png'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <img
                      src='img/about/3.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                  <p>
                  It is the application of blockchain technology in exchange. Cryptocurrencies
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
              <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/about/4.png'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <img
                      src='img/about/4.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                  <p>
                  Vassana Token is a smart contract blockchain project to become an infrastructure cryptocurrency, also known as infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
              <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/about/5.png'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <img
                      src='img/about/5.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                  <p>
                  Buying a Vassana Token will allow users to benefit from the popularity of digital assets around the world.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
              <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/about/6.png'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <img
                      src='img/about/6.png'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                  <p>
                  Vassana Token is a smart contract blockchain project to become an infrastructure cryptocurrency, also known as infrastructure.
                  </p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  )
}

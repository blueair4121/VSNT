export const Media = (props) => {
    return (
          <div id='media'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>vsnt token in media</h2>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        {' '}
                        <img src={d.img} className='img-responsive' alt='' />{' '}
                      </div>
                      </div>
                    </div>
                ))
              : 'loading'}
          </div>
          </div>
      </div>
    )
  }




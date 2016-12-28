import React from 'react';

const Team = () => {
  const meEngineers = [{ name: 'John Smith', img: 'http://placehold.it/300x300'
  },{ name: 'John Smith', img: 'http://placehold.it/300x300'
  },{ name: 'John Smith', img: 'http://placehold.it/300x300'
  }]

  const eeEngineers = [{ name: 'John Smith', img: 'http://placehold.it/300x300'
  },{ name: 'John Smith', img: 'http://placehold.it/300x300'
  },{ name: 'John Smith', img: 'http://placehold.it/300x300'
  }]

  const csEngineers = [{ name: 'John Smith', img: 'http://placehold.it/300x300'
  },{ name: 'John Smith', img: 'http://placehold.it/300x300'
  },{ name: 'John Smith', img: 'http://placehold.it/300x300'
  }]

  const meTeam = meEngineers.map(member => {
    return (
        <div className="col-lg-4 col-sm-6 text-center">
            <img className="img-circle img-responsive img-center" src={member.img} />
            <h3>{member.name}</h3>
        </div>
    )
  })

  const eeTeam = eeEngineers.map(member => {
    return (
        <div className="col-lg-4 col-sm-6 text-center">
            <img className="img-circle img-responsive img-center" src={member.img} />
            <h3>{member.name}</h3>
        </div>
    )
  })

  const csTeam = csEngineers.map(member => {
    return (
        <div className="col-lg-4 col-sm-6 text-center">
            <img className="img-circle img-responsive img-center" src={member.img} />
            <h3>{member.name}</h3>
        </div>
    )
  })

  return (
    <div>
      <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">About Us
                <small>It's Nice to Meet You!</small>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
        </div>
      </div>
      <div className="row">
          <div className="col-lg-12">
              <h2 className="page-header">Mechanical Team</h2>
          </div>
        { meTeam }
      </div>

      <div className="row">
          <div className="col-lg-12">
              <h2 className="page-header">Eletrical Team</h2>
          </div>
        { eeTeam }
      </div>

      <div className="row">
          <div className="col-lg-12">
              <h2 className="page-header">Computer Science Team</h2>
          </div>
        { csTeam }
      </div>
    </div>

  )
}

export default Team;

import React from 'react';

import './play.css';

const PlayControl = () => {




	return (
       <>
          <div className="boxbtn mx-outo">
            <button type="button" class="btn btn-outline-primary">Play</button>
            <button type="button" class="btn btn-outline-secondary">Pause</button>
            <button type="button" class="btn btn-outline-success">Previous</button>
            <button type="button" class="btn btn-outline-danger">Next</button>
          </div>
          <div>
            <ol class="list-group">
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
            </ol>
          </div>
      </>
	);

};

export default PlayControl;

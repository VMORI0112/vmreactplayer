import React from 'react';

import './play.css';

const PlayControl = () => {
        let res ={};
        const loadSoundObjects = () =>
              fetch("https://assets.breatheco.de/apis/sound/all")
              .then(res => (res.ok ? res : Promise.reject(res)))
              .then(res => res.json())

        console.log(res,res.ok, Promise.reject(res))

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

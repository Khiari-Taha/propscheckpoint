import React from 'react';
import profilecomponent from './App';
import App from './App';

const profilecomponent= ({fullname, bio, profession, imagesrc}) => {

  handleName=()=> {
alert{{fullname}}
  }
  return (
    <div>
      console.log(profilecomponent)
        <div>
            <h1><input type="text" name={fullname} onClick={handleName} > </input></h1>
        </div>
        <div><input type="text" name={bio}></input></div>
        <div><input type="text" name={profession}></input></div>
        <div><image source={imagesrc} /> </div>
        

    </div>
  )
}

export default profilecomponent
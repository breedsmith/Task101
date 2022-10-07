import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const style = {
    width:"100%",
    aspectRatio:"21/9"
}

function Banner(){
    return(
        <div className='banner'>
            <div style ={center}>
                <img style={style} src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="library"></img>
            </div>
        </div>
    )
}

export default Banner;
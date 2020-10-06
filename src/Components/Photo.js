import React from 'react';
import PropTypes from 'prop-types';

function Photo(props){
    const pos = props.post;
    return <figure className="figure">
                 <img className="photo" src={pos.imageLink} alt={pos.description}/>
                 <figcaption>
                     <p>{pos.description}</p>
                 </figcaption>
                 <div className="button-container">
                     <button className="remove-button" onClick={()=> {
                         props.onRemovePost(pos)
                     }}>Remove</button>
                 </div>
            </figure>
    
}

Photo.propTypes = {
    post : PropTypes.object.isRequired,
    onRemovePost : PropTypes.func.isRequired
}


export default Photo;
import React from 'react';
import Card  from './Card';

 export const CardList = ({ Robots }) => {
    return (
        <div> 
            {
            Robots.map((users, i ) =>{
                return (
                 <Card 
                        key={i} 
                         id={Robots[ i ].id} 
                         name={Robots[ i ].name} 
                         email={Robots[ i ].email}
                    />
                 );
             } )
        }
        </div>
  );
}
 
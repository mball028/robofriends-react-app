import React from 'react';
//import Card component, so we can pass props to card.
import Card from './Card';


//we create our CardList and pass in an array of values.
const CardList = ({ robots }) => {
    
    
    return (
        //all react components may only return one element, usually will be a div parent.
        <div>
            {
                
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    )

}

export default CardList;
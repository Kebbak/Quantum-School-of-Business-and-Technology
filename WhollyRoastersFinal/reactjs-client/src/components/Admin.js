import React, { useState, useEffect } from "react";
import ApiService from "../services/api-service";

function Admin() {

    const [data, setData] = useState({ // usestate to hold/store API data
        shippers: [],
        users: []
    });
// useEffect to fetch data from the API
    useEffect(() => {  
        ApiService.getAdmin()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.error(error));
    }, []);


    return(
            <div>
            <h3>Admin Page </h3>
            
            {data && data.users.map((user, index) => (
               <div key={index}>
               <h4>{user.username}</h4>
                { data.shippers && data.shippers.map((shipper, index2) => (
                < div key={index2}>
                    { user.id === shipper.user_id ? <p>{shipper.full_name}: {shipper.address}</p> : "" } 
                </div>

                ))}
                <br />
              </div>
            ))}

            </div>
        )
}

export default Admin;

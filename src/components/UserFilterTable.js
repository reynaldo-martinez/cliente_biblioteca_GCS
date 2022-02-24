import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';


export const UserFilterTable = () => {

    const history = useHistory()
    const [state, setstate] = useState(null)

    const {user} = useParams()

    const fetching = async ()=>{
        try {
          const res = await fetch(`http://localhost:4000/requests/${user}`);
          const data = await res.json();
          
          setstate(data)
          
        } catch (error) {
          console.log(error);
        }
    }
    useEffect(() => {
         fetching()
        
    }, [])
    const handleClick = ()=>{
        history.goBack()
    }

    

    return (
      <div className="col-9 d-flex  justify-content-center flex-column">
          <button type="button" onClick={handleClick} class="btn btn-outline-dark col-1 border m-2"><i class="fas fa-arrow-circle-left"></i></button>
          <hr></hr>
        
        <div className="container col-12 overflow-auto mt-5 ">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                
                <th scope="col">Get</th>
                <th scope="col">Return</th>
                <th scope="col">Book</th>
                <th scope="col">Units</th>

              </tr>
            </thead>
            <tbody>
              {state &&
                state.map((br, i) => (
                  <tr key={br.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{br.return}</td>
                    <td>{br.get}</td>
                    <td>{br.book}</td>
                    <td>{br.units}</td>

                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

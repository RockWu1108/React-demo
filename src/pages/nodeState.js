import React , {useState, useEffect} from 'react'
import BoxItem from '../components/Item/boxItem'
import TableItem from '../components/Item/tableItem'


const NodeState =() => {

    const NODE_API ="http://127.0.0.1:8100/node/getPeerInfo";
    const [nodeData , setNodeData] = useState([]);

    useEffect(()=>{
        loadMoreCoin();
    },[])
 
    const loadMoreCoin = () =>{
        fetch(NODE_API, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("JWT")}`
            }
        } )
        .then( res => res.json() )
        .then( res => {
            console.log(res);
            setNodeData(nodeData.concat(res));
        } );
    }

    return (
        <div>
            <BoxItem/>
            <TableItem tableData={nodeData}/>
        </div>
    )
}

export default NodeState;


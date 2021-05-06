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
        fetch(NODE_API)
        .then(res => {
            return res.json(); 
        }).then(data =>{
            console.log(data);
            setNodeData(nodeData.concat(data));
        })
    }

    return (
        <div>
            <BoxItem/>
            <TableItem tableData={nodeData}/>
        </div>
    )
}

export default NodeState;


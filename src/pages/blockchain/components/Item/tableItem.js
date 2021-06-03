import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { green } from '@material-ui/core/colors';
import {Link ,useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: 'auto',
    margin : '60px'
  },
  container: {
    maxHeight: 440,
  },
});

const columns = [
  { id: 'index', label: '序號', },
  { id: 'state', label: '狀態', },
  { id: 'nodeName', label: '節點名稱', },
  { id: 'ip', label: 'IP地址', },
  { id: 'blockNumber', label: '最新區塊號', },
  { id: 'nodeID', label: '節點ID',},
];


  const TableItem = ({tableData}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleTableRow = (row) =>{
    history.push({
           pathname: '/dashboard',
           state: { nodeName: row.nodeName }
    });

  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row ,index) => {
             return (
               
                <TableRow hover  tabIndex={-1} key={row.id}  onClick={()=>handleTableRow(row)}
                >

                  <TableCell  align="left" >
                    {row.id}
                  </TableCell>

                  <TableCell align="left">
                    { row.active ==="true" ? (<CheckCircleIcon style={{ color: green[500]}}/>) : (<CancelIcon style={{ color :"#EA0000" }}/>)}
                  </TableCell>

                  <TableCell align="left">
                    {row.nodeName}
                  </TableCell>

                 
                  <TableCell align="left">
                     {row.ip}
                  </TableCell>
                  
                  <TableCell align="left">
                    {row.blockNumber !== 0 ? row.blockNumber : 0}
                  </TableCell>

                  <TableCell align="left">
                    {row.enode}
                  </TableCell>
                  

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={TableItem.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableItem

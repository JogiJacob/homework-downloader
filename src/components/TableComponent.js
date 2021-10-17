import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import { useEffect, useState } from 'react';

const TableComponent = ({data, setSelections}) => {
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        setSelections(selectedRows);
        // eslint-disable-next-line
    }, [selectedRows])
    const columns = [
        {
            dataField: 'name',
            text: 'Name'
        }, {
            dataField: 'device',
            text: 'Device'
        }, {
            dataField: 'path',
            text: 'Path'
        }, {
            dataField: 'status',
            text: 'Status',
            formatter: (cell, row, rowIndex) => {
                return (
                    <>
                        <FontAwesomeIcon icon={faCircle} style={{visibility: cell === 'available' ? 'unset' : 'hidden', color:'#20da5a'}}/> {capitalizeFirstLetter(cell)}
                    </>
                )
            }
        }
    ];

    const capitalizeFirstLetter = (string)  => string.charAt(0).toUpperCase() + string.slice(1);

    const onSelect = (row, isSelect, rowIndex, e) => {
        const foundIndex = selectedRows.indexOf(row.name);
        if(row.status === "available" && foundIndex === -1) {
            setSelectedRows([...selectedRows, row.name])
        } else if(row.status === "available") {
            const temp = [...selectedRows];
            temp.splice(foundIndex, 1);
            setSelectedRows(temp);
        }
        return row.status === "available";
    }

    const onSelectAll = (isSelect, rows, e) => {
        if (isSelect) {
            const allSelectedRows = rows.filter(r => r.status === "available").map(r => r.name);
            setSelectedRows(allSelectedRows)
            return allSelectedRows;
        } else {
            setSelectedRows([]);
        }
    }

    return (
        <BootstrapTable
            keyField='name'
            data={ data }
            columns={ columns }
            selectRow={
                { 
                    mode: 'checkbox', 
                    selectedRows: selectedRows,
                    bgColor: '#00BFFF', 
                    onSelect: onSelect, 
                    onSelectAll: onSelectAll
                } 
            }
        />
    )
}
export default TableComponent;
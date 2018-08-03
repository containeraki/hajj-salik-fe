import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};



class ShipmentList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {


        return (
            <BootstrapTable data={this.props.shipments}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="title"
                    dataFormat={titleFormatter} 
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Title
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="type"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Type
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="shipment_from"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Shipment From
                </TableHeaderColumn>

        <TableHeaderColumn
        dataField="shipment_to"
        dataSort={true}
        caretRender={getCaret}
        columnTitle
        >
        Shipment To
        </TableHeaderColumn>

        <TableHeaderColumn
        dataField="partner"
        dataSort={true}
        caretRender={getCaret}
        columnTitle
        >
        Partner
        </TableHeaderColumn>

        <TableHeaderColumn
        dataField=""
        columnTitle
        >
        Track
        </TableHeaderColumn>

            </BootstrapTable>
        );
    }

}



ShipmentList.propTypes = {
    shipments: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default ShipmentList;

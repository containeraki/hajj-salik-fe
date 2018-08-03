import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as shipmentAction from '../../action/ShipmentAction';
import ShipmentList from './ShipmentList';



export class ShipmentListContainer extends React.Component {

    constructor() {
        super();

        this.state = {selectedShipmentId: undefined};

        this.handleAddShipment = this.handleAddShipment.bind(this);
        this.handleEditShipment = this.handleEditShipment.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    /*componentDidMount() {
        this.props.action.getShipmentsAction()
            .catch(error => {
                toastr.error(error);
            });
    }*/



    handleAddShipment() {
        this.props.history.push('/shipments');
    }



    handleEditShipment() {
        const selectedShipmentId = this.state.selectedShipmentId;

        if (selectedShipmentId) {
            this.setState({selectedShipmentId: undefined});
            this.props.history.push(`/shipment/${selectedShipmentId}`);
        }        
    }



    handleDelete() {
        const selectedShipmentId = this.state.selectedShipmentId;

        if (selectedShipmentId) {
            this.setState({selectedShipmentId: undefined});
            this.props.action.deleteShipmentAction(selectedShipmentId)
                .catch(error => {
                    toastr.error(error);
                });
        }
    }



    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedShipmentId: row.id});
        }
    }



    render() {
        const { shipments } = this.props;

        if (!shipments) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>SHIPMENTS</h1>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleAddShipment}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleEditShipment}
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>                                

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <ShipmentList shipments={shipments} handleRowSelect={this.handleRowSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    shipments: state.shipmentsReducer.shipments
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(shipmentAction, dispatch)

});



ShipmentListContainer.propTypes = {
    shipments: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(ShipmentListContainer);

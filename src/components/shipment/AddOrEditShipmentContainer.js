import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as shipmentAction from '../../action/ShipmentAction';
import * as authorAction from '../../action/AuthorAction';
import ShipmentForm from './ShipmentForm'; // eslint-disable-line import/no-named-as-default
import { authorsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


export class AddOrEditShipmentContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getShipmentAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });

        this.props.action.getAuthorsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const shipment = {
            id: values.id,
            title: values.title,
            watchHref: values.watchHref,
            authorId: values.authorId,
            length: values.length,
            category: values.category
        };

        this.props.action.saveShipmentAction(shipment)
            .then(() => {
                toastr.success('Shipment saved');
                this.props.history.push('/shipments');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/shipments');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                <ShipmentForm
                    heading={heading}
                    authors={this.props.authors}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const shipmentId = ownProps.match.params.id; //from the path '/shipment/:id'

    if (shipmentId && state.selectedShipmentReducer.shipment && shipmentId === state.selectedShipmentReducer.shipment.id) {
        return {
            initialValues: state.selectedShipmentReducer.shipment,
            authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    } else {
        return {
            authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    }
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...authorAction, ...shipmentAction }, dispatch)
});



AddOrEditShipmentContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    authors: PropTypes.array,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditShipmentContainer);

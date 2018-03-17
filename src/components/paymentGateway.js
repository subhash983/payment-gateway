import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SavedCard from './savedCard';
import {Link} from 'react-router-dom'

class PaymentGateway extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Link to="/">Saved Cards</Link>
                <Link to="edit">New Credit Card</Link>
                <div>
                    {this.props.savedCards.map(card => <SavedCard key={card.number} card={card}/>)}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {savedCards: state.savedCards};
}

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({
//         updateCart: updateCart,
//         removeProduct: removeProduct
//     }, dispatch);
// }

export default connect(mapStateToProps)(PaymentGateway);

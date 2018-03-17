import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveNewCard, saveEditedCard} from '../actions';
import {Link} from 'react-router-dom'

class NewCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            card: Object.assign({}, this.props.card)
        };
        this.updateCardState = this.updateCardState.bind(this);
        this.saveCard = this.saveCard.bind(this);
    }

    render() {
        return (
            <div>
                <Link to="/">Saved Cards</Link>
                <Link to="edit">New Credit Card</Link>
                <div>
                    Card Type
                    <span>
                        visa</span>
                    <input type="radio" value="visa"/>
                    <span>
                        master</span>
                    <input type="radio" value="master"/>
                </div>
                <div>
                    Card Number
                    <input type="text" name="number" value={this.state.card.number} onChange={this.updateCardState}/>
                </div>
                <div>
                    Name on Card
                    <input type="text" name="name" value={this.state.card.name} onChange={this.updateCardState}/>
                </div>
                <div>
                    CVV Number
                    <input type="text" name="cvv" value={this.state.card.cvv} onChange={this.updateCardState}/>
                </div>
                <div>
                    Expiry Date
                    <select className="month" name="month" value={this.state.card.month} onChange={this.updateCardState}>
                        <option value="1">Jan(1)</option>
                        <option value="2">Feb(2)</option>
                        <option value="3">Mar(3)</option>
                        <option value="4">Apr(4)</option>
                        <option value="5">May(5)</option>
                        <option value="6">Jun(6)</option>
                        <option value="7">Jul(7)</option>
                        <option value="8">Aug(8)</option>
                        <option value="9">Sep(9)</option>
                        <option value="10">Oct(10)</option>
                        <option value="11">Nov(11)</option>
                        <option value="12">Dec(12)</option>
                    </select>
                    <select className="year" name="year" value={this.state.card.year} onChange={this.updateCardState}>
                        <option value="2017">2017</option>
                    </select>
                </div>
                <input type="button" onClick={this.saveCard} value="Pay Now"/>
            </div>
        );
    }
    updateCardState(event) {
        const field = event.target.name;
        let card = this.state.card;
        card[field] = event.target.value;
        return this.setState({card: card});
    }

    saveCard(event) {
        event.preventDefault();
        this.props.saveNewCard(this.state.card);
        this.props.history.push('/');
    }

}
const mapStateToProps = (state, ownProps) => {
    const cardNumber = '';

    let card = {
        type: '',
        number: '',
        name: '',
        cvv: '',
        year: '',
        month: ''
    };
    if (cardNumber && state.savedCards.length > 0) {
        card = state.savedCards.find(card => card.number === cardNumber);
    }
    return {card: card};
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        saveNewCard: saveNewCard,
        saveEditedCard: saveEditedCard
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCard);

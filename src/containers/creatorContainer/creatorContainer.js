import React, {Component} from 'react';
import {connect} from 'react-redux';
import Creator from '../../components/creator';
import {addElement} from '../../actions';

class StatsContainer extends Component {
    render() {
        const {addElement} = this.props;
        return (
            <Creator addElement={addElement} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addElement: (content) => dispatch(addElement(content))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
 
import React from 'react';
import Filters from '../../components/filters';
import { connect } from 'react-redux';
import { filterAction } from '../../actions';

const FilterContainer = ({ filter, filterAction }) => {
    return (
        <Filters filterAction={filterAction}/>
    )
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterAction: (payload) => dispatch(filterAction(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer);
import React, {Fragment} from 'react';
import './app.css';

import Header from '../header';
import Headline from '../headline';
import FilterContainer from '../../containers/filterContainer';
import CreatorContainer from '../../containers/creatorContainer';
import ListContainer from '../../containers/listContainer';
import StatsContainer from '../../containers/statsContainer';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Headline />
            <FilterContainer />
            <CreatorContainer />
            <StatsContainer />
            <ListContainer />
        </Fragment>
    )
}

export default App;
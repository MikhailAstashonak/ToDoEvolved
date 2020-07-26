import React, {useEffect, Fragment} from 'react'
import Stats from '../../components/stats';
import { connect } from 'react-redux';

let all = 0,
    done = 0, 
    important = 0;

const StatsContainer = ({itemList}) => {
        all = itemList.length;

        important = itemList.filter((i) => {
            return i.important === true;
        }).length;

        done = itemList.filter((i) => {
            return i.done === true;
        }).length;
        
        useEffect( () => {
            all = itemList.length;

            important = itemList.filter((i) => {
                return i.important === true;
            }).length;

            done = itemList.filter((i) => {
                return i.done === true;
            }).length;
            
        }, [itemList.length]);

        return (
            <Stats all={all} done={done} important={important}/>
        )
};

const mapStateToProps = (state) => {
    const { itemList } = state;
    return  {
        itemList
    };
}
 
export default connect(mapStateToProps, null)(StatsContainer);
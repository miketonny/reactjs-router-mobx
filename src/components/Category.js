import React, { Component} from "react"; 
import {inject, observer} from 'mobx-react';
import VideoThumb from './VideoThumb';
import { Grid } from "semantic-ui-react";


@inject('rootStore')
@observer
class Category extends Component{
    componentDidMount(){
        if(this.props.rootStore.data.categoryVideos.length === 0) { 
            this.props.rootStore.data.fetchCategoryVids(this.props.match.params.category.split('-')[1]);
        }
    }
    render(){ 
        const catName = this.props.match.params.category; 
        return <div>
            <h2>{this.props.match.params.category.split('-')[0]}</h2>
            <Grid columns='equal' stackable>
            {this.props.rootStore.data.categoryVideos.map((vid, i) => {
                return <VideoThumb key={i} info={vid} category={catName}/>
            })}
            </Grid>
        </div>
    }
}

export default Category;
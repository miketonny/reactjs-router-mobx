import React, { Component} from "react"; 
import {inject, observer} from 'mobx-react';   
import {Route, Link} from 'react-router-dom'; 
import { Grid, Button ,Divider} from "semantic-ui-react";

@inject('rootStore')
@observer
class Video extends Component{
    render(){ 
        const vid = this.props.rootStore.data.currentVideo;  
        if(!vid.title) this.props.rootStore.data.fetchVideo(this.props.match.params.vid); //load data on start up console.log(this.props.match.params);
        return  <Grid className="video" container columns={1}>
                <Grid.Column>
                    <h2>{vid.title}</h2>
                    <iframe width="800" height="600" src={vid.embedded_url} frameBorder="0" allowFullScreen></iframe>
                    <Divider />
                    <Button color='red' content='Likes' icon='heart' label={{basic: true, color: 'red', pointing: 'left', content:`${vid.likes}`}}></Button>
                 </Grid.Column>
             </Grid>
    }
}

export default Video;
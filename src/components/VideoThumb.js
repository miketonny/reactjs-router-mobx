import React, { Component} from "react"; 
import {inject, observer} from 'mobx-react';   
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Video from './Video';

@inject('rootStore')
@observer
class VideoThumb extends Component{
    //mouse enters video tag, start playing the short vid..
    handleMouseEnter(e){ 
        e.target.play();
    }
    //when mouse left video, show the poster again and reload video.
    handleMouseLeave(e){ 
        e.target.pause();
        e.target.load();
    }
    goToVideo(id){
        this.props.rootStore.data.fetchVideo(id); //load data on start up
    }
    render(){
        const info = this.props.info;
        return <div className="thumb">       
            <video height="150" src={info.preview_video_url} type="video/mp4" 
           poster={info.preview_url} loop onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}></video>
            <label>{`${Math.round(info.duration/60,0)}mins`}</label>
            <Link to={`/${this.props.category}/${info.vid}`} onClick={()=> this.goToVideo(info.vid)}><span>{info.title}</span></Link>
            
        </div>
    }
}

export default VideoThumb;
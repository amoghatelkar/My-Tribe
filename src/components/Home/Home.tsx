import React from 'react';
import {IHomeProps} from './IHomeProps';
import { newsapi } from '../../services/newsAPIHelper';
import { Card } from '@uifabric/react-cards';
import { PrimaryButton } from 'office-ui-fabric-react';
import Moment from 'react-moment';

interface IHomeState{
    newsItems:any;
}
export class Home extends React.Component<IHomeProps,IHomeState,{}>{
    constructor(props:IHomeProps){
        super(props);
        this.state = ({
            newsItems:[]
        });
    }
    public componentDidMount(){
        newsapi.getNewsByPlace('us').then(response => 
            response.json().then(data => this.setState({newsItems:data.articles},()=>console.log(this.state.newsItems)))
        );
     }
    render() {
        const CardStyles  = {minWidth:'-webkit-fill-available',padding:'30px', margin:'30px',boxShadow:'100%'}
        return(
            <div style={{padding:'40px'}}>
           {this.state.newsItems.map((newsItem:any) =>  <Card style={CardStyles} ><h2 >{newsItem.title}</h2>
           <div style={{display:'flex'}}>
            <div style={{textAlign:'justify',width: '40%' }}><img src={newsItem.urlToImage} alt={newsItem.description} style={{width: '100%', alignSelf: 'left'}}/></div     >
        <div style={{textAlign:'justify',padding: '12px' }}>
        Date : <Moment>{newsItem.publishedAt}</Moment>
        <p>{newsItem.description}</p>
         <p>{newsItem.content}</p>
         <PrimaryButton  style={{float:'right', boxShadow:'100%'}} onClick={() => window.location.href = newsItem.url}> Read More </PrimaryButton>
         </div>
        
        </div>
        
        
           
            </Card>)}
            </div>           
        )
    }

} 
import React, {Component} from 'react';
import Title from './Title';
import Photowall from './photowall'
import AddPost from './AddPost';
import {Route} from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts : [],
            navigation : "photo" // photo,new
        };
            this.removePhoto = this.removePhoto.bind(this);
            this.addPhoto = this.addPhoto.bind(this);
            console.log("from constructor")
    }
    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
        posts : state.posts.filter(post => post != postRemoved)}))
    
    }
    componentDidMount(){
        const data = getData();
        this.setState({
            posts : data
        })
        console.log("from componentDidMount")
    }
    componentWillMount(){
        console.log("from componentWillMount")
    }

    componentDidUpdate(){
        console.log("from componentDidUpdate")
    }
    // Tired by my own
    addPhoto(postAdd){
        console.log(postAdd.description);
        this.setState((state) => ({
            posts : state.posts.concat(postAdd)
        }))
    }
    render() {

        console.log(this.state.posts)
        return <div>  
            <Route exact path="/" render={() => (
             <div>
                <Title name="Photowall"/>
                <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
             </div>
            )}/>
            <Route path="/AddPost" render={({history}) => (
                <AddPost onAddPost={(addPhoto) => {
                   this.addPhoto(addPhoto);
                   history.goBack('/');
                }}/>
            )}/>
           
        </div>
    }
}
function getData(){
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
}
export default App;
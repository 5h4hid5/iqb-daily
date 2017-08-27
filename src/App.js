import React, { Component } from 'react';
import Quote from './components/Quote';

import './App.css';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/5h4hid5/iqb-daily/master/data/iqb.json")
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data[Math.floor(Math.random()*data.length)]
        });
    })
    .catch(error => {
      this.setState({
        data: {
          quote: "হয়ত একটি ক্ষুদ্র কাজ অনেক বিশাল হয়ে যায় কাজটির পেছনে করা নিয়্যাতের কারণে এবং হয়ত অনেক বড় একটা কাজ একদমই তুচ্ছ হয়ে যায় কাজটির পেছনে করা নিয়্যাতের কারণে।",
          source: "আবদুল্লাহ ইবনে মুবারাক (রাহিমাহুল্লাহ), জামি’ ‘উলুম, পৃ ১৬"
        }
      });
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Quote data={this.state.data} />
      </div>
    );
  }
}

export default App;

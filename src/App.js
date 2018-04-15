import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Top from "./components/Top";
import images from "./images.json"


class App extends Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    clicked: false,
    text: "",
    clickedImages: []
  }


  handleShuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

  }

  handleClicked = id => {
    let clickedImage = this.state.images.filter(image => image.id === id)

    console.log("clicked image id", clickedImage[0].id)


    let array = this.state.clickedImages;

    if (array.indexOf(clickedImage[0].id) === -1) {

      array.push(clickedImage[0].id);

      console.log("adding new images into the array", array)
      this.setState({ clickedImages: array })
      this.setState({ text: "Good Job!!" })
      this.setState({ score: this.state.score + 1 })

      if (array.length > this.state.topScore) {

        this.setState({ topScore: array.length })
        console.log("top score", this.state.topScore)
      }

    } else {
      console.log("this image is already in the array")
      this.setState({
        images: images,
        score: 0,
        clicked: false,
        clickedImages: [],
        text: "You lost!!"
      })
    }


    this.setState({ images: images })
    this.handleShuffle(images)

  }


  render() {
    return (
      <Wrapper>
        <Top
          score={this.state.score}
          topScore={this.state.topScore}
          text={this.state.text}
        />


        {images.map(image =>
          <Card {...image}
            id={image.id}
            key={image.id}
            handleClicked={this.handleClicked}

          />)}
         
      </Wrapper>
    );
  }
}

export default App;




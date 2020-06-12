import React from 'react'
import Gallery from "./Gallery";



let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = [
    "eminem",
    "snoopdogg",
    "lilwayne",
    "drake",
    "kanyewest",
  ];

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rockSongInfo:[],
            popSongInfo:[],
            hipSongInfo:[]
        }

    }

    componentDidMount = () =>{
        let rockRandomArtists = [];
        let popRandomArtists = [];
        let hipHopRandomArtists = [];

        while (rockRandomArtists.length < 4) {
          let artist =
            rockArtists[Math.floor(Math.random() * rockArtists.length)];

          if (!rockRandomArtists.includes(artist)) {
            rockRandomArtists.push(artist);
          }
        }

        while (popRandomArtists.length < 4) {
          let artist =
            popArtists[Math.floor(Math.random() * popArtists.length)];

          if (!popRandomArtists.includes(artist)) {
            popRandomArtists.push(artist);
          }
        }

        while (hipHopRandomArtists.length < 4) {
          let artist =
            hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];

          if (!hipHopRandomArtists.includes(artist)) {
            hipHopRandomArtists.push(artist);
          }
        }

        let headers = new Headers({
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
          });

        for (let j = 0; j < rockRandomArtists.length; j++) {
          fetch(
            "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
              rockRandomArtists[j],
            {
              method: "GET",
              headers,
            }
          )
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
            })
            .then((artists) => {
              let songInfo = artists.data;
              this.setState({rockSongInfo: songInfo})
              //console.log(this.state.rockSongInfo)
            })
            .catch((error) => {
              console.log(error);
            });
        }
        
        for (let j = 0; j < popRandomArtists.length; j++) {
            fetch(
              "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
                popRandomArtists[j],
              {
                method: "GET",
                headers,
              }
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
              })
              .then((artists) => {
                let songInfo = artists.data;
                this.setState({popSongInfo: songInfo})
              })
              .catch((error) => {
                console.log(error);
              });
          }
  
          for (let j = 0; j < hipHopRandomArtists.length; j++) {
            fetch(
              "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
                hipHopRandomArtists[j],
              {
                method: "GET",
                headers,
              }
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
              })
              .then((artists) => {
                let songInfo = artists.data;
                this.setState({hipSongInfo: songInfo})
              })
              .catch((error) => {
                console.log(error);
              });
          }
    }




    render(){
        return (
            <div className="col-12 col-md-9 offset-md-3 mainPage">
            {this.props.toBeSearched.length > 0 && (
              <Gallery
                title="Search results"
                songs={this.props.toBeSearched}
              />
            )}
            {!this.props.toBeSearched.length > 0 && (
                <>
                <Gallery
                title="Rock Classics"
                //loading={this.state.loading}
                songs={this.state.rockSongInfo.slice(0,4)}
              />
              <Gallery
                title="Pop Artist"
                //loading={this.state.loading}
                songs={this.state.popSongInfo.slice(0,4)}
              />
              <Gallery
                title="Hipop Top"
                //loading={this.state.loading}
                songs={this.state.hipSongInfo.slice(0,4)}
              />
              </>
            )}
            </div>
        )
    }
}

export default Home

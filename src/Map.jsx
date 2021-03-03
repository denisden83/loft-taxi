import React from 'react';
import Header from "./Header";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";


const styles = () => ({
  mapWrapper: {
   position: "relative",
   width: "100%",
   height: "100%"
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '50vh'
  }
});

class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJja2hrcmp6ZWEwOWZxMnNsbjc1NXlrcTd5In0.w964wIfUKgnYjQLp0Ods7Q";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const {classes: {mapWrapper, map}, goToPage} = this.props;
    return (
      <>
        <Header goToPage={goToPage} />
        <h1>Map</h1>
        <div className={mapWrapper}>
          <div className={map} data-testid='map' ref={this.mapContainer}/>
        </div>
      </>
    );
  }
}

Map.propTypes = {
  classes: PropTypes.objectOf(
    PropTypes.string,
  ),
  goToPage: PropTypes.func,
};

export default withStyles(styles)(Map);

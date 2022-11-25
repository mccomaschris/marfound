// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', loadChapterMap('southeast'));

function loadChapterMap(region) {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var mapStyles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"0"},{"color":"#f5f5f2"},{"gamma":"1"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"-3"},{"gamma":"1.00"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5ce"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fac9a9"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"hue":"#0a00ff"},{"saturation":"-77"},{"gamma":"0.57"},{"lightness":"0"}]},{"featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"color":"#43321e"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#ff6c00"},{"lightness":"4"},{"gamma":"0.75"},{"saturation":"-68"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c7eced"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-49"},{"saturation":"-53"},{"gamma":"0.79"}]}];

    // Create empty LatLngBounds object
    // We use this to auto set the map frame around the icons
    var bounds = new google.maps.LatLngBounds();

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('muf-map');

    // Make sure the map element is empty
    mapElement.textContent = '';
    
    var mapOptions = {
        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: mapStyles,
        streetViewControl: false,
        mapTypeControl: false,
        disableDefaultUI: true
    };

    var southeastChapters = [
        [26.614149, -81.825768, 'Fort Myers, FL'],
        [26.704330, -80.036438, 'Palm Beach, FL'],
        [28.282030, -81.348007, 'Space Coast, FL'],
        [27.981340, -82.498589, 'Tampa Bay, FL'],
        [28.932810, -81.959137, 'The Villages, FL'],
        [33.748992, -84.390264, 'Atlanta , GA'],
        [39.049907, -84.665161, 'Cincinati, KY'],
        [34.762248, -79.201248, 'Charolette , NC'],
        [35.780397, -78.639098, 'Raleigh, NC'],
        [32.787601, -79.940272, 'Charleston, SC'],
        [37.538508, -77.43428, 'Richmond, VA'],
        [37.778170, -81.188155, 'Beckley, WV'],
        [38.350599, -81.633281, 'Charleston, WV'],
        [39.456252, -77.963960, 'Martinsburg, WV'],
        [39.321683, -81.440914, 'Parkersburg, WV'],
    ]

    var northeastChapters = [
        [42.734566, -73.229925, 'New England'],
        [38.9215198, -77.4801465, 'Washington D.C.'],
        [40.741895, -73.989308, 'New York, NY'],
        [41.784224, -72.7027816, 'Albany, NY'],
        [39.9527237, -75.1635262, 'Philadelphia, PA'],
    ]

    var midwestChapters = [
        [39.9622601, -83.0007065, 'Columnbus, OH'],
        [39.049907, -84.665161, 'Cincinati, KY'],
    ]

    var westChapters = [
        [21.304547, -157.855676, 'Honolulu, HI'],
        [29.7589382, -95.3676974, 'Houston, TX'],
    ]    

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's loop through the chapters and add them to the map
    
    if (region === 'southeast') {
        var regionArray = southeastChapters;
    } else if (region === 'northeast') {
        var regionArray = northeastChapters;
    } else if (region === 'midwest') {
        var regionArray = midwestChapters;
    } else {
        var regionArray = westChapters;
    }

    for (i = 0; i < regionArray.length; i++) {  
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(regionArray[i][0], regionArray[i][1]),
            map: map,
            title: regionArray[i][2],
            icon: '/docs/assets/images/map_marker.svg',
            clickable: false
        });

        // Extend the bounds to include each marker's position
        bounds.extend(marker.position);
    }

    // Now, make sure the frame uses the bounds we set from the markers
    map.fitBounds(bounds);

    // Set the zoom level based on the bounds
    map.panToBounds(bounds);

    /*
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(26.614149, -81.825768), // Fort Meyer
        map: map,
        icon: '/docs/assets/images/map_marker.svg',
        clickable: false
    });
    */
}









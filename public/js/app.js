$(function() {
  
  myGallery = new mbBgndGallery({
		containment:"body", // or "#myGalleryElement"
		timer:4000,
		effTimer:2000,
		controls:"#gallery_controls",
		grayScale:false,
		// If your server allow directory listing
		//folderPath:"elements/",
		// else:
		images:[
	 		"images/wedding-1.jpg",
	 		"images/wedding-2.jpg",
	 		"images/wedding-3.jpg",
	 		"images/wedding-4.jpg",
	 		"images/wedding-5.jpg",
	 		"images/wedding-6.jpg",
	 	],
	})
  
//  $('#tabList a').click(function (e) {
//     e.preventDefault()
//     $(this).tab('show')
//   })
   
  map = new GMaps({
    div: '#map-canvas',
    zoom: 13,
    lat: 51.415782,
    lng: -1.325848,
    width: 500,
    height: 300
  });

  map.addMarker({
    lat: 51.415782,
    lng: -1.325848,
    title: 'Bickleigh Ridge Ltd.',
    infoWindow: {
      content: '<p>Bickleigh Ridge Ltd.</p>'
    }
  });



  $('a[href="#contact"]').click(function(e) {
    setTimeout(initialise, 500);
  });

  function initialise() {
    var myMap = document.getElementById('map-canvas');
    google.maps.event.trigger(myMap, 'resize');
    map.setCenter(51.415782, -1.325848);
  };

});





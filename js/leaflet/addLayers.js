var loadGeojson = function(filepath, layergoup, icon){
    $.getJSON(filepath, function(data) {
        var jsoncastles = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name ? feature.properties.name : "Ohne Namen");
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icon });
            }
        });
        jsoncastles.addTo(layergoup);
    });
    return layergoup;
};

var createAttribution = function(mapdesc, mapsrc){
    return "Map data &copy; <a href=" + mapsrc + ">" + mapdesc + "</a> | " +
        "<a href='http://giswiki.hsr.ch/Webmapping_Clients'>About</a> | " +
        "<a href='http://www.hsr.ch/geometalab'>By GeometaLab</a>";
}

var addTileLayer = function(src, attribution, zoom){
    var layer = L.tileLayer(src, {
        attribution: attribution,
        minZoom: zoom
    });
    return layer
};
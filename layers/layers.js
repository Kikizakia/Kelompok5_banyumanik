var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_banyumaniksemarang_1 = new ol.format.GeoJSON();
var features_building_banyumaniksemarang_1 = format_building_banyumaniksemarang_1.readFeatures(json_building_banyumaniksemarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_banyumaniksemarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_banyumaniksemarang_1.addFeatures(features_building_banyumaniksemarang_1);
var lyr_building_banyumaniksemarang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_banyumaniksemarang_1, 
                style: style_building_banyumaniksemarang_1,
                interactive: true,
                title: '<img src="styles/legend/building_banyumaniksemarang_1.png" /> building_banyumanik semarang'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_banyumaniksemarang_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_banyumaniksemarang_1];
lyr_building_banyumaniksemarang_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'shop': 'shop', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'sport': 'sport', 'leisure': 'leisure', 'religion': 'religion', 'name': 'name', 'evacuation_center': 'evacuation_center', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_banyumaniksemarang_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'shop': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'operator:type': '', 'sport': '', 'leisure': '', 'religion': '', 'name': '', 'evacuation_center': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_banyumaniksemarang_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'shop': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'sport': 'no label', 'leisure': 'no label', 'religion': 'no label', 'name': 'no label', 'evacuation_center': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_banyumaniksemarang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
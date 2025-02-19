var wms_layers = [];

var lyr_OrtoimagemSalvador20162017_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapeamento.salvador.ba.gov.br/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Ortoimagem_Salvador_2016_2017",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagem Salvador 2016/2017',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtoimagemSalvador20162017_0, 0]);
var format_Segundo_piso_1 = new ol.format.GeoJSON();
var features_Segundo_piso_1 = format_Segundo_piso_1.readFeatures(json_Segundo_piso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segundo_piso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segundo_piso_1.addFeatures(features_Segundo_piso_1);
var lyr_Segundo_piso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Segundo_piso_1, 
                style: style_Segundo_piso_1,
                popuplayertitle: 'Segundo_piso',
                interactive: true,
                title: '<img src="styles/legend/Segundo_piso_1.png" /> Segundo_piso'
            });
var format_Terceiro_piso_2 = new ol.format.GeoJSON();
var features_Terceiro_piso_2 = format_Terceiro_piso_2.readFeatures(json_Terceiro_piso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terceiro_piso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terceiro_piso_2.addFeatures(features_Terceiro_piso_2);
var lyr_Terceiro_piso_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terceiro_piso_2, 
                style: style_Terceiro_piso_2,
                popuplayertitle: 'Terceiro_piso',
                interactive: true,
                title: '<img src="styles/legend/Terceiro_piso_2.png" /> Terceiro_piso'
            });
var format_Quarto_piso_3 = new ol.format.GeoJSON();
var features_Quarto_piso_3 = format_Quarto_piso_3.readFeatures(json_Quarto_piso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quarto_piso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quarto_piso_3.addFeatures(features_Quarto_piso_3);
var lyr_Quarto_piso_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quarto_piso_3, 
                style: style_Quarto_piso_3,
                popuplayertitle: 'Quarto_piso',
                interactive: true,
                title: '<img src="styles/legend/Quarto_piso_3.png" /> Quarto_piso'
            });
var format_Quinto_piso_4 = new ol.format.GeoJSON();
var features_Quinto_piso_4 = format_Quinto_piso_4.readFeatures(json_Quinto_piso_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quinto_piso_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quinto_piso_4.addFeatures(features_Quinto_piso_4);
var lyr_Quinto_piso_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quinto_piso_4, 
                style: style_Quinto_piso_4,
                popuplayertitle: 'Quinto_piso',
                interactive: true,
                title: '<img src="styles/legend/Quinto_piso_4.png" /> Quinto_piso'
            });
var format_Auditorio_quinto_andar_5 = new ol.format.GeoJSON();
var features_Auditorio_quinto_andar_5 = format_Auditorio_quinto_andar_5.readFeatures(json_Auditorio_quinto_andar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Auditorio_quinto_andar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Auditorio_quinto_andar_5.addFeatures(features_Auditorio_quinto_andar_5);
var lyr_Auditorio_quinto_andar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Auditorio_quinto_andar_5, 
                style: style_Auditorio_quinto_andar_5,
                popuplayertitle: 'Auditorio_quinto_andar',
                interactive: true,
                title: '<img src="styles/legend/Auditorio_quinto_andar_5.png" /> Auditorio_quinto_andar'
            });
var format_CEAG_6 = new ol.format.GeoJSON();
var features_CEAG_6 = format_CEAG_6.readFeatures(json_CEAG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEAG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEAG_6.addFeatures(features_CEAG_6);
var lyr_CEAG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEAG_6, 
                style: style_CEAG_6,
                popuplayertitle: 'CEAG',
                interactive: true,
                title: '<img src="styles/legend/CEAG_6.png" /> CEAG'
            });
var format_Sexto_piso_7 = new ol.format.GeoJSON();
var features_Sexto_piso_7 = format_Sexto_piso_7.readFeatures(json_Sexto_piso_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sexto_piso_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sexto_piso_7.addFeatures(features_Sexto_piso_7);
var lyr_Sexto_piso_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sexto_piso_7, 
                style: style_Sexto_piso_7,
                popuplayertitle: 'Sexto_piso',
                interactive: true,
                title: '<img src="styles/legend/Sexto_piso_7.png" /> Sexto_piso'
            });
var format_DETG_8 = new ol.format.GeoJSON();
var features_DETG_8 = format_DETG_8.readFeatures(json_DETG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DETG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DETG_8.addFeatures(features_DETG_8);
var lyr_DETG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DETG_8, 
                style: style_DETG_8,
                popuplayertitle: 'DETG',
                interactive: true,
                title: '<img src="styles/legend/DETG_8.png" /> DETG'
            });
var format_Stimo_piso_9 = new ol.format.GeoJSON();
var features_Stimo_piso_9 = format_Stimo_piso_9.readFeatures(json_Stimo_piso_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stimo_piso_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stimo_piso_9.addFeatures(features_Stimo_piso_9);
var lyr_Stimo_piso_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stimo_piso_9, 
                style: style_Stimo_piso_9,
                popuplayertitle: 'Sétimo_piso',
                interactive: true,
                title: '<img src="styles/legend/Stimo_piso_9.png" /> Sétimo_piso'
            });
var format_Biblioteca_10 = new ol.format.GeoJSON();
var features_Biblioteca_10 = format_Biblioteca_10.readFeatures(json_Biblioteca_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteca_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca_10.addFeatures(features_Biblioteca_10);
var lyr_Biblioteca_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteca_10, 
                style: style_Biblioteca_10,
                popuplayertitle: 'Biblioteca',
                interactive: true,
                title: '<img src="styles/legend/Biblioteca_10.png" /> Biblioteca'
            });
var format_Oitavo_piso_11 = new ol.format.GeoJSON();
var features_Oitavo_piso_11 = format_Oitavo_piso_11.readFeatures(json_Oitavo_piso_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oitavo_piso_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oitavo_piso_11.addFeatures(features_Oitavo_piso_11);
var lyr_Oitavo_piso_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oitavo_piso_11, 
                style: style_Oitavo_piso_11,
                popuplayertitle: 'Oitavo_piso ',
                interactive: true,
                title: '<img src="styles/legend/Oitavo_piso_11.png" /> Oitavo_piso '
            });
var group_Oitavo_Andar = new ol.layer.Group({
                                layers: [lyr_Oitavo_piso_11,],
                                fold: "open",
                                title: 'Oitavo_Andar'});
var group_Stimo_Andar = new ol.layer.Group({
                                layers: [lyr_Stimo_piso_9,lyr_Biblioteca_10,],
                                fold: "open",
                                title: 'Sétimo_Andar'});
var group_Sexto_Andar = new ol.layer.Group({
                                layers: [lyr_Sexto_piso_7,lyr_DETG_8,],
                                fold: "open",
                                title: 'Sexto_Andar'});
var group_Quinto_Andar = new ol.layer.Group({
                                layers: [lyr_Quinto_piso_4,lyr_Auditorio_quinto_andar_5,lyr_CEAG_6,],
                                fold: "open",
                                title: 'Quinto_Andar'});

lyr_OrtoimagemSalvador20162017_0.setVisible(true);lyr_Segundo_piso_1.setVisible(true);lyr_Terceiro_piso_2.setVisible(true);lyr_Quarto_piso_3.setVisible(true);lyr_Quinto_piso_4.setVisible(true);lyr_Auditorio_quinto_andar_5.setVisible(true);lyr_CEAG_6.setVisible(true);lyr_Sexto_piso_7.setVisible(true);lyr_DETG_8.setVisible(true);lyr_Stimo_piso_9.setVisible(true);lyr_Biblioteca_10.setVisible(true);lyr_Oitavo_piso_11.setVisible(true);
var layersList = [lyr_OrtoimagemSalvador20162017_0,lyr_Segundo_piso_1,lyr_Terceiro_piso_2,lyr_Quarto_piso_3,group_Quinto_Andar,group_Sexto_Andar,group_Stimo_Andar,group_Oitavo_Andar];
lyr_Segundo_piso_1.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_Terceiro_piso_2.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_Quarto_piso_3.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_Quinto_piso_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_Auditorio_quinto_andar_5.set('fieldAliases', {'Nome': 'Nome', });
lyr_CEAG_6.set('fieldAliases', {'CEAG': 'CEAG', });
lyr_Sexto_piso_7.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_DETG_8.set('fieldAliases', {'id': 'id', });
lyr_Stimo_piso_9.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_Biblioteca_10.set('fieldAliases', {'id': 'id', });
lyr_Oitavo_piso_11.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'ufba_mdt_s': 'ufba_mdt_s', 'ufba_mds_s': 'ufba_mds_s', 'MDS_MDT': 'MDS_MDT', 'Estado': 'Estado', 'Na_pgonal': 'Na_pgonal', 'Seleção': 'Seleção', });
lyr_Segundo_piso_1.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_Terceiro_piso_2.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_Quarto_piso_3.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_Quinto_piso_4.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_Auditorio_quinto_andar_5.set('fieldImages', {'Nome': '', });
lyr_CEAG_6.set('fieldImages', {'CEAG': '', });
lyr_Sexto_piso_7.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_DETG_8.set('fieldImages', {'id': '', });
lyr_Stimo_piso_9.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_Biblioteca_10.set('fieldImages', {'id': '', });
lyr_Oitavo_piso_11.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'ufba_mdt_s': 'TextEdit', 'ufba_mds_s': 'TextEdit', 'MDS_MDT': 'TextEdit', 'Estado': 'TextEdit', 'Na_pgonal': 'TextEdit', 'Seleção': 'TextEdit', });
lyr_Segundo_piso_1.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_Terceiro_piso_2.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_Quarto_piso_3.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_Quinto_piso_4.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_Auditorio_quinto_andar_5.set('fieldLabels', {'Nome': 'no label', });
lyr_CEAG_6.set('fieldLabels', {'CEAG': 'no label', });
lyr_Sexto_piso_7.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_DETG_8.set('fieldLabels', {'id': 'no label', });
lyr_Stimo_piso_9.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_Biblioteca_10.set('fieldLabels', {'id': 'no label', });
lyr_Oitavo_piso_11.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'ufba_mdt_s': 'no label', 'ufba_mds_s': 'no label', 'MDS_MDT': 'no label', 'Estado': 'no label', 'Na_pgonal': 'no label', 'Seleção': 'no label', });
lyr_Oitavo_piso_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
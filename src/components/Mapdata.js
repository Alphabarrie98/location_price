import React from "react";
import Navbar from "./Navbar";
export default function Mapdata() {
    <Navbar />
    var simplemaps_countrymap_mapdata = {
        main_settings: {
            //General settings
            width: "300", //'700' or 'responsive'
            background_color: "#FFFFFF",
            background_transparent: "yes",
            border_color: "#ffffff",

            //State defaults
            state_description: "State description",
            state_color: "#88A4BC",
            state_hover_color: "#3B729F",
            state_url: "",
            border_size: 1.5,
            all_states_inactive: "no",
            all_states_zoomable: "yes",

            //Location defaults
            location_description: "Location description",
            location_url: "",
            location_color: "#FF0067",
            location_opacity: 0.8,
            location_hover_opacity: 1,
            location_size: 25,
            location_type: "square",
            location_image_source: "frog.png",
            location_border_color: "#FFFFFF",
            location_border: 2,
            location_hover_border: 2.5,
            all_locations_inactive: "no",
            all_locations_hidden: "no",

            //Label defaults
            label_color: "#d5ddec",
            label_hover_color: "#d5ddec",
            label_size: 22,
            label_font: "Arial",
            hide_labels: "no",
            hide_eastern_labels: "no",

            //Zoom settings
            zoom: "yes",
            manual_zoom: "yes",
            back_image: "no",
            initial_back: "no",
            initial_zoom: "-1",
            initial_zoom_solo: "no",
            region_opacity: 1,
            region_hover_opacity: 0.6,
            zoom_out_incrementally: "yes",
            zoom_percentage: 0.99,
            zoom_time: 0.5,

            //Popup settings
            popup_color: "white",
            popup_opacity: 0.9,
            popup_shadow: 1,
            popup_corners: 5,
            popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
            popup_nocss: "no",

            //Advanced settings
            div: "map",
            auto_load: "yes",
            url_new_tab: "no",
            images_directory: "default",
            fade_time: 0.1,
            link_text: "View Website",
            popups: "detect"


        },
        state_specific: {
            LBR1458: {
                name: "River Gee",
                description: "default",
                color: "default",
                hover_color: "default",
                url: "default"
            },
            LBR1459: {
                name: "Gbapolu"
            },
            LBR780: {
                name: "Grand Kru"
            },
            LBR781: {
                name: "Maryland"
            },
            LBR782: {
                name: "Sinoe"
            },
            LBR783: {
                name: "Bomi"
            },
            LBR784: {
                name: "Bong"
            },
            LBR785: {
                name: "Grand Bassa"
            },
            LBR786: {
                name: "Grand Cape Mount"
            },
            LBR787: {
                name: "Lofa"
            },
            LBR788: {
                name: "Montserrado"
            },
            LBR789: {
                name: "Margibi"
            },
            LBR791: {
                name: "Nimba"
            },
            LBR792: {
                name: "River Cess"
            },
            LBR793: {
                name: "Grand Gedeh"
            }
        },
        locations: {
            "0": {
                lat: "6.310556",
                lng: "-10.804722",
                name: "Monrovia"
            }
        },
        labels: {},
        legend: {
            entries: []
        },
        regions: {}
    };
    import React from "react"
    import { ComposableMap, Geographies, Geography } from "react-simple-maps"

    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    export default function MapChart() {
        return (
            <>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
            </>
        )
    }

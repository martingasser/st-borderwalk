import {ScaleArrayFinal} from './scale.js'

const geoLoops = {

    // ----------- Borderwalk -------------------------

    // 01
    Stodlschenke: {
        geo: [47.94052498249126, 17.073410060405084],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/BC_Brizzl_01.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_02.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_03.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_04.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_05.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_06.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_07.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_08.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_08.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_09.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_10.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_11.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_12.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_13.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_14.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_15.m4a", 2],
                ],
                pauses: [[5.1, 0.5], [6.7, 1], [7.9, 1], [8.3, 0.5]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.025,
                    outer: 0.06,
                    maxVolume: 0
                } 
            },    
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/MiraStepA_02.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_04.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_05.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_07.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_10.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_11.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_12.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_13.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_14.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_16.m4a", 1],
                ],
                pauses: [[8, 1], [13.3, 1]],
                offset: 10.7,
                volumeBreakpoints: {
                    inner: 0.01,
                    outer: 0.02,
                    maxVolume: -12
                }
            },
        ]
    },

    // 2
    UrbarA_01: { 
        geo: [47.940930718116, 17.07278682062122],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 2],
                    ["sounds/samples_m4a/MiraStepA_13.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_14.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_16.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_18.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_16.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_17.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_18.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_11.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_26.m4a", 1],
                ],
                pauses: [[5.5, 1], [6, 1], [4.5, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -3
                }
                
            },   
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-3.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-2.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_14.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_15.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_16.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_27.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_51.m4a", 1],
                ],
                pauses: [[2, 1], [3, 1], [5, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.01,
                    outer: 0.02,
                    maxVolume: -12
                }
            }
        ]
    },

    // 3
    UrbarA_02: { 
        geo: [47.94142552141633, 17.07205318126608],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 2],
                    ["sounds/samples_m4a/MiraStepA_16.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_18.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_32.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_33.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_20.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_21.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_22.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_23.m4a", 1],
                ],
                pauses: [[1, 1], [2, 1], [3, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.03,
                    maxVolume: -9
                }
                
            },       
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-AH.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-AHe.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-2.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_14.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_15.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_16.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_17.m4a", 2],
                ],
                pauses: [[3, 1], [3.5, 1], [4, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.01,
                    outer: 0.02,
                    maxVolume: -9
                }
            }
        ]
    },

    // 4
    Flurgasse: { 
        geo: [47.941639488966324, 17.071489227126257],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_13.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_14.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_16.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_18.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_20.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_21.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_22.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_27.m4a", 1],
                ],
                pauses: [[1.1, 1], [2.7, 1], [3.7, 1], [5.3, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.03,
                    maxVolume: -3
                }
             
            },
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/BC_LightRustle_23.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_24.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_25.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_26.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_16.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_61.m4a", 1],
                ],
                pauses: [[2.3, 1], [3.1, 1], [4.1, 1]],
                offset: 3.1,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -12
                }
            }
        ]
    },

    // 5
    UrbarB_01: { 
        geo: [47.941679607779236, 17.070491078343753],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 2],
                    ["sounds/samples_m4a/MiraStepA_16.m4a", 2],
                    ["sounds/samples_m4a/MiraStepA_18.m4a", 2],
                    ["sounds/samples_m4a/MiraStepA_20.m4a", 2],
                    ["sounds/samples_m4a/MiraStepA_21.m4a", 2],
                ],
                pauses: [[1, 1], [2, 1], [1, 1]],
                offset: 0,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -3
                }
                
            },       
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-AH.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-AHe.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA.m4a", 2],
                ],
                pauses: [[2, 1], [3, 1], [4, 1]],
                offset: 2.3,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.03,
                    maxVolume: -12
                }
            },       
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Drone-H.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_26.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_27.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_28.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_25.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_26.m4a", 2],
                ],
                pauses: [[1, 1], [2, 1], [1, 1]],
                offset: 5.1,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.07,
                    maxVolume: -24
                }
                
            }         
        ]
    },

    // 6
    Windgasse_01: { 
        geo: [47.941793277580025, 17.069557809232116],
        loops: [
            
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_16.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_18.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_27.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_28.m4a", 1],
                ],
                pauses: [[1, 1], [4, 1], [5.5, 1]],
                offset: 0.1,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -3
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/BC_LightRustle_14.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_15.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_16.m4a", 2],
                    ["sounds/samples_m4a/BC_LightRustle_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_27.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_51.m4a", 1],
                ],
                pauses: [[2, 1], [3, 1], [5, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.01,
                    outer: 0.02,
                    maxVolume: -6
                }
            }
                    
        ]   
    },

    // 7
    Windgasse_02: { 
        geo: [47.94114134442769, 17.069393114612676],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Organ-1.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_01.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_09.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_27.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_51.m4a", 1],
                ],
                pauses: [[1, 1], [2.5, 1], [4, 1]],
                offset: 0.1,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.045,
                    maxVolume: -12
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-EsD.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-EsD-2.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_46.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_47.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_05.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_33.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_07.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_10.m4a", 1],
                ],
                pauses: [[1, 1], [2, 1], [4, 1]],
                offset: 6.3,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.045,
                    maxVolume: -3
                }
            },
        ]
    },

    // 8
    Windgasse_03: { 
        geo: [47.94065656830616, 17.069368160893113],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/EP_Rascheln_01.m4a", 3],
                    ["sounds/samples_m4a/EP_Rascheln_02.m4a", 3],
                    ["sounds/samples_m4a/BC_Brizzl_23.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_24.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_25.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_26.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_27.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_28.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_29.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_30.m4a", 1],
                ],
                pauses: [[0.1, 1], [0.27, 1], [0.5, 1], [2.1, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -3
                }
            },
           
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/BC_Bird_17.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_18.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_20.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_21.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_23.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_24.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_25.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_01.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_09.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_40.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_41.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_42.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_43.m4a", 1],
                ],
                pauses: [[1.7, 1], [2.1, 1], [3.1, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.018,
                    outer: 0.03,
                    maxVolume: -3
                }
            },
                        
        ]
    },

    /////////// Hauptstrasse /////////// 

    // 9
    HauptA_01: { 
        geo: [47.940453341861186, 17.069810084284075],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Road-Drone1.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Road-Drone2.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_12.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_13.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_14.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_15.m4a", 2],
                ],
                pauses: [[1, 1], [2, 1], [2.5, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -9
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                ],
                pauses: [[1.3, 1], [2.2, 1], [2.7, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.04,
                    maxVolume: -12
                }
            },  
        ]
    },

    // 10
    HauptA_02: { 
        geo: [47.940110681369305, 17.070764895895095],
        loops: [
            {
                type: "sample",
                files: [
                  ["sounds/samples_m4a/Brzl_Dark_01.m4a", 2],
                  ["sounds/samples_m4a/Brzl_Dark_02.m4a", 2],
                  ["sounds/samples_m4a/Brzl_Dark_03.m4a", 2],
                  ["sounds/samples_m4a/Brzl_Dark_04.m4a", 2],
                ],
                pauses: [[1.1, 1], [2.3, 1], [2.9, 1]],
                offset: 0.1,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -12
                }
            },  
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                ],
                pauses: [[1, 1], [2.5, 1], [2.7, 1]],
                offset: 3.7,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -6
                }
            },  
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/EP_Thunder_01.m4a", 1],
                    ["sounds/samples_m4a/EP_Thunder_04.m4a", 1],
                    ["sounds/samples_m4a/EP_Thunder_05.m4a", 1],
                    ["sounds/samples_m4a/EP_Thunder_03.m4a", 1],
                    ["sounds/samples_m4a/EP_Thunder_06.m4a", 1],
                ],
                pauses: [[37, 1], [43, 1], [51, 1]],
                offset: 7.7,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.075,
                    maxVolume: -6
                }
            },  
        

        ]
    },

    // 11
    HauptA_03: { 
        geo: [47.93975659647499, 17.071509421615595],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Road-Drone1.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Road-Drone2.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Road-Drone3.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_10.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_11.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_12.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_13.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_14.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_15.m4a", 2],
                ],
                pauses: [[2.75, 1], [3.2, 1], [6.2, 1]],
                offset: 0.5,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -6
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-3.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_20.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_21.m4a", 2],
                ],
                pauses: [[1, 1], [2.7, 1], [3.3, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -12
                }
            },
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/GR_BL_A_10.m4a", 1],
                    ["sounds/samples_m4a/GR_BL_A_11.m4a", 1],
                ],
                pauses: [[37, 1], [43, 1], [51, 1]],
                offset: 7.7,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.05,
                    maxVolume: -6
                }
            },  
                
        ]
    },

    // 12
    HauptA_04: { 
        geo: [47.93922356086512, 17.072765453611147],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Brzl_Dark_01.m4a", 2],
                    ["sounds/samples_m4a/Brzl_Dark_02.m4a", 2],
                    ["sounds/samples_m4a/Brzl_Dark_03.m4a", 2],
                    ["sounds/samples_m4a/Brzl_Dark_04.m4a", 2],
                    ["sounds/samples_m4a/Brzl_Dark_05.m4a", 2],
                    ["sounds/samples_m4a/Brzl_Dark_06.m4a", 2],
                ],
                pauses: [[1, 1], [2.2, 1], [3.2, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.085,
                    maxVolume: -6
                }
            },  
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                ],
                pauses: [[2.1, 1], [2.5, 1], [3.7, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.06,
                    maxVolume: -12
                }
            }, 
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/GR_BL_A_12.m4a", 1],
                    ["sounds/samples_m4a/GR_BL_A_11.m4a", 1],
                    ["sounds/samples_m4a/GR_ID_A_09.m4a", 1],
                ],
                pauses: [[37, 1], [43, 1], [51, 1]],
                offset: 7.7,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.09,
                    maxVolume: -6
                }
            },  
        ]
    },

    // 13
    HauptA_05: { 
        geo: [47.93880364522935, 17.074168362772006],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Road-Drone1.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Road-Drone2.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Road-Drone3.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_10.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_11.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_12.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_13.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_14.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_15.m4a", 2],
                ],
                pauses: [[1, 1], [2.2, 1], [3.7, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -9
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-Da.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                ],
                pauses: [[1.5, 1], [2.3, 1], [3.9, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -12
                }
            }, 
        ]
    },

    // 14
    EckLindengasse: { 
        geo: [47.93855216368571, 17.074841470959747],
        loops: [
            {
                type: "sample",
                files: [
                  ["sounds/samples_m4a/Z-BW-Rhodisch-Da.m4a", 1],
                  ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 1],
                  ["sounds/samples_m4a_extra/Creak_A.m4a", 8],
                  ["sounds/samples_m4a_extra/Creak_B.m4a", 8],
                  ["sounds/samples_m4a_extra/Creak_C.m4a", 8],
                  ["sounds/samples_m4a_extra/Creak_D.m4a", 8],
                ],
                pauses: [[1, 1], [2.7, 1], [4.3, 1]],
                offset: 1,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -12
                }
            },  
            {
                type: "sample",
                files: [
                  ["sounds/samples_m4a/Brzl_Dark_01.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_02.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_03.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_04.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_05.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_06.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_07.m4a", 1],
                  ["sounds/samples_m4a/Brzl_Dark_08.m4a", 1],
                ],
                pauses: [[1, 1], [2.9, 1], [4.3, 1]],
                offset: 2.9,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.04,
                    maxVolume: -12
                }
            },  
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                    ["sounds/samples_m4a_extra/CoilDim_01_A.m4a", 2],
                    ["sounds/samples_m4a_extra/CoilDim_01_B.m4a", 2],
                    ["sounds/samples_m4a_extra/CoilDim_01_C.m4a", 2],
                    ["sounds/samples_m4a_extra/CoilDim_01_D.m4a", 2],
                ],
                pauses: [[1.2, 1], [2.7, 1], [3.2, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -6
                }
            },  
        ]
    },

    // 15
    HauptB_01: { 
        geo: [47.93797114992436, 17.07618121514111],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Organ-2.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_12.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_13.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_14.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_15.m4a", 2],
                ],
                pauses: [[1.2, 1], [2.5, 1], [4.2, 1]],
                offset: 2,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.07,
                    maxVolume: -9
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 2],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-EsD.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-EsD-2.m4a", 1],
                    ["sounds/samples_m4a/EP_Rascheln_01.m4a", 1],
                    ["sounds/samples_m4a/EP_Rascheln_02.m4a", 1],
                    ["sounds/samples_m4a/BC_Brizzl_16.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_17.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 2],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 2],
                ],
                pauses: [[1.7, 1], [2.3, 1], [4.7, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.03,
                    maxVolume: -12
                }
            },         
        ]
    },

    // 16
    Zipfel: { 
        geo: [47.93757224117356, 17.077993429492718],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/BC_Brizzl_12.m4a", 4],
                    ["sounds/samples_m4a/BC_Brizzl_13.m4a", 4],
                    ["sounds/samples_m4a/BC_Brizzl_14.m4a", 4],
                    ["sounds/samples_m4a/BC_Brizzl_15.m4a", 4],
                    ["sounds/samples_m4a/BC_Brizzl_18.m4a", 4],
                    ["sounds/samples_m4a/BC_Brizzl_19.m4a", 4],
                    ["sounds/samples_m4a/BC_Bird_01.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_02.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_11.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_13.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_15.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_26.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_19.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_20.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_21.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_22.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_23.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_24.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_25.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_26.m4a", 1],
                ],
                pauses: [[0.2, 1], [0.45, 1], [0.6, 1], [9.2, 1]],
                offset: 1,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -6
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-EsD.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-EsD-2.m4a", 1],
                    ["sounds/samples_m4a/EP_Rascheln_01.m4a", 1],
                    ["sounds/samples_m4a/EP_Rascheln_02.m4a", 1],
                    ["sounds/samples_m4a/EP_Rascheln_03.m4a", 1],
                    ["sounds/samples_m4a/EP_Rascheln_04.m4a", 1],
                ],
                pauses: [[9.3, 1], [11.3, 1], [13.3, 1]],
                offset: 4,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.05,
                    maxVolume: -15
                }
            },         
        ]
    },

    // 17
    UrbarC_01: { 
        geo: [47.93803714183943, 17.077338319298335],
        loops: [
            {
                type: "sample",
                files: [
      
                    ["sounds/samples_m4a/BC_Bird_01.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_02.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_03.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_04.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_13.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_14.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_15.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_16.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_27.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_53.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_44.m4a", 1],
                    ["sounds/samples_m4a/BC_Flattern_48.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-2.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-3.m4a", 1],
                    ["sounds/samples_m4a/Z-HighOnly.m4a", 1],
                ],
                pauses: [[1.2, 1], [2.3, 1], [4.7, 1]],
                offset: 1,
                volumeBreakpoints: {
                    inner: 0.04,
                    outer: 0.06,
                    maxVolume: -12
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-D.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-Da.m4a", 2],
                    ["sounds/samples_m4a/KB_Wood_22.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_23.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_24.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_25.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_26.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_27.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_28.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_29.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_30.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_31.m4a", 1],
                ],
                pauses: [[4.7, 1], [5.9, 1], [7.7, 1]],
                offset: 3.2,
                volumeBreakpoints: {
                    inner: 0.03,
                    outer: 0.05,
                    maxVolume: -12
                }
            },                 
        ]
    },

    // 18
    UrbarC_02: { 
        geo: [47.93869574944466, 17.076220690238568],
        loops: [
            {    
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-2.m4a", 1],
                    ["sounds/samples_m4a/Z-BW-Rhodisch-GA-3.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_01.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_02.m4a", 1],
                    ["sounds/samples_m4a/BC_LightRustle_03.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_05.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_06.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_07.m4a", 1],
                    ["sounds/samples_m4a/BC_Bird_08.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_11.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_12.m4a", 1],
                ],
                pauses: [[2.2, 1], [3.7, 1]],
                offset: 0.1,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.04,
                    maxVolume: -12
                }
            },
              {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/Z-Wood-Loop-A.m4a", 2],
                    ["sounds/samples_m4a/Z-Wood-Loop-B.m4a", 2],
                    ["sounds/samples_m4a/Z-Wood-Loop-C.m4a", 2],
                    ["sounds/samples_m4a/KB_Wood_01.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_02.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_03.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_04.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_05.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_06.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_07.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_08.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_09.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_10.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_11.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_12.m4a", 1],
                ],
                
                pauses: [[2.5, 1], [3.75, 1], [4.3, 1]],
                offset: 3.75,
                volumeBreakpoints: {
                    inner: 0.02,
                    outer: 0.06,
                    maxVolume: -6
                }
            },
        ]
    },

    // 19
    UrbarC_03: { 
        geo: [47.93960392090753, 17.074761563410544],
        loops: [
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/BC_Bird_46.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_45.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_44.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_43.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_42.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_41.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_40.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_39.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_38.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_37.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_36.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_35.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_34.m4a", 2],
                    ["sounds/samples_m4a/BC_Bird_33.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_40.m4a", 2],
                    ["sounds/samples_m4a/BC_Flattern_41.m4a", 2],
                ],
                pauses: [[5.1, 1], [6.7, 1], [1.2, 1]],
                offset: 0.1,
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.08,
                    maxVolume: -9
                }
            },     
            {
                type: "sample",
                files: [
                    ["sounds/samples_m4a/KB_Wood_27.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_31.m4a", 1],
                    ["sounds/samples_m4a/KB_Wood_32.m4a", 1],
                    ["sounds/samples_m4a/GR_ID_A_01.m4a", 1],
                    ["sounds/samples_m4a/GR_ID_A_02.m4a", 1],
                    ["sounds/samples_m4a/GR_ID_A_03.m4a", 1],
                    ["sounds/samples_m4a/GR_ID_A_04.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_24.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_25.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_26.m4a", 1],
                    ["sounds/samples_m4a/MiraStepA_27.m4a", 1],
                    
                ],
                pauses: [[7.1, 1], [8, 1], [11.3, 1]],
                offset: 7.1,
                volumeBreakpoints: {
                    inner: 0.06,
                    outer: 0.12,
                    maxVolume: -9
                }
            },                 
        ]
    },

    
}

export {geoLoops}
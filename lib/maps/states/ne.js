namespace("nhmc");
namespace("nhmc.geo");

nhmc.geo.usGeo = $.extend(true, nhmc.geo.usGeo, {
    'Nebraska': {
        cities: {
            "Lincoln": [[644, 320], 0],
            "Omaha": [[708, 272], 1],
            "Grand Island": [[498, 309], 2]
        },
        counties: {
            'Rock County': "M384.501,97.77l1.444-1.288l4.331,1.937h4.33l2.888,0.644l4.331-1.288l2.406-2.58l1.443-0.646l2.887-1.934h0.962l1.926-1.291h3.849   l1.443-1.29h2.888l2.406-1.288v2.579h0.961v41.282h0.963v40.638h-38.016v-40.638h-0.962l-0.481-34.83L384.501,97.77z",
            'Douglas County': "M678.998,255.161h34.646l0.962,2.58l-2.405,2.58v1.291l1.925,1.936h3.851l0.962,1.933l-0.482,2.583l-2.406,1.288l-0.481-1.288   l0.963-1.291l-0.481-0.644h-0.963l-0.961,0.644l0.481,3.871l0.961,3.225v0.646l-1.443,2.58v1.289l0.481,0.647h-35.609l-1.925-1.937   l-0.961-1.289l-0.481-1.936l1.444-3.226l-0.963-2.58l-3.85-3.87v-2.58l-0.963-3.225l-3.369-1.289l-1.443-1.934h12.513V255.161z",
            'Dodge County': "M659.27,213.878h9.623v7.097v18.706h0.962v3.869h1.444v1.29l0.962-0.646v2.583h1.443v1.289h1.925v1.934h3.369v5.161h-12.512   l-2.886-0.645l-0.482-0.646l-4.33-3.227l-1.925-0.646h-4.812l-6.257,1.291l-4.812-2.581h-2.406l-2.406,0.645l-7.698-1.289v-34.187   h30.796L659.27,213.878z",
            'Box Butte County': "M53.915,131.958h58.707h2.406l0.481,40.639h3.369l0.481,10.319H61.134h-3.368v-9.674h-4.331L53.915,131.958L53.915,131.958z",
            'Lancaster County': "M627.99,295.797L627.99,295.797h39.458l-0.481,3.87v27.095v30.961H627.51v-20.642L627.99,295.797z",
            'Garden County': "M174.697,182.273v31.605h7.218v40.638l-6.255,0.645v19.994h-48.601v-19.994h-2.406v-5.16v-36.123h-2.406l-0.961-3.87l-0.481-6.451   l0.481-20.642l53.414-0.644L174.697,182.273z",
            'Dundy County': "M238.697,377.717h1.444V419l-7.699-0.646L176.622,419l-0.481-41.283H238.697L238.697,377.717z",
            'Pawnee County': "M702.096,388.038h4.812V419h-19.729h-20.211v-30.962H702.096L702.096,388.038z",
            'Franklin County': "M468.231,377.717V419h-29.835h-10.105v-41.283H468.231z",
            'Nuckolls County': "M548.11,377.717L547.63,419h-9.143h-30.316v-41.283h39.459H548.11z",
            'Nemaha County': "M733.373,357.723l0.961-0.647l0.481-3.225l0.482-0.644h1.443l1.925,2.58l-0.961,2.58l-3.369,1.288l0.481,1.291v3.225l1.925,1.288   l0.963,1.937v3.87l1.443,2.581l0.481,1.935l0.962,1.936l0.48,1.289l-0.48,1.29l-2.405,0.645v1.936h0.961l2.887-0.645l2.406,1.934   h1.925l0.962,1.29l-0.48,1.935l0.48,0.646h-40.421h-4.812l-0.481-30.317h31.759L733.373,357.723z",
            'Holt County': "M422.035,88.742l1.443-0.648h0.963l1.925-1.288l1.925-0.645l1.925-1.29l3.369-0.646l1.443-0.645l4.332-1.29l3.85-3.224l3.369-1.291   l1.925,0.645l5.294,5.807l3.368,0.646l1.444-0.646l0.961,1.289l2.888,1.289l1.925-0.646l1.925,0.646l3.369,1.937h6.255l4.812,2.58   l9.625,1.935h1.925l2.886-1.289l5.775,0.646l4.331,1.288v38.058h0.481v41.283h-40.421h-40.423h-0.961v-40.639h-0.963V91.323h-0.961   v-2.58L422.035,88.742z",
            'Hitchcock County': "M288.26,378.361h1.444V419h-49.563v-41.283l48.121,0.645H288.26z",
            'Antelope County': "M505.765,131.958h40.902v40.639v20.64l-40.421,0.646v-20.64h-0.481V131.958z",
            'Dixon County': "M618.365,93.902l3.851,0.646l0.962,1.29l-0.48,2.581l0.961,0.644h0.961l2.406-1.935h1.925l3.369,1.291l3.85,2.58l0.962,0.645v2.583   l1.443,1.287h6.737l1.925,0.646l0.481,0.647l-2.405,3.868v1.29l7.218,7.097l0.961,2.58h-9.141v10.32h-0.481v18.706v1.936h-8.662   h-16.842v-10.319V93.906V93.902z",
            'Harlan County': "M388.833,377.717h39.457V419h-38.978l0,0l-0.481-41.283H388.833z",
            'McPherson County': "M282.485,214.524l11.549-0.646l-0.481,41.283l-48.601-0.645h-12.03v-40.638L282.485,214.524z",
            'Webster County': "M468.231,377.717h0.48h38.978h0.481V419H487.96h-19.729V377.717L468.231,377.717z",
            'Buffalo County': "M468.711,295.797v40.638h-0.481v1.289l-9.143,1.936l-2.887,1.936h-1.926l-1.443,0.645l-7.218-0.645l-7.699,0.645l-2.405-0.645   l-1.927,0.645l-1.443-0.645h-3.849h-9.143l-4.331-1.29l-3.849,0.644l-3.369-0.644v-3.224l-0.961-0.646l0.481-40.638h18.766h40.423   H468.711L468.711,295.797z",
            'Colfax County': "M598.155,213.878h20.21h10.105v34.187h-2.405l-3.368,1.291l-2.888,3.223l-4.812,0.647l-3.369,2.58l-6.737,1.289l-2.405-1.289   l-3.368,1.289h-1.444L598.155,213.878L598.155,213.878z",
            'Sioux County': "M48.141,65.519l0.961,25.803h1.443l0.481,40.636h2.888l-0.481,41.284h4.331v9.674l-57.263,0.646v-72.244V65.519H48.141   L48.141,65.519z",
            'Johnson County': "M701.614,357.723l0.481,30.315h-35.129v-30.315H701.614z",
            'Furnas County': "M348.411,377.717h39.458h0.962L389.312,419h-48.602h-0.962l-0.481-41.283H348.411L348.411,377.717z",
            'Valley County': "M465.344,214.524h0.481l0.48,40.636h-39.939h-0.481l-0.481-40.636H465.344z",
            'Loup County': "M424.923,173.242v41.282l-40.902-0.646v-40.636h1.925h38.015H424.923z",
            'Cedar County': "M577.465,81.647h0.48l0.481,1.287l2.405,1.291l2.886-2.582h2.888l1.925-0.645l3.369,0.645l2.406,1.291h3.85l2.406,1.29l0.963,3.868   l4.33,1.291l1.925,0.645l0.482,2.581l5.772,1.289h4.331v48.377h-30.796v-10.321h-10.104V81.641V81.647z",
            'Dakota County': "M653.493,121.638l-0.481,1.288l1.443,1.29l4.812-1.936h1.444l3.851,4.516l3.848-0.645h4.331l1.444,1.935v3.871l-2.887,3.226v1.937   l0.962,2.58l-0.962,2.58l0.481,1.287l3.367,2.58l0.481,3.227l0.963,1.937l-32.723-0.647v-18.705h0.481v-10.322h9.144   L653.493,121.638z",
            'Red Willow County': "M289.704,378.361l49.563-0.645L339.749,419h-48.12h-1.925V378.361L289.704,378.361z",
            'Boyd County': "M488.441,66.165l2.887,5.806l0.963,1.288l5.773,1.936l2.888,2.58l3.849,1.936v11.609h0.481v2.582l-4.331-1.291l-5.774-0.646   l-2.887,1.291h-1.926l-9.625-1.937l-4.811-2.58h-6.257l-3.368-1.935l-1.925-0.646l-1.926,0.646l-2.886-1.291l-0.963-1.288   l-1.443,0.646l-3.369-0.646l-5.294-5.805l-1.925-0.646l-3.368,1.291l-3.851,3.223l-4.331,1.291l-1.443,0.646l-3.368,0.645   l-1.926,1.29l-1.925,0.646l-1.926,1.289h-0.961l-1.443,0.646V66.165h66.406H488.441z",
            'Lincoln County': "M293.554,255.161h40.902h1.444l-0.481,40.636h1.443v40.638l-49.082,0.646h-40.902v-36.122v-5.162h-1.925v-41.281L293.554,255.161   L293.554,255.161z",
            'Boone County': "M506.246,193.881l40.421-0.646l0.481,20.642v25.156h-4.812v1.936h-13.955v1.937h-2.887l-0.48,1.934h-18.286v-30.962h-0.481V193.881   L506.246,193.881z",
            'Fillmore County': "M587.568,337.081v40.636H548.11h-0.48v-40.636H587.568L587.568,337.081z",
            'Scotts Bluff County': "M57.765,182.917h3.369v30.961h-0.481v5.161H0.502v-35.478L57.765,182.917L57.765,182.917z",
            'Seward County': "M587.568,295.797h40.422l-0.48,41.284h-39.941V295.797z",
            'Logan County': "M333.013,213.878h1.443v41.283h-40.902l0.481-41.283H333.013z",
            'Sheridan County': "M111.179,66.165h62.075v25.157l1.443-0.646v40.637h2.406v41.284h2.886v10.319l-5.292-0.644l-53.414,0.644h-1.925l-0.482-10.319   h-3.368l-0.481-40.639h-2.406V91.322h-1.444V66.165H111.179z",
            'Blaine County': "M333.013,173.242h8.661h42.347v40.636h-49.564h-1.443V173.242z",
            'Knox County': "M564.471,82.291l2.406-0.646l0.481,2.58h1.443l3.849-0.645l1.926-1.29l2.887-0.646v50.312h-30.796h-40.903h-0.481V93.901v-2.582   h-0.481V79.709l6.255,1.936l5.294,3.224h2.888l0,0l1.925,1.936l5.292,4.515l0.963,1.291l3.85,1.288l4.812-1.288l3.369-1.935   l2.888-4.517l0.961-3.225l1.443-1.289h2.406l3.368,3.224h1.443h1.445l2.405-2.581h0.962l1.925,0.646l0.963,1.935l0.961,0.647h1.445   L564.471,82.291L564.471,82.291z",
            'Keith County': "M232.922,254.517h12.03v41.28h1.925v5.162h-70.736l-0.481-25.802v-19.996l6.255-0.645H232.922L232.922,254.517z",
            'Custer County': "M424.923,214.524h0.48l0.481,40.636h0.481l-0.481,40.636h-18.768h-70.255h-1.443l0.481-40.636h-1.444v-41.283h49.564l40.9,0.646   H424.923z",
            'Dawson County': "M336.862,295.797h70.255l-0.48,40.638l0.962,0.646v3.224l-11.067-1.289l-4.812,0.646l-3.849-1.288l-5.294-1.937h-24.541h-21.174   V295.8L336.862,295.797z",
            'Hooker County': "M282.004,173.242l0.481,41.282l-49.563-0.646h-1.925v-41.281L282.004,173.242z",
            'Jefferson County': "M627.51,377.717L627.028,419h-7.219h-32.241l0,0v-41.283H627.51z",
            'Greeley County': "M465.823,214.524l40.423-0.646h0.481v30.962v10.32h-39.94h-0.481L465.823,214.524z",
            'Gage County': "M666.967,357.723v30.315V419h-29.835H619.81h7.219l0.481-41.283V357.72h39.457V357.723z",
            'Kearney County': "M468.231,337.726l0.48,39.993h-0.48h-39.94v-36.122h3.849l1.444,0.646l1.925-0.646l2.406,0.646l7.698-0.646l7.219,0.646   l1.444-0.646h1.925l2.888-1.936l9.143-1.934V337.726z",
            'Keya Paha County': "M338.786,66.165h58.708h24.541v22.577l-2.405,1.288h-2.888l-1.443,1.289h-3.849l-1.927,1.29h-0.961l-2.888,1.935l-1.443,0.646   l-2.406,2.58l-4.33,1.29l-2.888-0.646h-4.331l-4.331-1.935l-1.444,1.289h-2.404l-3.851-1.289l-5.773-0.646l-1.443-0.646   l-1.926-0.646l-0.962-1.937l-2.405,0.646l-6.737-0.646l-1.444-1.288l-2.406-0.646h-5.293l-5.294-1.935l-0.481-1.29v-0.646h-0.481   l-0.481-1.289l-1.443,0.646v-0.646l-2.888-1.288V66.163l0,0V66.165z",
            'Otoe County': "M666.967,326.762h55.338l-0.48,1.933l-3.369,1.935l-0.963,1.936l0.481,1.289v0.647l2.888,1.934l0.963,3.225l1.443,0.646   l2.406,0.647l1.925,1.934l0.481,3.226l1.925,1.934l-0.481,1.291l-0.962,0.645l-0.961,1.936l0.961,1.935v2.582l1.443,0.644h2.406   l0.963,0.646h-31.76h-34.646L666.967,326.762L666.967,326.762z",
            'Richardson County': "M747.327,388.038l2.406,1.937h2.888l0.961,0.644l0.962,1.937v0.645l-0.962,2.581v1.289l1.444,1.937l2.405,1.935l0.48,2.58   l2.406,0.646l0.963,0.645v1.291l-1.443,1.936v1.935l-0.963,1.934l0.481,3.225l1.925,0.646h3.85l0.962,1.29l1.926,0.646L768.5,419   h-2.406h-39.459h-19.729v-30.962H747.327L747.327,388.038z",
            'Frontier County': "M358.035,336.435v30.963H347.93l0.481,10.319h-9.144l-49.563,0.645h-1.444l-0.481-39.989v-1.291l49.082-0.646L358.035,336.435   L358.035,336.435z",
            'Deuel County': "M175.66,275.155l0.481,25.804l0,0h-50.045v-5.162h0.963v-20.642H175.66L175.66,275.155z",
            'Howard County': "M506.728,255.161L506.728,255.161l0.48,40.636h-38.496h-2.406l0.481-40.636H506.728L506.728,255.161z",
            'Cuming County': "M618.365,172.596h17.322h23.58v9.03v32.252h-30.796h-10.106V172.596L618.365,172.596z",
            'Hayes County': "M246.877,337.081h40.902v1.287l0.481,39.993l-48.12-0.645h-1.444l-0.481-40.636H246.877L246.877,337.081z",
            'Thayer County': "M587.568,377.717V419H547.63l0.48-41.283H587.568L587.568,377.717z",
            'Thurston County': "M676.592,151.31l2.404,1.934v1.937l0.481,1.288l-1.443,1.289l-1.444,0.646l0.962,5.806l2.406,1.937l0.962,1.935l1.926,0.646   l1.443,1.29v1.289l-0.963,4.516l0.481,1.936h-3.367v3.868l-13.474-0.645l-0.963,0.645h-6.737v-9.029h-23.579l-0.48-19.997h8.661   v-1.935l32.721,0.644L676.592,151.31z",
            'Chase County': "M238.215,337.081l0.481,40.636h-62.556v-10.319v-30.316h62.076H238.215z",
            'Phelps County': "M407.599,340.305l3.369,0.644l3.849-0.644l4.331,1.29h9.143v36.122h-39.457h-0.963v-39.349l3.849,1.29l4.812-0.646l11.067,1.288   V340.305z",
            'Brown County': "M384.501,97.77l0.481,34.833h0.961v40.639h-1.925h-42.346v-40.639h-1.444V91.322h-1.443v-7.097l2.888,1.288v0.647l1.443-0.647   l0.481,1.291h0.481v0.646l0.481,1.289l5.293,1.937h5.293l2.406,0.644l1.443,1.291l6.737,0.646l2.406-0.646l0.962,1.935l1.925,0.646   l1.445,0.646l5.773,0.645l3.849,1.289H384.501L384.501,97.77z",
            'Wheeler County': "M465.344,173.242h40.421h0.481v20.639v19.997l-40.421,0.646h-0.481V173.242z",
            'Burt County': "M683.811,177.756l1.443,1.29h1.444l1.443,0.646v1.287l-0.963,1.292l-0.48,0.644l0.48,1.29h0.963l0.963-1.29h1.925h0.481l0.48,2.581   l3.369,0.646l0.961,1.289l-0.961,2.58l0.481,3.225l-1.927,1.291l1.927,5.16l2.404,1.288v3.226l0.481,0.646l2.405,1.291l0.963,1.289   v1.289l-3.369,5.805l0.481,1.289l2.406,1.291v1.288l-3.849,0.647l-0.481,1.933h-28.393v-7.094h-9.624v-32.252h6.738l0.961-0.647   l13.475,0.647v-3.87h3.367L683.811,177.756z",
            'Grant County': "M179.991,172.596h51.007v41.282h-49.083h-7.217v-31.605l5.292,0.645V172.596L179.991,172.596z",
            'Cheyenne County': "M60.171,250.001h64.481v5.16h2.406v19.994v20.642h-0.963v5.162h-2.886H59.208v-5.162h0.481v-40.636h0.481V250.001L60.171,250.001z",
            'Pierce County': "M546.667,131.958h30.798h10.104v10.322v30.316h-40.901V131.958z",
            'Platte County': "M587.568,213.878h10.587l-0.48,43.218h-3.369l-2.406-1.936l-1.925,0.646l-2.406-0.646l-7.218,2.58l-2.886,1.291h-3.369l-4.331,2.58   l-2.406,0.646v-7.097h-9.143v-16.125h-11.067v-25.157H587.568L587.568,213.878z",
            'York County': "M547.148,295.797h40.42v41.284H547.63L547.148,295.797z",
            'Wayne County': "M587.568,142.28h30.797v10.318h16.842l0.48,19.998h-17.322h-30.797V142.28L587.568,142.28z",
            'Banner County': "M0.501,219.04h60.149l-0.481,30.961v5.16h-0.481H0.5V234.52v-15.48H0.501z",
            'Sarpy County': "M678.998,279.027h35.608l5.773,0.645l1.444,1.29l-0.481,0.646h-1.925l-0.963,1.29v1.29l1.445,2.581v4.515l-1.445,2.58v1.29   l-1.925-1.29l-1.925,0.646h-3.368l-1.926,0.646l-3.851-1.289h-2.887l-4.33,1.935l-3.369,3.871l-6.255,1.934l-2.406-2.58   l-4.331-0.645l-1.925-2.58l-1.925-4.517l0.48-1.289l1.926-1.936l-0.481-1.936v-2.58l-0.963-4.516H678.998z",
            'Stanton County': "M587.568,172.596h30.797v41.282h-20.21h-10.587V172.596z",
            'Thomas County': "M282.004,173.242h51.009v40.636h-38.978l-11.548,0.646l-0.481-41.282H282.004z",
            'Washington County': "M668.892,220.975h28.392l2.406,4.516l-1.926,4.513l0.963,1.292l1.925,1.287l0.481,1.291l-1.443,1.936v1.29v1.289l1.443,1.288   l3.369,0.646l0.48-1.289l0.481-1.934h1.925l0.962,1.289l0.48,1.934l-0.48,1.29l-1.926,1.935v1.29l4.812,1.935h2.405l1.443,1.936   l-0.961,1.933v2.582l-0.481,1.934h-34.646v-5.16h-3.369v-1.936h-1.925v-1.288h-1.443v-2.58l-0.963,0.646v-1.29h-1.443v-3.87h-0.963   v-18.706V220.975z",
            'Clay County': "M547.63,337.081v40.636h-39.459h-0.481v-40.636H547.63L547.63,337.081z",
            'Dawes County': "M92.892,66.165h18.287v25.157h1.443v40.636H53.915h-2.886l-0.481-40.636h-1.444l-0.962-25.803l44.752,0.646H92.892z",
            'Cherry County': "M173.253,66.165h75.067h90.466v18.061v7.097h1.444v41.281h1.443v40.639h-8.661h-51.007l-51.007-0.646h-51.009h-2.886v-41.284   h-2.406V90.675l-1.443,0.646V66.165z",
            'Butler County': "M587.568,255.161l2.406,0.646l1.925-0.646l2.406,1.936h3.369h1.443l3.369-1.29l2.404,1.29l6.737-1.29l3.368-2.58l4.812-0.646   l2.888-3.225l3.368-1.291h2.406L627.99,295.8l0,0h-40.422V255.161L587.568,255.161z",
            'Arthur County': "M230.998,213.878h1.925v40.638h-51.007v-40.638H230.998z",
            'Hamilton County': "M547.148,280.962v14.835l0.481,41.284h-39.941h-0.481v-20.642l5.773-7.097l4.332-3.224l3.368-4.516l1.927-1.29v0.646l1.925-0.646   l5.773-6.451l3.851-3.224v0.645h0.961l6.737-3.225l2.406-2.58L547.148,280.962L547.148,280.962z",
            'Kimball County': "M59.69,255.161v40.636h-0.481v5.162H42.366H0.502v-45.798H59.69L59.69,255.161z",
            'Gosper County': "M358.035,336.435h24.541l5.294,1.934v39.349h-39.459l-0.481-10.319h10.105V336.435L358.035,336.435z",
            'Perkins County': "M246.877,300.957v36.124h-8.662h-62.075v-6.452v-29.672l0,0H246.877L246.877,300.957z",
            'Madison County': "M587.568,172.596v41.282h-40.42l-0.481-20.642v-20.64L587.568,172.596L587.568,172.596z",
            'Morrill County': "M119.358,182.917h1.925l-0.481,20.64l0.481,6.451l0.963,3.87h2.406v36.123H60.171l0.481-30.961v-5.161h0.481v-30.961H119.358z",
            'Hall County': "M468.711,295.797h38.496v20.643v20.642l-38.496-0.646V295.797L468.711,295.797z",
            'Garfield County': "M465.344,173.242v41.282h-39.94h-0.48v-41.282H465.344z",
            'Saline County': "M627.51,337.081v20.642v19.994h-39.941v-40.636H627.51z",
            'Cass County': "M666.967,299.667h10.106v-3.87h2.887l1.926,2.582l4.329,0.646l2.406,2.58l6.256-1.934l3.368-3.871l4.331-1.937h2.888l3.851,1.291   l1.925-0.646h3.368l1.926-0.646l1.925,1.291l1.925,2.58l-0.963,3.226l3.369,2.58v1.935l-0.481,1.937v1.935l0.481,1.936l1.925,1.934   l-0.481,1.936l-2.406,1.29l-0.48,1.289l0.48,2.582l-0.48,3.223l0.962,3.229h-55.339v-27.095H666.967z",
            'Sherman County': "M466.787,255.161l-0.481,40.636h-40.421l0.481-40.636h39.939H466.787z",
            'Nance County': "M547.148,239.036h11.066v16.125v9.676h-17.323l0.481,2.58l-13.955-0.646v1.936h-4.33v1.934l-14.917-0.646V255.16h-1.443l0,0v-10.32   h18.286l0.48-1.934h2.887v-1.937h13.955v-1.936h4.812V239.036z",
            'Saunders County': "M666.485,255.161l1.443,1.936l3.369,1.288l0.963,3.227v2.58l3.85,3.87l0.963,2.58l-1.444,3.226l0.481,1.934l0.961,1.291   l1.925,1.936l0.963,4.516v2.58l0.481,1.936l-1.927,1.936l-0.48,1.288l1.926,4.515h-2.888v3.869h-10.104l0.481-3.869H627.99   l0.481-47.731l7.699,1.287l2.404-0.644h2.408l4.811,2.58l6.257-1.288h4.812l1.925,0.645l4.331,3.225l0.481,0.646l2.888,0.645   H666.485z",
            'Polk County': "M567.358,262.255l2.406-0.646l4.331-2.58h3.369l2.886-1.288l7.218-2.58v40.636h-40.42V280.96l3.367-2.58l-0.481-0.646l3.852-5.161   l2.886-1.934l5.774-5.807l4.812-0.645v-1.936V262.255z",
            'Merrick County': "M558.215,255.161h9.144v7.097v1.935l-4.812,0.646l-5.775,5.804l-2.886,1.936l-3.852,5.162l0.481,0.646l-3.368,2.58l-2.887,4.517   l-2.405,2.58l-6.737,3.227h-0.963v-0.646l-3.85,3.224l-5.775,6.452l-1.925,0.644v-0.644l-1.925,1.287l-3.369,4.518l-4.331,3.225   l-5.773,7.096v-20.642l-0.481-40.635h1.443v14.835l14.918,0.646v-1.937h4.331v-1.935l13.954,0.646l-0.481-2.58h17.323v-9.675   L558.215,255.161z",
            'Adams County': "M468.711,336.435l38.496,0.646h0.481v40.636h-38.978l-0.481-39.993v-1.288L468.711,336.435L468.711,336.435z"
        }
    }
});
namespace("nhmc");
namespace("nhmc.geo");

nhmc.geo.usGeo = $.extend(true, nhmc.geo.usGeo, {
    'Hawaii': {
        cities: {
            "Honolulu": [[342, 131], 0],
            "Hilo": [[708, 374], 1],
            "Wailuku": [[514, 198], 2]
        },
        counties: {
            'Honolulu County': "M304.654,87.418v-1.604l5.179-5.614l4.436-2.406l-0.738-0.801h2.218v-0.803l2.221,0.803l2.959,1.602L321.666,81l1.479,0.803l0,0   l1.479,3.209h1.481l-1.481,3.208l1.481,1.603l1.479,1.604l2.221,3.207l0.738,0.803l0.74,2.405v0.803l0.738-0.803h2.219l1.479,2.406   l0.741,3.208l-0.741,2.407h-1.479v0.802l1.479,5.614h0.741l0.738,0.803h1.481l0.738,3.208l1.479,1.604h1.478l0.742,1.603h1.478   l1.48-3.208l-1.48-0.802v-1.604l0.741-0.802l3.698,0.802l1.479-0.802h0.738l-0.738,1.603l-1.479,0.804l-0.741,3.208l1.479,2.406   h2.221l1.478,2.405l-0.738,3.208l1.48,3.208l5.177,3.208l0.739,1.604h1.48l-0.74,1.603l-6.654,4.812l0.738,0.803h-2.221v-1.603   l-1.478-1.604l-5.915,1.604l-4.438,2.406h-2.219l-1.479-0.804l-0.742-2.404l-1.479-0.804h-0.737l-0.743-0.803v-0.802h-2.218   l0.739-3.208h-1.478l-0.741-0.803h-1.479v-0.803l-2.959,0.803l-0.739,1.603l-5.178-0.802l-1.479-2.406l0.738-2.406l0.74-0.801   h2.221v-1.604l0.737-0.803l-1.479-2.406h-2.219h-1.479l0.74,1.604l-2.219-1.604l-0.737,0.805l0.737,1.602h1.479l0.74,4.01   l-2.219-1.603v-1.604l-1.48,0.804l-1.479-3.208l-1.479,0.802l0.739,1.603h-0.739l0.739,0.804h2.219l2.219,1.602l1.48,3.209   l-0.74,1.604l-11.094,2.405l-6.654,0.803l-2.22-4.009l-2.219-7.218l-1.479-2.406l-3.699-2.406l-1.479-5.613l-2.957-2.406h-0.742   l-0.738-2.405h-1.479v-8.019l-0.742-1.604l-5.916-4.812l8.874-0.802l1.479-1.604l1.481,0.802h8.135l1.479,0.803l0.742-0.803   l1.478-1.603l-0.74-0.804l0.74-0.801l5.178-4.009H304.654z    M317.966,126.714l1.479-0.802h0.738l-1.479,1.604L317.966,126.714L317.966,126.714z    M329.056,134.732v-0.802l1.481,1.603h-1.481V134.732L329.056,134.732z",
            'Maui County': "M445.905,153.179v1.604l1.479,0.803h4.439v1.603l2.957,1.604l0.742-0.804l2.957,4.011h2.958v-1.604l0.741-0.802l-3.699-2.406   l0.739-1.604l2.96,1.604l0.741-1.604l1.479,0.803h1.479h0.737l2.961-0.803l0.737,0.803l4.439-1.604l1.479,1.604l2.22-1.604h4.437   l0.742,0.803v1.603l4.437-0.802L485.111,162h-0.743l-1.479,2.406l-2.957,3.208l-2.956,2.404l-3.698,0.805l-4.438,2.404h-1.479   l-1.478,0.804l-17.752-4.812h-2.216l-1.482-2.406l-2.958-1.604h-5.178l-0.741-0.802l-5.177,1.603h-8.873l-7.395,1.604l-6.656-0.804   l-1.476-2.404l3.694-6.416l4.438-2.405l0.74-1.604v-2.407l-1.479-4.008l4.438,0.802l2.219-0.802l3.697,3.208h2.957l2.221,0.802   l2.218-0.802l2.222,0.802h2.217l2.221,0.803l8.135,0.803L445.905,153.179z    M496.196,179.646l0.737-1.604l0,0v-1.604h4.439l1.479-0.802h1.479l0.741,1.604l3.695,1.603v2.405l0.741-0.802l2.22,2.406h0.738   l0.74,3.208l1.479,1.604v2.406h1.479l0.741,3.208h2.219l0.74,3.208h0.739v-0.802h2.957l2.959-1.604h2.221l4.438-1.603l2.957-3.208   l1.479,0.802l1.48-1.604h2.22l0.74,0.803l2.957-0.803l2.22,1.604l0.739-0.802l1.48,1.603v-0.802l3.696,0.802v3.208l1.479-0.802   l0.737,1.604l1.483,1.603v0.803l0.736,0.803l3.696,1.604v0.803l1.479,0.802l2.961-0.802l0.737,1.603l0.741,4.01h1.479l2.959-0.802   l3.697,3.208l1.479-0.804l4.439,2.406l2.22,1.604l1.479,1.604l1.479,1.604h-0.741l0.741,2.407l-1.479,2.404l0.738,1.604   l-2.958,4.812l-2.956,0.803l-3.697,4.812l-2.221,0.802l-0.74-0.802l-2.217,2.406l-1.482-0.802l-3.696,3.208l-5.912-0.804   l-2.221-0.803l-2.96,0.803l-7.394,4.01l-2.218,0.802l-0.741,0.803h-8.135l-2.959,1.604l-1.48-0.802h-4.438v-2.406l-1.479-0.803   v1.604l-0.738-0.802l-1.48-1.604v-1.604l-1.479-2.406l1.479-1.604l-0.741-7.216l-1.479-8.822l-1.479-4.812l-4.439-1.604   l-3.696,4.01l-3.695-3.208h-3.697l-2.957-2.405h-2.958l-1.481-4.011h-1.479l-3.695-5.614l-1.479-1.602l0.74-2.407l-1.48-1.603   v-4.011l3.695-8.821l2.961-0.803L496.196,179.646z    M446.647,190.873h3.695l8.136,0.802l3.699,1.604l8.872,8.021l2.961,5.613l0.739,1.603l-5.179,7.218h-2.219l-4.438,4.009   l-0.739-0.803l-4.436,0.803l-0.743-0.803l-1.479,0.803h-1.479h-1.479l-2.22-4.811l-0.741-2.406v-5.614l-1.479-3.208l-0.738-1.604   l-2.96-1.604l-2.217-0.803l-1.481-2.406l0.74-4.009l5.18-2.405H446.647z    M499.153,242.2l5.178-3.209h2.219l2.959,1.604l1.478,1.604v1.603l-0.737,0.804l-1.481,3.208l2.961,0.802v1.604l-1.479,1.604   l-0.74-0.803l-2.959,0.803l-1.478,1.602l-1.482-2.404l-1.48,1.603l-0.736-0.802l-3.695,1.604v-1.604h-0.742l-0.739,1.604   l-2.219,0.803l-2.218-0.803v-0.803l-2.221-1.603l0.74-2.406l2.218-2.406l4.438-1.604l2.22-2.404L499.153,242.2z",
            'Kauai County': "M81.31,12.029l2.22-1.603l2.96-0.802l3.696-2.406h2.217l8.138-6.416h2.22L103.5,0l4.439,4.01h1.479l1.479,0.803l0.74-3.209   l1.479-0.803l2.958,0.803h2.958l1.481,0.803l0.738-1.604h2.22L124.209,0l0.741,1.604h2.22l-0.742,0.803l5.178,0.802l5.178,5.614   h-0.738l0.738,0.803v3.208h1.481l0.738,2.405v3.209l-1.479,0.803l-2.22,8.02h-2.219l0.741,8.02h-0.741v0.803l1.481-0.803   l-0.741,1.604v4.009h-1.479l-0.741-0.802l-0.738,0.802h-0.74v0.804h1.479v1.603l-4.436,3.208v0.803l-1.48,0.803l0.739,0.803h-2.22   l-1.479,1.603l-4.437,3.208l-5.178-2.405h-1.479l-2.96-0.803l-0.738,0.803l-1.481-0.803l-0.738,0.803l-7.396-3.208l-0.741,1.604   h-0.738l-5.178-4.812l-0.741-2.405h-1.478l-1.479-1.604l-5.178-0.801l-1.481-1.604l-3.696-0.803l-5.914-6.416l-0.741-2.406   l1.479-1.604l0.741-3.209l5.177-4.811l1.479-5.615l1.479-1.604L81.31,12.029z    M31.761,30.477H32.5l-0.739,0.803l-0.74-0.803l0,0H31.761z    M32.502,33.684v0.803h1.479l1.482-0.803l1.479,2.406v1.604l-1.479,0.803l-2.22,3.209v4.008l1.479,3.209l-4.439,3.208h-2.958   l-2.958,0.804l-5.178,8.02l-0.741,0.803l0.741,1.603l-1.479,1.604v1.604l-0.741,0.802l-1.479-1.604h-1.479l-1.481-2.405h-1.479   l0.741-0.803l-1.479-0.802l0.738-4.01l2.22-4.01l0.741-3.208l4.437-5.614l3.696-0.802v-0.802l2.96-0.803l2.218-2.406l1.479-1.604   l0.74-3.208l2.958-1.604H32.502z",
            'Hawaii County': "M605.645,287.108l0.742,0.803l3.697,0.804l0.741,1.602l5.913,1.604l0.741,1.604h2.221v3.208l10.353,5.614l2.956,3.208l2.962,0.805   l0.738,1.602l1.479,1.604l3.698-1.604l5.178,0.802l2.22,1.604h2.221l3.695,2.404l1.479-0.801l2.959,1.603l8.876,5.614l3.695,0.804   l2.959,1.602l0.739,1.604l5.914,1.604l5.18,4.811l3.697,1.604l0.737,1.604l3.697,1.603l2.959,3.21l1.479,0.802l0.738,2.406   l1.481,0.802l0.739,2.404l2.957,1.604l1.481,2.406v3.21l-0.741,3.206l0.741,1.604l-0.741,4.812l0.741,6.416h1.479l1.479-1.604   v1.604l1.479-2.406l5.179,0.803l1.479-0.803l0.741,1.604l2.957,5.614l-0.738,3.208l0.738,4.812l2.96,2.406l0.738,1.603l2.958,2.405   l2.961,3.21l7.396,3.206l5.915,4.814l-1.482,0.802l-0.737,2.404h0.737l-2.957,5.616l-12.573,8.822l-4.437,5.614l-7.395,4.81   l-2.219,0.804l-3.697,0.803l-2.219,2.406l-2.959,0.802l-2.96,2.403h-3.696l-0.738,1.604l-6.655,0.804l-8.136-2.408l-0.742,0.805   l-2.958,0.802l-9.613,8.822l-2.958,0.804l-1.479,0.803l-2.961,0.802l-4.437,5.614l-5.917,1.604l-2.221,1.603v0.804l-2.216,1.602   l-2.221,3.208l-1.479,0.803v5.616l-2.961,2.403l-0.738,2.406l-0.74,0.802l-2.219,4.812h-2.218l-0.742,3.208h-1.478v1.604   l-2.221,0.802l-0.738,1.604h-0.739L625.61,486v-4.008l-1.479-1.604l-7.396-3.208l-8.137-7.218l-7.395-0.803l-2.218-1.602   l-0.74-4.01h-0.74l-0.739-2.406h-1.479l-0.74-4.812v-3.208l0.74-1.602v-0.803h-0.74l1.48-4.01l0.739-11.229l1.479-1.604v-11.229   l-1.479-4.812l-0.739-0.802l-1.48-2.406l0.74-1.603l-1.48-3.21l-0.738-4.01v-3.206l-2.958-0.802v-1.604l-2.219-3.21l0.737-3.206   v-0.802l-1.478-0.805l0.74-1.602h-0.74l-0.739-5.616l-2.22-4.81l-4.439-1.604l-0.738-2.406l0.738-1.604h-0.738v-2.406l-2.22-0.802   v-3.208l-1.48-0.803v-0.802l1.48-0.804l-0.741-4.811l2.22-3.208l1.479-0.804l2.96-4.008h1.479v-1.604l2.22-2.406l2.217-1.602h4.439   v-3.208l2.219-1.604l0.74-1.604h1.479l-0.739-0.802l1.479-1.604l0.74-2.406h0.738v-1.604l1.479,0.804l-0.737-1.604l2.957-3.208   h1.479l0.74,0.802l0.739-4.811v-4.01l-2.217-4.01l-1.482-0.803v-1.604l-1.479-0.802l-1.479-3.208l-1.479-0.803l-1.479-7.218v-4.008   l-0.739-0.803l0.739-8.02l5.179-4.01h3.697L605.645,287.108z",
            'Kalawao County': "M459.217,155.585l-0.74,1.603l3.698,2.407l-0.739,0.802V162h-2.959l-2.959-4.01l-0.741,0.803l-2.957-1.604v-1.603h-4.438   l-1.48-0.804v-1.602l2.96,0.802l1.479-0.802v-3.208l1.479-1.604l1.48,1.604l2.218,4.81l2.959,0.804L459.217,155.585   L459.217,155.585z"
        }
    }
});
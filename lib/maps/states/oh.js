namespace("nhmc");
namespace("nhmc.geo");

nhmc.geo.usGeo = $.extend(true, nhmc.geo.usGeo, {
    'Ohio': {
        cities: {
            "Columbus": [[354, 268], 0],
            "Cleveland": [[486, 65], 1],
            "Cincinnati": [[192, 387], 2]
        },
        counties: {
            'Medina County': "M486.484,95.265l-0.567,39.445l-45.324-0.745h-5.099l0.566-9.676v-9.675h10.198v-8.931h10.197v-9.676h10.197l19.829-0.745   L486.484,95.265z",
            'Lake County': "M556.735,17.117v18.607h-10.197v10.42h-19.829v9.676h-10.198h-9.631v-8.932l4.533-5.21l5.666-5.21l10.764-6.697h2.267l2.267-0.745   l12.464-6.698l11.897-5.211H556.735z",
            'Stark County': "M516.511,134.71h31.727v11.908v23.071h-11.896v0.745h-3.967v9.676h-7.932h-12.465v-1.488h-2.267l-1.132,1.488l-18.696,2.232v-4.466   v-33.49l23.795,1.486l0.566-11.162L516.511,134.71L516.511,134.71z",
            'Williams County': "M205.474,37.213v11.908h1.699v14.141h4.533l-0.565,3.721l0.565,8.188h-48.157V61.029V38.7L205.474,37.213L205.474,37.213z",
            'Coshocton County': "M434.36,206.903l49.289,1.487v10.42h9.632l-0.566,20.096h-4.532l-0.566,9.676l-4.531-0.745l-48.723-1.488l0.566-9.676h-1.7   L434.36,206.903L434.36,206.903z",
            'Hocking County': "M415.098,315.564l-0.566,8.188l11.897,0.745v3.721l10.765,0.745l-0.567,12.652l-11.897-0.744l-1.132,11.908l-23.229-1.488v2.978   l-12.464-0.744v2.232l-11.898-0.745l1.133-14.141l1.133-11.164v-2.232l11.332,0.744v-5.954l13.03,0.745l0.566-8.188l11.897,0.745   V315.564z",
            'Fayette County': "M282.525,307.378l41.357,2.978l-1.132,24.56l-11.331,18.607h-22.096l1.132-23.071l-9.631-0.745L282.525,307.378L282.525,307.378z",
            'Morgan County': "M445.691,299.935l39.092,2.232h6.232l-0.567,11.909l6.233,0.744l-0.566,10.421l-10.198-0.744l-2.832,0.744v2.978l-0.566,1.488   v2.977h1.7v6.698l-5.667-0.745l0,0l-2.267-0.745h-3.965l-0.567,5.955h-1.699l-22.097-1.488l0.567-12.651h1.133l1.699-23.072   l-5.666-0.745v-5.953L445.691,299.935z",
            'Van Wert County': "M205.474,133.967v11.907h6.232v5.954v5.955h-6.232l0.566,17.861h-6.232v-5.954h-35.692l-0.566-26.048v-8.931L205.474,133.967z",
            'Clermont County': "M219.639,368.407l26.627,1.488h1.132l-0.565,11.908l-5.667,53.586h-2.267l-13.03-3.722l-2.267-1.488l-0.567-2.232v-5.953   l-0.566-2.978l-5.665-8.188l-1.133-5.955l-1.7-2.978l1.7-20.839l2.267-3.721l-0.566-1.487l-2.833,0.745l-1.133-2.233   L219.639,368.407L219.639,368.407z",
            'Franklin County': "M332.948,249.325l41.924,2.232l-1.133,20.838h-0.565l-0.567,4.466h-2.833v3.722l1.7,0.745l-0.566,5.955v5.953l-2.267-0.745v4.466   l-43.625-2.978l-0.567-14.141l1.7-0.745l-0.566-2.232l-1.132-2.232l-0.567-4.466l-1.132-2.232l1.132-2.232l-0.566-2.233v-1.487   l5.1,0.744l0.565-8.186h3.967V249.325L332.948,249.325z",
            'Greene County': "M241.167,289.516l11.897,0.745v2.232l11.897,0.745l-0.566,2.978l9.064,1.488l0.567,0.745l9.065,1.487l-0.567,7.443l-1.699,22.328   l-31.728-2.232l-14.163-1.488l2.267-34.979h3.966v-1.488L241.167,289.516z",
            'Mercer County': "M199.808,175.644v44.654l2.267,0.745h-38.525v-29.77l0.566-21.583h35.692V175.644L199.808,175.644z",
            'Perry County': "M406.033,278.352h4.53v0.744l18.697,1.488l7.933,0.745l-1.133,11.907l10.198,0.746l-0.567,5.954v5.953l5.666,0.745l-1.699,23.072   h-1.133l-11.332-0.745l-10.764-0.745v-3.72l-11.897-0.745l0.566-8.188l0.566-11.908H411.7l1.132-11.908l-7.932-0.745l1.132-12.652   L406.033,278.352z",
            'Wood County': "M307.452,64.751l-0.566,33.491v11.908h-47.591l-0.566-34.236l1.7,0.744l7.364-3.721l2.267-2.977l6.233-3.721l1.7-5.955l9.064-5.21   l4.533-5.954h15.863V64.75L307.452,64.751z",
            'Carroll County': "M524.442,180.111h7.932v-9.676h3.967v-0.745h11.896H565.8v11.907h5.667v5.955v5.954h-6.233v11.908h-1.7l-0.566,5.953l-33.427-1.487   l0.566-17.861h-6.232L524.442,180.111L524.442,180.111z",
            'Monroe County': "M532.374,286.538l43.625,2.978l-1.133,0.745l0.566,3.722v1.486l-4.533,5.211l0.567,2.232l2.832,3.723l0.566,2.232l-3.398,2.233   l-0.567,5.21l-1.133,3.721l-1.133,0.745h-3.966l-1.699,1.487l-9.632,8.931l0.566-4.465h-24.362v-4.466h-1.7l0.566-13.396h-3.965   l0.565-22.327h7.366V286.538z",
            'Pickaway County': "M325.016,293.981l43.625,2.978l-2.267,31.259l11.897,1.488l-1.133,11.163l-26.627-1.488l0.565-0.745l1.701-0.745v-1.487   l-1.133-0.745l-28.894-0.745l1.132-24.56l1.133-16.374L325.016,293.981z",
            'Crawford County': "M368.074,133.222h10.764l-0.566,38.701h-13.597v1.488h-26.062v-39.445L368.074,133.222L368.074,133.222z",
            'Sandusky County': "M307.452,64.751h7.933v5.954h28.327v0.745l0.566,0.745l3.967-0.745l2.267,0.745l-0.567,1.488v0.744l1.133-0.744h1.7v-0.746   l-1.133-1.487h1.133l2.267,2.978l1.7,1.488h1.133l2.267-1.488h5.666l1.132,19.351v4.466h-60.055L307.452,64.751L307.452,64.751z",
            'Scioto County': "M322.184,402.643l3.398,0.744l0.566,1.488l1.7,1.487l0.567,3.723l41.925,1.488l5.665,0.745l-1.132,11.907l11.897,0.745l-1.7,14.141   h-3.399l-0.566,7.442l-0.566,2.232l-5.666-0.744l-0.566,5.21l2.833,5.954l-7.933,3.722l-2.267-1.487l-1.7-3.721l-0.566-7.443   l-1.7-3.721l0.567-5.955l-1.133-2.232h-1.133l-3.398,0.744l-5.1,2.978l-3.967-0.744l-1.699,0.744l-2.833,4.466l-5.665,2.978   l-1.7,4.466l-2.267,2.232l-5.099,0.745l-4.533-1.488l-2.267,1.488l-0.567-54.33L322.184,402.643z",
            'Erie County': "M381.105,48.377l1.133,1.488l2.266-1.488l-1.132,2.232l0.566,0.746l-0.566,0.744l-1.7,0.745l-2.267-1.487h-1.133l-0.565-0.746   l1.699-2.232h1.7L381.105,48.377z    M417.931,74.426l0.566,20.096l-51.557-0.745l-1.132-19.351h-5.666l2.267-1.488h2.832l2.267-1.487l1.133-2.978l2.832,0.745   l3.399,2.978h3.399v-2.232h0.566v1.487l2.267-0.745l1.7,0.745h2.267l-1.7,0.745l2.267,0.744l1.133-0.744l-0.566,0.744l1.133,1.488   l3.965,2.232v-0.744l-3.398-2.979l-4.532-5.21h-1.132V66.24l10.197,9.676l9.631,5.21h2.833l13.031-6.698L417.931,74.426z",
            'Marion County': "M338.613,173.411h26.062v7.443h-10.197v21.583l-5.667,0.745l-0.565,6.698l-23.795-1.488v-8.187h-17.562l0.566-1.488l-0.566-23.072   h11.897v-2.232h19.829L338.613,173.411z",
            'Richland County': "M378.839,133.222l30.026,0.745h1.7v24.561h1.132v0.745h1.7v1.488l1.133,0.744v8.931h3.966l0.567,23.072l-3.967,0.744h-26.062   v-11.908h-2.267v-3.722h2.267v-5.954l-10.764-0.745L378.839,133.222L378.839,133.222z",
            'Union County': "M306.886,200.205h17.562v8.187v27.538h7.933l0.567,13.396v5.21h-3.967l-30.594-0.745l0.566-15.629l-5.666-0.745l3.399-37.212   L306.886,200.205L306.886,200.205z",
            'Huron County': "M418.497,94.52l0.566,29.77H408.3l0.566,9.676l-30.026-0.745h-10.764l-1.133-34.979v-4.466l51.556,0.745L418.497,94.52z",
            'Vinton County': "M423.597,352.777l-0.567,11.908h3.966l-1.133,12.652l-3.966-0.744l-1.699,24.561l-11.332-1.488l1.133-13.396l-11.897-1.488v-4.466   l-11.897-1.487v-1.488l-11.332-0.744l1.133-21.583l11.897,0.745v-2.232l12.465,0.744v-2.978l23.228,1.488L423.597,352.777z",
            'Fairfield County': "M372.606,276.863l32.294,2.232l1.132-0.744l-1.132,12.652l7.932,0.745l-1.132,11.908h3.965l-0.566,11.908L403.2,314.82   l-0.565,8.188l-13.03-0.745v5.954l-11.332-0.744v2.232l-11.898-1.488l2.267-31.258v-4.466l2.267,0.745v-5.955l0.566-5.954   l-1.699-0.745v-3.722L372.606,276.863L372.606,276.863z",
            'Pike County': "M313.685,378.082l58.923,3.721l-2.267,29.771l-41.925-1.488l-0.567-3.722l-1.7-1.486l-0.566-1.488l-3.398-0.744l-4.532-5.211   h-7.364L313.685,378.082L313.685,378.082z",
            'Logan County': "M296.688,200.205l-3.399,37.212l-24.362-1.487v-2.233l-23.795-2.232l0.567-5.954l0.566,0.745l0.566-23.072h0.566v-6.697   l11.897-0.745v0.745h0.567l36.826,2.978v0.745L296.688,200.205z",
            'Holmes County': "M489.884,177.876v4.466l-1.133,0.745l-0.567,25.304h-4.531l-49.289-1.487l1.132-15.629l-4.532,0.745v-14.142h9.632h49.29   L489.884,177.876z",
            'Champaign County': "M293.289,237.417l5.666,0.745l-0.567,15.629l-1.132,13.396l-54.389-3.721l1.7-19.351l0.566-12.652l23.795,2.232v2.232l24.362,1.487   L293.289,237.417z",
            'Knox County': "M419.063,193.507l11.897-1.488l4.532-0.745l-1.133,15.63l-1.133,29.769l-28.894-1.487v-2.232l-28.328-1.488l0.567-10.42   l10.197,0.745l1.7-23.816h-1.133v-3.721h1.699H415.1l3.966-0.744L419.063,193.507z",
            'Gallia County': "M408.865,399.664l11.332,1.488v2.232l23.795,0.745l-0.567,7.443l-2.267,5.21l-2.267,2.233l0.567,4.465l-0.567,2.978l-1.699,2.233   l-3.966,2.232l-2.267,2.978l0.566,1.488l2.267,2.978v2.978l1.133,2.977l-0.567,3.722l1.7,8.187v1.488l-1.132,1.487l-3.4,1.487   l-4.533-1.487l-2.832,2.232h-7.933l0.567-12.652l-11.897-0.744l0.566-8.188h-2.268l0.567-4.465l-10.197-0.745l0.566-8.932v-0.744   l12.464,0.744L408.865,399.664L408.865,399.664z",
            'Jefferson County': "M571.467,187.553h11.896v2.232h8.499l3.965,5.953l1.132,3.722l2.267,5.21l-1.699,5.211l-0.567,3.722l-1.132,1.487l2.267,2.978   l-0.566,2.977l1.133,2.978v1.488l-1.701,4.465v2.233l-3.965,2.978l-1.699,6.698l-1.133,1.487l-2.267,4.466l-18.696-0.745   l1.132-29.026l0.566-0.745v-5.954h-7.933l0.567-5.954h1.699v-11.907h6.233v-5.955L571.467,187.553z",
            'Auglaize County': "M206.041,175.644h17.562v3.721h11.897v2.232h23.794v14.142l-11.897,0.745v6.698h-0.565h-35.127v14.14h-9.632v3.722l-2.267-0.745   v-44.654h6.232H206.041z",
            'Lawrence County': "M386.77,424.97l7.365,0.745l-0.567,8.931l10.198,0.745l-0.567,4.465h2.268l-0.566,8.188l11.897,0.744l-0.567,12.653h7.933   l-0.567,1.486v3.722l-1.699,8.187l-1.699,4.466l-1.701,1.488l-2.833,0.744h-4.531l-9.632,2.978L395.833,486l-2.267-0.745   l-1.132-1.487l-1.7-7.443l-4.533-2.232l-1.133-2.233l-3.399-5.21l-2.833-1.488l-5.665-0.744l-3.967-1.488l7.934-3.721l-2.834-5.954   l0.566-5.21l5.667,0.744l0.565-2.232l0.567-7.442h3.399l1.699-14.141L386.77,424.97z",
            'Columbiana County': "M548.237,146.619h19.829v-4.466l7.364,0.745v3.722h31.727v5.953v29.771l-3.398,0.745l-2.833,2.232l-2.834-1.487l-1.699,0.744   l-3.967,3.722l-0.565,1.488h-8.498v-2.232h-11.897v-5.955h-5.666v-11.908h-17.562v-23.071L548.237,146.619z",
            'Athens County': "M448.523,329.706l-0.567,12.652l22.097,1.488l-1.133,17.861h2.267l-0.567,2.232h2.267l-0.565,3.721h10.196v7.443l-3.397,5.21   l-53.258-2.978l1.133-12.651h-3.966l0.566-11.908l1.133-11.908l11.897,0.744l0.567-12.653L448.523,329.706z",
            'Ottawa County': "M369.207,35.725h-1.7l0.567-1.488l2.267,0.746v1.487h-0.567L369.207,35.725z    M371.473,37.957h1.701l-2.268,1.488l-0.566,1.488l-1.7-0.746l0.566-1.487l2.267-0.745V37.957z    M370.341,42.423h1.699l-2.267,2.978h-0.566l-1.7,2.232l-0.566-0.744V43.91l1.133-1.487l0.566,1.487L370.341,42.423L370.341,42.423z       M307.452,49.121l26.062-0.745l5.099,0.745l3.966,1.486l3.965,5.955l2.267,1.488l5.101,3.722l3.398,0.745h3.966l1.7-1.488l1.7-1.488   l1.133-2.232l-0.567-2.231l0,0V53.59l2.267-0.745l1.7,2.978h-0.567l-1.699,2.977l-3.966,2.978l2.833-0.745l2.267-1.487l0.565-2.231   l1.7-1.488l1.7,2.978l-2.832,0.745v1.488l6.798-2.233h3.399l1.133,1.487v0.746l-1.133,1.486l1.133,2.978l0,0l-1.7-1.487   l-2.267-0.746l-2.267,1.488l-2.267-0.744l-2.267,0.744l-1.133,1.488l-2.267-1.488l-4.533,2.232l-7.365-0.744l-1.7,3.721   l-0.566-0.744l-1.133,0.744h-1.7l-5.665,0.746h-28.327v-5.956h-7.933V49.125L307.452,49.121z",
            'Highland County': "M311.42,353.522l-0.567,2.978l0.567,0.744l-1.133,3.722l0.566,3.722l0.566,0.745l-0.566,0.745v0.745l-1.133,0.744l1.133,1.488   v1.487l1.7,0.745l2.266-0.745l-0.566,2.232h0.566l-1.132,5.21l-3.399,19.351l-23.229,4.466h-6.23h-20.396L261,371.388h2.831v2.978   h2.833l1.7-2.232l0.566-2.978l20.396-15.629h22.096L311.42,353.522z",
            'Geauga County': "M516.511,55.819h10.197v-9.675h19.829V35.724h10.197V64.75v20.84h-40.226V75.169h1.7v-1.487v-1.488h-1.7V55.82L516.511,55.819z",
            'Ross County': "M322.75,334.915l28.895,0.745l1.132,0.745v1.487l-1.7,0.745l-0.565,0.745l26.627,1.488l-1.134,14.141l-1.132,21.584l-0.566,5.21   h-1.7l-58.922-3.722l1.132-5.21h-0.565l0.565-2.232l-2.267,0.745l-1.699-0.745v-1.487l-1.133-1.488l1.133-0.744v-0.745l0.566-0.745   l-0.566-0.745l-0.567-3.722l1.133-3.722l-0.566-0.744l0.566-2.978l11.332-18.606H322.75z",
            'Putnam County': "M223.037,110.149h36.259v33.492h-11.897v2.232h-11.897v5.953h-23.795v-5.953h-6.231v-11.908h6.231v-23.816H223.037L223.037,110.149   z",
            'Portage County': "M556.735,85.59v29.025v20.095h-8.498H516.51V85.59H556.735z",
            'Seneca County': "M306.886,98.242h60.055l1.133,34.979l-29.462,0.745h-31.726V110.15V98.242L306.886,98.242z",
            'Fulton County': "M209.439,36.469l49.29-1.486l0.566,14.14l0,0l-0.566,17.862h-47.59l0.566-3.723h-4.533v-14.14h-1.7V37.213L209.439,36.469   L209.439,36.469z",
            'Clark County': "M242.866,263.466l54.389,3.721h0.567v0.745l-8.498,32.004h-6.233l-9.064-1.488l-0.567-0.744l-9.064-1.488l0.566-2.977   l-11.897-0.745v-2.232l-11.897-0.745l0.566-4.466L242.866,263.466L242.866,263.466z",
            'Allen County': "M259.296,143.642v14.142v23.814h-23.795v-2.231h-11.896v-3.722h-17.563l-0.566-17.86h6.232v-5.956h23.795v-5.953h11.897v-2.232   L259.296,143.642L259.296,143.642z",
            'Clinton County': "M280.826,329.706l9.631,0.745l-1.133,23.071l-20.396,15.629l-0.566,2.978l-1.7,2.232h-2.833v-2.978h-2.832l-13.598-1.487h-1.133   l2.834-42.422L280.826,329.706L280.826,329.706z",
            'Trumbull County': "M556.735,64.751l50.423,0.745v0.744v48.377h-50.423V85.592V64.751L556.735,64.751z",
            'Ashland County': "M419.063,124.291h16.996l-0.566,9.676h5.1v43.911h-9.632v14.141l-11.897,1.488l-0.566-23.071h-3.966v-8.932l-1.133-0.744v-1.488   h-1.7v-0.745h-1.131v-24.561h-1.701l-0.566-9.675H419.063L419.063,124.291z",
            'Brown County': "M247.397,369.896l13.598,1.487l-0.566,30.515h20.396l-3.399,52.098l-6.799-2.233l-1.7-5.955l-5.099-2.978l-2.267-5.21l-5.1-1.487   l-5.665-2.232l-9.632,1.487l5.666-53.586l0.566-11.907V369.896z",
            'Belmont County': "M534.073,245.604h11.331l23.795,1.487l18.696,0.745l-0.566,2.978v3.723l-2.267,2.978l-0.566,1.487l0.566,2.978l-0.566,2.232   l-0.566,2.978l0.566,5.211l-2.833,3.721l1.133,4.465l-1.133,0.745l-2.832-1.487l-1.133,0.745l-0.566,1.487l1.7,2.978v1.488   l-2.833,2.978l-43.625-2.978l0.566-11.163l1.134-29.771L534.073,245.604z",
            'Ashtabula County': "M607.158,0v17.861v47.633l-50.423-0.745V35.723V17.117l10.198-2.232l9.064-3.721l1.699-1.488h1.699l2.833-1.488h3.966L607.158,0   L607.158,0z",
            'Henry County': "M258.729,66.984v8.93l0.566,34.236h-36.259V75.171h-11.331l-0.566-8.187H258.729L258.729,66.984z",
            'Guernsey County': "M522.177,239.651v5.953h11.897l-1.134,29.771h-15.862v4.465l-7.933-0.745v4.466l-11.897-0.745v8.187l-11.897-0.745l0.566-11.908   h-3.965l1.132-30.514l4.532,0.745l0.565-9.676h4.532l29.461,0.745L522.177,239.651z",
            'Montgomery County': "M196.408,279.84h6.232l27.195-0.745v5.211l11.896,0.745l-0.566,4.465v1.488h-3.965l-2.268,34.979l-26.061-1.487h-11.332   L196.408,279.84z",
            'Lucas County': "M333.515,48.377l-26.062,0.745h-15.862l-4.534,5.955l-9.064,5.21l-1.7,5.953l-6.232,3.721l-2.267,2.979l-7.365,3.721l-1.699-0.746   v-8.93l0.566-17.861l0,0l-0.566-14.141h12.463l28.895-1.488v0.746h0.566l1.7-0.746h1.133v0.746l-1.7,1.487l3.966,2.978l7.933,0.745   l1.7-0.745v-2.232l0.566,0.744l3.398,2.233h-1.699l-0.567,0.745l3.399,0.744l6.232,4.465v0.745h1.701l5.099,2.232L333.515,48.377z",
            'Delaware County': "M348.245,209.881v2.232l9.632,0.745l-0.567,7.442l19.263,0.745l-0.567,10.42l-1.132,20.096l-41.925-2.232l-0.566-13.396h-7.934   v-27.537l23.796,1.488L348.245,209.881z",
            'Wyandot County': "M306.886,133.967h31.728v39.445h-19.829v2.232h-11.897h-2.267v-2.232h-5.666v-15.629h-2.267l0.566-11.909h3.967v-5.954h1.699   v-5.954L306.886,133.967L306.886,133.967z",
            'Mahoning County': "M607.158,114.615v1.487v30.515h-31.727v-3.722l-7.365-0.745v4.466h-19.829v-11.907h8.499v-20.095L607.158,114.615L607.158,114.615z   ",
            'Wayne County': "M485.916,134.71h4.532l-0.566,9.676v33.491h-49.29v-43.911L485.916,134.71L485.916,134.71z",
            'Harrison County': "M529.541,209.881l33.428,1.487h7.932v5.954l-0.566,0.745l-1.132,29.026l-23.796-1.487h-11.331h-11.897v-5.953l0.566-11.909h5.666   l1.133-17.861L529.541,209.881z",
            'Cuyahoga County': "M506.879,46.889v8.93h9.632v16.374h1.7v1.487v1.488h-1.7v10.42h-20.396v2.232l1.133,2.232l2.267,4.466l-13.031,0.745l-19.829,0.745   v-10.42h-10.198l0.567-20.84l3.966,1.487l5.1,0.746h3.398l5.1-1.488l5.099,0.744h1.133l9.065-5.953l8.498-6.697l3.966-3.721   L506.879,46.889L506.879,46.889z",
            'Meigs County': "M425.861,377.338l53.258,2.978l1.699,5.955v3.72l-1.133,2.233l-2.267,1.487h-3.399l-0.566,0.745l1.133,2.978l3.399,4.466   l0.566,2.978l-1.7,4.465l1.7,3.721v1.488l-1.133,0.745h-1.133l-2.832-2.978h-1.7l-1.133,1.487l-0.565,3.722l-1.7,2.232   l-2.834,2.232l-2.832-0.745l-1.7-2.231l3.399-5.211l-2.267-4.465l-1.7-3.722h-3.966l-1.7-3.722l-1.133-0.745h-2.267h-1.132   l-1.133,3.722l-3.966,2.978l-1.7,3.721l0.567-7.443l-23.795-0.745v-2.232l1.699-24.56l3.966,0.744L425.861,377.338z",
            'Darke County': "M202.074,221.043v20.84l0.566,37.956h-6.232h-33.993l0.567-11.907l0.566-40.936v-5.954L202.074,221.043L202.074,221.043z",
            'Warren County': "M234.935,325.984l14.164,1.487l-2.834,42.423l-26.627-1.488l0.566-1.488l-1.133-0.744l0.567-0.745h-9.065l1.7-34.979h-3.399v-5.953   L234.935,325.984L234.935,325.984z",
            'Summit County': "M516.511,85.59v49.12h-2.267l-0.566,11.162l-23.795-1.487l0.565-9.675h-4.531l0.567-39.445l13.03-0.745l-2.267-4.466l-1.133-2.232   v-2.232L516.511,85.59L516.511,85.59z",
            'Hamilton County': "M161.85,363.198h18.696l1.133-0.745l28.894,2.978h9.065l-0.567,0.745l1.133,0.745l-0.566,1.486l-6.232,5.954l1.132,2.233   l2.833-0.745l0.566,1.487l-2.267,3.722l-1.699,20.839l-3.967-2.233l-5.099-1.487l-2.267-0.745l-0.566-2.232l-0.567-4.466   l-1.699-2.232h-2.267l-2.834,3.723h-1.699l-2.267-0.745l-3.967,2.232l-4.532,0.745l-3.399-2.232l-3.399-1.488l-3.399-5.21   l-2.267-0.745l-1.699,0.745l-2.267,2.978l-3.967,1.487v-26.792H161.85z",
            'Washington County': "M527.841,322.263h1.7v4.466h24.362l-0.566,4.464l-5.1,5.956l-2.832,4.465l-1.7,2.233l-5.099,2.232l-2.267,2.978l-1.699,2.978h-3.4   l-2.266,0.745l-7.934,5.21l-2.267,0.745l-2.267-2.232l-1.7-4.466l-1.132-1.487l-2.267-1.488h-1.7l-3.399,4.466l-5.099,2.978   l-1.133,1.487l-1.7,10.42l-3.966-1.487l-6.232,0.744l-2.832,2.233l0.566,4.465l-3.398,0.745v-7.443h-10.197l0.565-3.722h-2.267   l0.567-2.232h-2.267l1.133-17.861h1.699l0.567-5.955h3.965l2.267,0.745l0,0l5.666,0.745v-6.698h-1.699v-2.978l0.566-1.488v-2.978   l2.832-0.744l10.197,0.744h11.897v-8.187h2.267v2.232h3.966v1.488h2.267v2.232h3.966v1.488h7.365v-2.233L527.841,322.263z",
            'Butler County': "M208.873,324.496v5.953h3.398l-1.7,34.979l-28.894-2.978l-1.133,0.745h-18.696l0.566-29.026v-6.698h35.127v-2.978h11.331V324.496z",
            'Hardin County': "M259.296,157.783h37.393h2.267v15.628h5.666v2.232h2.267l0.566,23.071l-0.566,1.488H296.69v-0.745l-36.827-2.978h-0.566v-0.745   v-14.141v-23.815L259.296,157.783z",
            'Shelby County': "M246.832,203.183l-0.566,23.071l-0.566-0.745l-0.567,5.955l-0.566,12.652l-20.396-1.487v-0.745h-22.096v-20.84v-3.721h9.632   v-14.141H246.832L246.832,203.183z",
            'Defiance County': "M211.706,75.169h11.331v34.979h-11.331v-5.955h-11.897l-0.567-5.954l-35.692,0.745v-2.978V75.168L211.706,75.169L211.706,75.169z",
            'Licking County': "M433.228,236.674h1.7l-0.566,9.675l-1.133,29.027h-3.398l-0.567,5.21l-18.695-1.488v-0.744h-4.533l-1.132,0.744l-32.294-2.232   l0.567-4.465h0.565l1.133-20.839l1.133-20.096l28.327,1.488v2.232L433.228,236.674L433.228,236.674z",
            'Muskingum County': "M434.36,246.349l48.723,1.488l-1.132,30.514h3.965l-0.566,11.908l-0.566,11.908l-39.092-2.232l0.567-5.955l-10.198-0.745   l1.133-11.907l-7.933-0.745l0.567-5.21h3.398l1.133-29.027L434.36,246.349z",
            'Madison County': "M298.388,253.792l30.594,0.745l-0.566,8.186l-5.099-0.744v1.487l0.566,2.233l-1.133,2.232l1.133,2.232l0.565,4.465l1.134,2.232   l0.566,2.232l-1.7,0.745l0.566,14.142l-1.132,16.373l-41.358-2.977l0.566-7.443h6.233l8.498-32.004v-0.745h-0.567l1.133-13.396   V253.792z",
            'Morrow County': "M364.675,173.411v-1.488h13.597l10.764,0.745v5.954h-2.267v3.722h2.267v11.908h-1.699v3.721h1.132l-1.7,23.816l-10.196-0.745   l-19.264-0.745l0.567-7.442l-9.631-0.745v-2.232l0.565-6.698l5.666-0.745v-21.583h10.197v-7.442L364.675,173.411z",
            'Hancock County': "M306.886,110.149v23.816h-3.966v5.955h-1.699v5.954h-3.967l-0.566,11.909h-37.393v-14.142V110.15L306.886,110.149L306.886,110.149z   ",
            'Miami County': "M202.074,241.884h22.096v0.745l20.396,1.487l-1.7,19.351l-1.133,21.584l-11.896-0.745v-5.211l-27.195,0.745L202.074,241.884   L202.074,241.884z",
            'Lorain County': "M457.022,64.751l-0.566,20.839h10.197v10.42h-10.197v9.676h-10.197v8.931h-10.198v9.676h-16.996l-0.567-29.771l-0.565-20.096h8.498   l8.498-5.954l15.863-5.21h2.267l3.966,1.487L457.022,64.751z",
            'Noble County': "M532.374,286.538h-7.366l-0.565,22.329h3.965l-0.566,13.396v2.233h-7.364v-1.488h-3.966v-2.232h-2.267v-1.488h-3.967v-2.232h-2.266   v8.187h-11.897l0.566-10.419l-6.232-0.745l0.566-11.908h-6.232l0.566-11.908l11.898,0.745v-8.188l11.897,0.745v-4.465l7.933,0.745   v-4.465h15.862l-0.566,11.163L532.374,286.538z",
            'Tuscarawas County': "M489.884,182.344l18.696-2.232l1.132-1.488h2.267v1.488h12.465l-0.566,11.907h6.231l-0.566,17.862l-1.133,17.86h-5.665   l-0.566,11.909l-29.462-0.745l0.567-20.096h-9.632v-10.42h4.531l0.567-25.305l1.133-0.745L489.884,182.344z",
            'Preble County': "M162.416,279.84h33.993l1.133,44.656v2.978h-35.127V305.89L162.416,279.84L162.416,279.84z",
            'Adams County': "M280.826,401.897h6.23l23.229-4.466h7.365l4.531,5.211l0.566,54.33l-2.267,2.232h-1.699l-1.7-1.487l-1.133-3.721l-2.832-2.233   l-10.198-2.232l-4.533-3.721l-1.699-0.744l-10.765,2.978l-1.133,1.487l-1.132,4.466l-2.267,1.487l-3.966-1.487l3.398-52.098   L280.826,401.897z",
            'Paulding County': "M163.549,98.985l35.691-0.745l0.567,5.955h11.897v5.954v23.816h-6.232l-41.925,0.745L163.549,98.985L163.549,98.985z",
            'Jackson County': "M372.606,381.804h1.7l0.566-5.21l11.331,0.744v1.488l11.898,1.487v4.465L410,386.267l-1.133,13.396l-2.267,26.049l-12.464-0.744   v0.744l-7.365-0.744l-11.897-0.745l1.132-11.907l-5.665-0.746l2.267-29.771L372.606,381.804z"
        }
    }
});
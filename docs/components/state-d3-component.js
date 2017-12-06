const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const projection = {NorthCarolina:d3.geoAlbersUsa().translate([-600, 100]).scale(4000), Washington: d3.geoAlbersUsa().translate([1700, 1300]).scale(5000)};
const washingtonSixCorners = "222,283 203,311 198,475 202.69019938403972,475.4344907369182 209.6754148820471,480.345948636967 213.59825224350038,480.288425353991 219.9779845981434,485.0638045601845 220.4633523302855,490.96257904777167 222.67981163450304,491.6087632728163 228.56274359208533,489.124260458555 233.36904342303865,491.4134325919754 235.5779288458923,490.6252924730243 237.1484033711056,492.5191672528831 241.2951011113512,490.8128418143492 251.8725643892908,489.824819544016 256.0224968576447,488.0662127419905 258.38711397851716,488.61146923860406 263.79395688207865,494.7117598470545 271.11236980886633,495.67895693675064 280.50985592807024,496.3221779917021 283.6999258224207,493.86311524118673 290.0681429287324,493.4519526250042 297.16203963558974,491.744755144769 300.5111523497958,492.309465226404 307.1006599988232,492.190093489005 315.25667185691805,493.49678450242664 320.6596004442242,489.19376019463107 322.47575430446636,489.1774021150436 326.9782640635424,491.9517501347541 330.19631903622053,491.8189118554642 334.6722168577337,492.5123949935787 338.4754113528727,492.26130568834014 341.4536429877344,492.57452295731446 346.2101420237534,494.8737359241768 348.69291609446555,495.1135293085422 358.5731308690524,491.4716531454992 368,493y222,283 368,493 414.873274205446,504.9710096076901 480.83748913163936,520.5634894908476 480.34866776099784,515.3019409859189 478.87435818142376,512.7571236689837 480.3543493101406,511.0891011673293 482.50212800898703,507.7941877431608 483.66263027997934,505.465540863092 481.8413902598411,502.3800134581061 483.0227781299975,499.378489745799 482.11763330380154,495.0705705773089 480.7944072940061,489.9905021019549 478.98559426445104,488.56610210087183 481.80584582504525,482.27787367475594 483.3075465841591,475.6052497967794 510.920415083295,352.3473547922313 531.1545094255052,264.98333944359183 474.34999141172534,251.80817443163778 385.93520698375164,230.12374086728323 279,202y203,311 129,421 130.9892565672651,422.8069854494843 131.517713951112,425.0293188831183 131.9591103792336,429.18615226447037 133.18847244206017,434.51524805658664 132.19313592500203,438.69142716164515 132.64005639401717,443.15892628390475 130.62124494766203,447.4393345061626 131.43261865635532,452.14943388462143 128.73601852725938,458.5960579126149 128.7699202927729,460.73974210982624 132.36542836433478,464.9199819584742 138.94045713091464,468.8997849002599 145.59291271027928,474.1623190905111 149.38797757043494,474.15608491145167 151.51940921825894,477.2484169110917 155.41522243257896,478.7447822134277 159.65701636938024,477.9420526655481 163.50704856115317,477.4160340083449 165.47662334286792,478.016820303862 169.83038710943447,476.9311150101621 177.23023510958592,475.7086659626202 185.97610116471242,472.5806423275194 190.00825057886186,474.78795124963926 197.48972322918416,475.5564657030268 198,475y199,281 179,347 212,299y199,281 164,233 155.6836514258373,233.67431224142547 147.00774126461874,233.7284276295477 127.42962840887549,222.90208851766874 122.38366118861222,219.84661364097974 111.24754109763649,210.7137404977666 102.52186468775744,203.5404290507522 86.00366711607217,190.38526072851892 77.47697942587615,199.09736165001323 73.11558742119496,209.23471982353567 67.85372019050988,226.02264945930438 67.88480767782175,247.90195102133384 70.35722217819603,278.8307484997067 70.06034841288533,304.6852235987353 66.11230270495503,334.7886745341284 60.530263154988916,370.13844479344243 57.580556606489154,384.85787802292725 69.95764226517508,388.114311062428 71.32015306136395,386.06217305058726 73.59392429682384,388.9993750680751 75.277020190955,392.18395272282123 78.45377445377926,393.44447357830904 86.98272485115399,392.9124452799588 89.56091001169898,395.44995307204044 93.60908599312688,395.97142365686796 97.40928009590039,397.02477996845937 101.2209062316565,397.17025334856044 104.05376612733494,401.6278388927676 102.72968045441348,405.51351990424337 105.40527392408967,409.5048441007348 110.53317845212746,411.2391586520671 118.28992440000752,409.4651375861449 120.85818732230405,410.47338108391705 123.76803470354616,414.13040184943475 128.18974172976527,420.21335376100615 129,421 179,347y178.40334631870178,173.02514981172317 191.68366097529565,192.29404741750295 190.1407276659927,197.5767433320225 173.5293529076157,199.66042498334446 173.2432537743498,208.56642588382238 173.02891427189047,211.6897241692459 173.97938760679108,221.10716840642 175.7183034113989,224.31879346764617 164.8412996364441,233.65954333699847 164,233 212,299 279,202 274.7707380605618,200.85182346313468 265.9073725696139,198.55894183582768 248.37486246715866,193.25523012427402 194.41336838576217,177.69627221101928 178.4422592957385,173.03665434943832".split("y") // document.getElementById('myTextArea').innerText = cornersBuilder.join("y") 
const washingtonSixSplits = "279.6453661684842,202.13541445882987,129.48206771221862,421.41063893879357y198.2907601904289,475.537677720294,203.95259260916978,311.56921479061214y368.3913916204596,493.8258248023999,222.09256089593157,283.6172481887297y212.1463748681135,299.6062926925543,164.44251440629625,233.66018647384053y179.0129187056856,347.4870351554983,199.18539735643535,281.3799213650986" // document.getElementById('myTextArea2').innerText = minLineBuilder.join("y")
const washingtonTenCorners = "220,286 208,304 202,475 202.69019938403972,475.4344907369182 209.6754148820471,480.345948636967 213.59825224350038,480.288425353991 219.9779845981434,485.0638045601845 220.4633523302855,490.96257904777167 222.67981163450304,491.6087632728163 228.56274359208533,489.124260458555 233.36904342303865,491.4134325919754 235.5779288458923,490.6252924730243 237.1484033711056,492.5191672528831 241.2951011113512,490.8128418143492 251.8725643892908,489.824819544016 256.0224968576447,488.0662127419905 258.38711397851716,488.61146923860406 263.79395688207865,494.7117598470545 271.11236980886633,495.67895693675064 280.50985592807024,496.3221779917021 283.6999258224207,493.86311524118673 290.0681429287324,493.4519526250042 297.16203963558974,491.744755144769 300.5111523497958,492.309465226404 307.1006599988232,492.190093489005 315.25667185691805,493.49678450242664 320.6596004442242,489.19376019463107 322,489y296,437 322,489 322.47575430446636,489.1774021150436 326.9782640635424,491.9517501347541 330.19631903622053,491.8189118554642 334.6722168577337,492.5123949935787 338.4754113528727,492.26130568834014 341.4536429877344,492.57452295731446 346.2101420237534,494.8737359241768 348.69291609446555,495.1135293085422 358.5731308690524,491.4716531454992 414.873274205446,504.9710096076901 480.83748913163936,520.5634894908476 480.34866776099784,515.3019409859189 478.87435818142376,512.7571236689837 480.3543493101406,511.0891011673293 482.50212800898703,507.7941877431608 483.66263027997934,505.465540863092 481.8413902598411,502.3800134581061 483.0227781299975,499.378489745799 482.11763330380154,495.0705705773089 480.7944072940061,489.9905021019549 478.98559426445104,488.56610210087183 481.80584582504525,482.27787367475594 483.3075465841591,475.6052497967794 508,364y220,286 296,437 508,364 510.920415083295,352.3473547922313 531.1545094255052,264.98333944359183 474.34999141172534,251.80817443163778 385.93520698375164,230.12374086728323 279,202y206,349 182,341 129,421 130.9892565672651,422.8069854494843 131.517713951112,425.0293188831183 131.9591103792336,429.18615226447037 133.18847244206017,434.51524805658664 132.19313592500203,438.69142716164515 132.64005639401717,443.15892628390475 130.62124494766203,447.4393345061626 131.43261865635532,452.14943388462143 128.73601852725938,458.5960579126149 128.7699202927729,460.73974210982624 132.36542836433478,464.9199819584742 138.94045713091464,468.8997849002599 145.59291271027928,474.1623190905111 149.38797757043494,474.15608491145167 151.51940921825894,477.2484169110917 155.41522243257896,478.7447822134277 159.65701636938024,477.9420526655481 163.50704856115317,477.4160340083449 165.47662334286792,478.016820303862 169.83038710943447,476.9311150101621 177.23023510958592,475.7086659626202 185.97610116471242,472.5806423275194 190.00825057886186,474.78795124963926 197.48972322918416,475.5564657030268 202,475y206,349 208,304 182,341y198,289 193,326 208,305y198,289 182,262 172,356 193,326y182,262 164,233 155.6836514258373,233.67431224142547 147.00774126461874,233.7284276295477 127.42962840887549,222.90208851766874 122.38366118861222,219.84661364097974 111.24754109763649,210.7137404977666 102.52186468775744,203.5404290507522 86.00366711607217,190.38526072851892 77.47697942587615,199.09736165001323 73.11558742119496,209.23471982353567 67.85372019050988,226.02264945930438 67.88480767782175,247.90195102133384 70.35722217819603,278.8307484997067 70.06034841288533,304.6852235987353 66.11230270495503,334.7886745341284 60.530263154988916,370.13844479344243 57.580556606489154,384.85787802292725 69.95764226517508,388.114311062428 71.32015306136395,386.06217305058726 73.59392429682384,388.9993750680751 75.277020190955,392.18395272282123 78.45377445377926,393.44447357830904 86.98272485115399,392.9124452799588 89.56091001169898,395.44995307204044 93.60908599312688,395.97142365686796 97.40928009590039,397.02477996845937 101.2209062316565,397.17025334856044 104.05376612733494,401.6278388927676 102.72968045441348,405.51351990424337 105.40527392408967,409.5048441007348 110.53317845212746,411.2391586520671 118.28992440000752,409.4651375861449 120.85818732230405,410.47338108391705 123.76803470354616,414.13040184943475 128.18974172976527,420.21335376100615 129,421 172,356y194,282 208,305 226,277y178.40334631870178,173.02514981172317 191.68366097529565,192.29404741750295 190.1407276659927,197.5767433320225 173.5293529076157,199.66042498334446 173.2432537743498,208.56642588382238 173.02891427189047,211.6897241692459 173.97938760679108,221.10716840642 175.7183034113989,224.31879346764617 164.8412996364441,233.65954333699847 164,233 194,282 226,277 279,202 274.7707380605618,200.85182346313468 265.9073725696139,198.55894183582768 248.37486246715866,193.25523012427402 194.41336838576217,177.69627221101928 178.4422592957385,173.03665434943832".split("y")
const washingtonTenSplits = "279.6453661684842,202.13541445882987,129.48206771221862,421.41063893879357y202.4357625042018,475.44045844619535,208.87961572856105,304.3757610363009y322.16651642980236,489.1801874174764,220.02429069832328,286.7256668840989y508.10220427635454,364.9272405709732,296.26141912830707,437.775177284768y182.92180290860574,341.14112733788767,206.40572552383978,349.43682257056645y208.1832975293466,305.392385607154,164.5031548524039,233.66008867657507y193.37185101221675,326.47930737446654,198.40366928536235,289.2969133760475y172.26389458096472,356.78015648138046,182.05147226399168,262.731836670104y226.78855534755408,277.7433633690413,194.27993553913595,282.548985427677"
const northcarolinaThirteenCorners = "284,264 282,287 291.9551007108231,296.3102053687171 292.5788345523582,304.56040175554654 317,300y332,223 289,222 284,264 317,300 343,296y332,223 325,175 300.80385838493817,180.20074367659527 294,180 289,222y209,224 205.1456680048425,226.61427834354708 203.41523857112497,223.7917596562893 195.7960397125196,225.77335961124618 192.25388763532885,227.54701448573314 189.11015049227024,231.5529322544353 186.57646484337965,234.99901124705684 182.01558702958164,240.55414597461095 179.50055972077644,239.80832789853002 176.84976434212058,233.70075804906537 170.34182109501398,239.2777211433704 168.39078821543694,244.77252007118568 163.12312211744495,251.04594593234833 159.9331536770835,256.0806924453491 146.57749612082932,262.5728438581441 139.68772683889358,269.29065749541087 132.8594164105515,274.79511697172074 123.20749180783878,277.2544849098904 114.468168629959,280.8423403437887 110.0343103271141,284.5841702202565 106.01295386452057,289.78850672066073 105.95850056780193,298.619638212414 102.70850534670114,302.61407294442233 96.14320134263016,300.80967440827817 92.92319091542424,305.10559783761346 93.06008662865293,320.7905402897168 132.53967674757337,315.76627352998366 161.17645644067466,311.3820098275087 178.42800154242536,303.16185408482033 179.1422891896267,304.341687307332 199.2261176406396,291.5019427273737 205.96541590899983,290.9246339472829 232,288y286,247 222,261 232,288 255.93515680746248,285.7334639429373 275.96323222222145,284.0383356630441 276.87124643554307,291.7440453894751 281.7427462154784,286.24080120773533 282,287y286,247 294,180 277.2168537701357,182.50066192038003 224.91188941595146,189.1364827406569 225.61156385537527,206.98648033967083 220.44648734019233,206.58343931554145 213.64174851854352,212.80464547504198 210.2181344000195,224.20611851574722 209,224 222,261y435.35602668392494,352.8924307432767 467.4566635597264,348.9371645369283 470.9120561754521,328.10448431549503 485.96213606648325,300.5738453951649 496,291 455,255 380,281 372,307 435.42963089345335,352.87871153008336y455,255 403,211 380,281y463,263 496,291 501.4063916121404,287.41888785286574 518.8846527171033,279.80781955702605 537.4080855074053,280.45430354556265 554.2284981550704,244.2837259353746 584.2557261365387,221.6077419463263 579.8149026020274,185.87660270846345 554.7304841079763,148.09740416762725 548.5001247931891,132.31348581247676 486,145y463,263 486,145 467.011370733592,149.6687753902297 422,157 403,211y398,228 386,209 332,224 343,296 355.90600157337985,295.16664875141987 372,307y386,209 362,168 335.01170983784345,174.30295490511526 325,175 332,224y398,228 422,157 362,168".split('y')
const northcarolinaThirteenSplits = "343.5610118082047,296.9978657495533,325.45166870010445,175.95120525941383y282.61997799493935,287.1057536860572,294.28264308444477,180.83661339749406y289.2630132804152,222.23813158296443,332.2367597004765,223.64710687542546y317.1736573886029,300.38474332489454,284.4091725938999,264.62911162807256y232.34349715517783,288.1843134718257,209.70838579388482,224.44812231033868y222.35838742740006,261.17116501537413,286.4180650974209,247.60558621466382y372.3599231329254,307.10762481248105,422.3835552948554,157.9973544897115y403.819264417794,211.54220674661812,496.93692521671477,291.2258464009642y380.3391812865497,281.17543859649123,455.13004484304935,255.84304932735427y486.4169688339309,145.5358152247747,463.46704042878275,263.0146584333615y362.24020254628476,168.8868997028556,398.3022508038585,228.09324758842445y332.2896769280975,224.0028282388774,386.6635294117647,209.10588235294117"
const northcarolinaNineCorners = "332,262 282,262 281,286 291.9551007108231,296.3102053687171 292.5788345523582,304.56040175554654 338,297y332,262 320,176 300.80385838493817,180.20074367659527 290,181 282,262y223,206 220.44648734019233,206.58343931554145 213.64174851854352,212.80464547504198 210.2181344000195,224.20611851574722 205.1456680048425,226.61427834354708 203.41523857112497,223.7917596562893 195.7960397125196,225.77335961124618 192.25388763532885,227.54701448573314 189.11015049227024,231.5529322544353 186.57646484337965,234.99901124705684 182.01558702958164,240.55414597461095 179.50055972077644,239.80832789853002 176.84976434212058,233.70075804906537 170.34182109501398,239.2777211433704 168.39078821543694,244.77252007118568 163.12312211744495,251.04594593234833 159.9331536770835,256.0806924453491 146.57749612082932,262.5728438581441 139.68772683889358,269.29065749541087 132.8594164105515,274.79511697172074 123.20749180783878,277.2544849098904 114.468168629959,280.8423403437887 110.0343103271141,284.5841702202565 106.01295386452057,289.78850672066073 105.95850056780193,298.619638212414 102.70850534670114,302.61407294442233 96.14320134263016,300.80967440827817 92.92319091542424,305.10559783761346 93.06008662865293,320.7905402897168 132.53967674757337,315.76627352998366 161.17645644067466,311.3820098275087 178.42800154242536,303.16185408482033 179.1422891896267,304.341687307332 199.2261176406396,291.5019427273737 205.96541590899983,290.9246339472829 255.93515680746248,285.7334639429373 266,284y290,181 277.2168537701357,182.50066192038003 224.91188941595146,189.1364827406569 225.61156385537527,206.98648033967083 223,206 266,284 275.96323222222145,284.0383356630441 276.87124643554307,291.7440453894751 281.7427462154784,286.24080120773533 281,286y435.35602668392494,352.8924307432767 467.4566635597264,348.9371645369283 470.9120561754521,328.10448431549503 485.96213606648325,300.5738453951649 486,300 390,239 367,303 435.42963089345335,352.87871153008336y439,270 486,300 501.4063916121404,287.41888785286574 518.8846527171033,279.80781955702605 537.4080855074053,280.45430354556265 554.2284981550704,244.2837259353746 584.2557261365387,221.6077419463263 579.8149026020274,185.87660270846345 554.7304841079763,148.09740416762725 548.5001247931891,132.31348581247676 467.011370733592,149.6687753902297 455,151y439,270 455,151 420,158 390,239y398,215 324,204 338,297 355.90600157337985,295.16664875141987 367,303y398,215 420,158 335.01170983784345,174.30295490511526 320,176 324,204".split('y')
const northcarolinaNineSplits = "338.66956345929674,297.7234478304133,320.5773941756431,176.79158079714838y281.7833018891515,286.2807891918404,290.4917047432438,181.206259666462y282.97439759036143,262.9653614457831,332.8069414316703,262.0911062906724y266.38293662404294,284.8491889108924,223.98214922928867,206.85933392902254y367.8043721749507,303.8015603744528,420.5616063754646,158.33737215674682y390.3326462293348,239.16540182540484,486.3232588181362,300.2662517755496y455.33573380299464,151.73789935349737,439.08853133709044,270.1916709537762y324.2603550295858,204.63905325443787,398.8623733246159,215.8293559986924"
const locationsOfSplits = {Washington: {10:{dems:[true,false,false,true,true,true,true,true,true,true], corner: washingtonTenCorners, splits:washingtonTenSplits}, 6:{dems:[true,false,true,true,true,true], corner: washingtonSixCorners, splits:washingtonSixSplits}},
NorthCarolina:{13:{dems:[true,false,true,false,false,false,false,true,false,true,true,true,true], corner: northcarolinaThirteenCorners, splits: northcarolinaThirteenSplits}, 9:{dems:[true,false,false,false,false,false,true,true,true], corner: northcarolinaNineCorners, splits: northcarolinaNineSplits}}
};

const statesToValues = {Washington:{min:6, def:10, max:14, step: 4}, NorthCarolina:{min:9, def:13, max:17, step: 4}}

const size = 550;
var myAllData;
var myAllPeopleData;
var allMyLines = []
var oldStateName;
var allPoints = []
var allPolygons = []
var myTotalSVG;

class StateD3Component extends D3Component {  
    
    initialize(node, props) {
        
        function identicalTorunThisState(stateNameLocal){
            // this also contains SplitShape code necessary supporting functions (identical to inner function code)
            var strPoints = ''
            const svg = myTotalSVG
            oldStateName = stateNameLocal
            
            for (var i = myAllData[stateNameLocal].length - 1; i >= 0; i--) {
                strPoints += myAllData[stateNameLocal][i][0] +"," + myAllData[stateNameLocal][i][1] + " ";
            }
            
            strPoints = strPoints.trim()
            console.log("29")
            
            allPolygons.push(svg.append("polygon")
                .attr("points", strPoints)
                .attr("style","fill:white;stroke:black;stroke-width:1"))
            console.log("33")
            
            allPoints.push(svg.selectAll(".pin").data(myAllPeopleData[stateNameLocal])
                .enter().append("circle", ".pin")
                .attr("r", 3)
                .attr("transform", function(d) {
                    return "translate(" + 
                        d.x
                        + ", " +
                        d.y
                        + ")"
                })
                .attr("z-index", "100")
                .attr("fill", function(d) { 
                    // dems/gop
                    if(d.party >= 1.0){
                        return "blue"
                    }else{
                        return "red"
                    }
                })
            )
            
            console.log("spliting")
            
            for (var i = allMyLines.length - 1; i >= 0; i--) {
                allMyLines[i]._groups[0][0].remove()
            }
            
            allMyLines = []
            var stateNameLocal = props.statesNameNew.trim().split(" ").join("")

            for (var i = allPoints[0]._groups[0].length - 1; i >= 0; i--) {
                allPoints[0]._groups[0][i].remove()
            }
            
            allPoints = []
            
            for (var i = allPolygons.length - 1; i >= 0; i--) {
                allPolygons[i]._groups[0][0].remove()
            }
            
            allPolygons = []
            var strPoints = ''
            oldStateName = props.statesNameNew
            
            for (var i = myAllData[stateNameLocal].length - 1; i >= 0; i--) {
                strPoints += myAllData[stateNameLocal][i][0] +"," + myAllData[stateNameLocal][i][1] + " ";
            }
            
            strPoints = strPoints.trim()
            
            allPolygons.push(svg.append("polygon")
                .attr("points", strPoints)
                .attr("style","fill:white;stroke:black;stroke-width:1"))
            
            allPoints.push(svg.selectAll(".pin").data(myAllPeopleData[stateNameLocal])
                .enter().append("circle", ".pin")
                .attr("r", 3)
                .attr("transform", function(d) {
                    return "translate(" + 
                        d.x
                        + ", " +
                        d.y
                        + ")"
                })
                .attr("z-index", "100")
                .attr("fill", function(d) { 
                    // dems/gop
                    if(d.party >= 1.0){
                        return "blue"
                    }else{
                        return "red"
                    }
                })
            )

            console.log("spliting")
            var shouldChange = props.sliderWhich // important: to be the slider
            
            if(locationsOfSplits[stateNameLocal] == null || 
                locationsOfSplits[stateNameLocal][shouldChange] == null){
                console.log("not in db... error")
                return
            }
                                                        
            // color in shapes
            // important: check if bug with this numColors.blue += pop[i].party * pop[i].people;numColors.red += pop[i].people
            var whetherDems = locationsOfSplits[stateNameLocal][shouldChange]["dems"]
            var cornersArray = locationsOfSplits[stateNameLocal][shouldChange]["corner"]
            
            for (var i = cornersArray.length - 1; i >= 0; i--) {
                var myCorners = cornersArray[i]
                var polygon = document.createElement('polygon')
                                                                         
                if(whetherDems[i]){
                    //   <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
                    // console.log(myCorners)
                    allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).enter().insert("polygon", "circle")
                        .attr("points", function(d){
                            return d
                        })
                        .attr("style", "fill:blue;")
                        .attr("opacity", "0.1"))
                    // performBorderOperation(minLine, "black")
                } else {
                    // console.log(myCorners)
                    allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).enter().insert("polygon", "circle")
                        .attr("points", function(d){
                            return d
                        })
                        .attr("style", "fill:red;")
                        .attr("opacity", "0.1"))
                    // performBorderOperation(minLine, "black")
                } 
            }

            var minLineLocal = locationsOfSplits[stateNameLocal][shouldChange]["splits"]
            var colorActual = "black"
            console.log("herePerformborder")
            var allLocals = minLineLocal.split("y")
            console.log(allLocals)
            
            for (var i = allLocals.length - 1; i >= 0; i--) {
                console.log(i)
                var minLines = allLocals[i].split(",")
                var minLine = [{x1: parseFloat(minLines[0]),y1: parseFloat(minLines[1]), x2: parseFloat(minLines[2]),y2:parseFloat(minLines[3])}]
                console.log(minLine)
                allMyLines.push(svg.selectAll(".split").data(minLine)
                    .enter().append("line", ".split")
                    .attr("x1", function(d) {
                        return Math.floor(d.x1)
                    })
                    .attr("x2", function(d) {
                        return Math.floor(d.x2)
                    })
                    .attr("y1", function(d) {
                        return Math.floor(d.y1)
                    })
                    .attr("y2", function(d) {
                        return Math.floor(d.y2)
                    })
                    .attr("style", "stroke:"+colorActual+"; stroke-width:2"))
            }
            
            console.log(allMyLines)
            
            // splitShape(myAllData[stateNameLocal], myAllPeopleData[stateNameLocal], 10);
            console.log("hello")
            // splitShape(myAllData[stateNameLocal], myAllPeopleData[stateNameLocal], 10);
            console.log("hello")
        }

        const svg = this.svg = d3.select(node).append('svg');
        myTotalSVG = svg
        svg.attr('viewBox', `0 0 ${size} ${size}`)
            .style('width', '500')
            .style('height', '350');

        var points = [];

        // var svg = d3.select("svg");
        // QT: I finish load object to XYPoints array.
        // var projection = d3.geoAlbersUsa().translate([1870, -600]).scale(5000); // alaska
        // var projection = d3.geoAlbersUsa().translate([1800, 450]).scale(4000); // California
        // var projection = d3.geoAlbersUsa().translate([600, -120]).scale(4000); // Texas
        // var projection = d3.geoAlbersUsa().translate([1700, 1400]).scale(5000) // washington
        // var projection = d3.geoAlbersUsa().translate([-700, 0]).scale(5000); //North carolina
        var dataAlaska;
        var xyPoints = [];
        var peopleData;
        var peopleXY = []
        var convertObjectToFloat =  function(d) {
            return {
                lat: parseFloat(d.lat),
                lon: parseFloat(d.lon),
                state: d.state
            };
        }
        
        var convertObjectToValues = function(e){
            return {
                personLat: parseFloat(e.LATITUDE),
                personLon: parseFloat(e.LONGITUDE),
                personPopulation: parseInt(e.POPULATION),
                personState: e.StatesName,
                personParty: parseFloat(e.ratioOfParties)
            };
        }
        
        d3.csv("https://raw.githubusercontent.com/CSE442-17F/The-Shortest-Splitline-Algorithm-for-Gerrymandering/master/StateLatLongDataAllFinal.csv?token=APOGDIZFN0mHB8oEMEEuyZWSY4qcIChkks5aLeW0wA%3D%3D",
            convertObjectToFloat, function(data) {
                // if(error) { console.log(error);
                // } else {
                console.log(data);
                dataAlaska = data;
                // console.log(projection([dataAlaska[1].lon_Alaska,dataAlaska[1].lat_Alaska])[1]);
                xyPoints = arrayPixelsFromLonLat(dataAlaska,{});
                myAllData = xyPoints
                console.log(dataAlaska);
                console.log(xyPoints);                    
                console.log("made i")
            
                d3.csv("https://raw.githubusercontent.com/CSE442-17F/The-Shortest-Splitline-Algorithm-for-Gerrymandering/master/finalMergedResultWithState.csv?token=APOGDIJnOr-OwOiUPG1EGdLiY-Z0u6Gdks5aLff7wA%3D%3D", 
                    convertObjectToValues, function(valueData){
                    peopleData = valueData
                    peopleXY = arrayPixelsFromPeople(peopleData, {})
                    myAllPeopleData = peopleXY
                    // var strPointsTwo = ''
                    // for (var i = peopleXY[stateNameLocal].length - 1; i >= 0; i--) {
                        //  strPointsTwo += peopleXY[stateNameLocal][i][0] +"," + peopleXY[stateNameLocal][i][1] + " ";
                    // }
                    // strPointsTwo = strPointsTwo.trim()
                    // svg.append("polygon")
                        // .attr("points", strPointsTwo)
                        // .attr("style","fill:white;stroke:black;stroke-width:1")

                    identicalTorunThisState("Washington")
                })
        });
                   
        function arrayPixelsFromPeople(dataAlaska, xyPoints){
            var res;
            
            for (var i = 0; i < dataAlaska.length; i++) {                
                // get back x from lattitude and longtitude
                var myFunctionToRun = projection[dataAlaska[i].personState.trim().split(" ").join('')]
            
                if(myFunctionToRun == null){
                    continue
                }
                res = myFunctionToRun([dataAlaska[i].personLon,dataAlaska[i].personLat])
                //console.log(dataAlaska[i], res)
            
                if(!res){continue}
                // // get back y from lattitude and longtitude
                var xAndYPoint = {
                    x:(res[0]),
                    y:(res[1]),
                    people:(dataAlaska[i].personPopulation),
                    party:(dataAlaska[i].personParty)
                }
            
                if(xyPoints[dataAlaska[i].personState] == null){
                    xyPoints[dataAlaska[i].personState] = []
                }
                            
                xyPoints[dataAlaska[i].personState].push(xAndYPoint);                       
            }
            
            return xyPoints;    
        }
                        
        function arrayPixelsFromLonLat(dataAlaska, xyPoints) {
            var res
            for (var i = 0; i < dataAlaska.length; i++) {
                var xAndYArray = [];
                var myFunctionToRun = projection[dataAlaska[i].state.trim().split(" ").join('')];
                
                if(myFunctionToRun == null){
                    continue
                }
                
                res = myFunctionToRun([dataAlaska[i].lon, dataAlaska[i].lat])
                // get back x from lattitude and longtitude
                //console.log(dataAlaska[i])
                xAndYArray.push(res[0]);
                // get back y from lattitude and longtitude
                xAndYArray.push(res[1]);
                
                if(xyPoints[dataAlaska[i].state] == null){
                    xyPoints[dataAlaska[i].state] = []
                }
                
                xyPoints[dataAlaska[i].state].push(xAndYArray);                       
            }
            return xyPoints;    
        }                
    }
  
    update(props) {
        console.log(props.statesNameNew)
        console.log(myAllData)
        console.log(props.statesNameNew, oldStateName)
        if(props.statesNameNew == oldStateName && props.sliderWhich == allMyLines.length + 1){            
            return
        }

        for (var i = allMyLines.length - 1; i >= 0; i--) {
            allMyLines[i]._groups[0][0].remove()
        }
        
        allMyLines = []
        var stateNameLocal = props.statesNameNew
        const svg = myTotalSVG

        if(props.statesNameNew != oldStateName){
            // I should change projection based on state
            for (var i = allPoints[0]._groups[0].length - 1; i >= 0; i--) {
                allPoints[0]._groups[0][i].remove()
            }
         
            allPoints = []
            
            for (var i = allPolygons.length - 1; i >= 0; i--) {
                allPolygons[i]._groups[0][0].remove()
            }
            
            allPolygons = []       
        
            var strPoints = ''
            oldStateName = props.statesNameNew
    
            for (var i = myAllData[stateNameLocal].length - 1; i >= 0; i--) {
                strPoints += myAllData[stateNameLocal][i][0] +"," + myAllData[stateNameLocal][i][1] + " ";
            }
    
            strPoints = strPoints.trim()
            allPolygons.push(svg.append("polygon")
                .attr("points", strPoints)
                .attr("style","fill:white;stroke:black;stroke-width:1"))
            allPoints.push(svg.selectAll(".pin").data(myAllPeopleData[stateNameLocal])
                .enter().append("circle", ".pin")
                .attr("r", 3)
                .attr("transform", function(d) {
                    return "translate(" + 
                        d.x
                        + ", " +
                        d.y
                        + ")"
                })
                .attr("z-index", "100")
                .attr("fill", function(d) { 
                    // dems/gop
                    if(d.party >= 1.0){
                        return "blue"
                    }else{
                        return "red"
                    }
                })
            )

            console.log("debug")
            stateNameLocal = stateNameLocal.trim().split(" ").join('')

            var shouldChange = statesToValues[stateNameLocal]['def'] 
            console.log(shouldChange)
            if(locationsOfSplits[stateNameLocal] == null || locationsOfSplits[stateNameLocal][shouldChange] == null){
                console.log("not in db... error")
                return
            }
            
            // color in shapes
            // important: check if bug with this numColors.blue += pop[i].party * pop[i].people;numColors.red += pop[i].people
            var whetherDems = locationsOfSplits[stateNameLocal][shouldChange]["dems"]
            var cornersArray = locationsOfSplits[stateNameLocal][shouldChange]["corner"]
            for (var i = cornersArray.length - 1; i >= 0; i--) {
                var myCorners = cornersArray[i]
                var polygon = document.createElement('polygon')
                     
                if(whetherDems[i]){
                    //   <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
                    // console.log(myCorners)
                    allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).enter().insert("polygon", "circle")
                        .attr("points", function(d){
                            return d
                        })
                        .attr("style", "fill:blue;")
                        .attr("opacity", "0.1"))
                    // performBorderOperation(minLine, "black")
                } else {
                    // console.log(myCorners)
                    allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).enter().insert("polygon", "circle")
                        .attr("points", function(d){
                            return d
                        })
                        .attr("style", "fill:red;")
                        .attr("opacity", "0.1"))
                    // performBorderOperation(minLine, "black")
                } 
            }

            var minLineLocal = locationsOfSplits[stateNameLocal][shouldChange]["splits"]
            var colorActual = "black"

            console.log("herePerformborder")
            var allLocals = minLineLocal.split("y")
            console.log(allLocals)
            
            for (var i = allLocals.length - 1; i >= 0; i--) {
                console.log(i)
                var minLines = allLocals[i].split(",")
                var minLine = [{x1: parseFloat(minLines[0]),y1: parseFloat(minLines[1]), x2: parseFloat(minLines[2]),y2:parseFloat(minLines[3])}]
                console.log(minLine)
                allMyLines.push(svg.selectAll(".split").data(minLine)
                    .enter().append("line", ".split")
                    .attr("x1", function(d) {
                        return Math.floor(d.x1)
                    })
                    .attr("x2", function(d) {
                        return Math.floor(d.x2)
                    })
                    .attr("y1", function(d) {
                        return Math.floor(d.y1)
                    })
                    .attr("y2", function(d) {
                        return Math.floor(d.y2)
                    })
                    .attr("style", "stroke:"+colorActual+"; stroke-width:2"))
            }
            
            console.log(allMyLines)
            // console.log(numColors.blue, numColors.red)
            // splitShape(myAllData[stateNameLocal], myAllPeopleData[stateNameLocal], 10);
            console.log("hello")
        } else{
            // splitShape(myAllData[stateNameLocal], myAllPeopleData[stateNameLocal], 5);
            console.log("hey")
            stateNameLocal = stateNameLocal.trim().split(" ").join('')
            var shouldChange = props.sliderWhich // important: to be the slider
            if(locationsOfSplits[stateNameLocal] == null || locationsOfSplits[stateNameLocal][shouldChange] == null){
                console.log("not in db... error")
                return
            }
            console.log("veryImportant")
            console.log(allPolygons)
        
            for (var i = allPolygons.length - 1; i >= 1; i--) {
                allPolygons[i]._groups[0][0].remove()
            }
          
            allPolygons.splice(1)
            // color in shapes
            // important: check if bug with this numColors.blue += pop[i].party * pop[i].people;numColors.red += pop[i].people
            var whetherDems = locationsOfSplits[stateNameLocal][shouldChange]["dems"]
            var cornersArray = locationsOfSplits[stateNameLocal][shouldChange]["corner"]
            for (var i = cornersArray.length - 1; i >= 0; i--) {
                var myCorners = cornersArray[i]
                var polygon = document.createElement('polygon')
                     
                if(whetherDems[i]){
                    //   <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
                    // console.log(myCorners)
                    allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).enter().insert("polygon", "circle")
                        .attr("points", function(d){
                            return d
                        })
                        .attr("style", "fill:blue;")
                        .attr("opacity", "0.1"))
                    // performBorderOperation(minLine, "black")
                } else {
                    // console.log(myCorners)
                    allPolygons.push(svg.selectAll("#mySVG").data([myCorners]).enter().insert("polygon", "circle")
                        .attr("points", function(d){
                            return d
                        })
                        .attr("style", "fill:red;")
                        .attr("opacity", "0.1"))
                } 
            }

            var minLineLocal = locationsOfSplits[stateNameLocal][shouldChange]["splits"]
            var colorActual = "black"

            console.log("herePerformborder")
            var allLocals = minLineLocal.split("y")
            console.log(allLocals)
            
            for (var i = allLocals.length - 1; i >= 0; i--) {
                console.log(i)
                var minLines = allLocals[i].split(",")
                var minLine = [{x1: parseFloat(minLines[0]),y1: parseFloat(minLines[1]), x2: parseFloat(minLines[2]),y2:parseFloat(minLines[3])}]
                console.log(minLine)
                allMyLines.push(svg.selectAll(".split").data(minLine)
                    .enter().append("line", ".split")
                    .attr("x1", function(d) {
                        return Math.floor(d.x1)
                    })
                    .attr("x2", function(d) {
                        return Math.floor(d.x2)
                    })
                    .attr("y1", function(d) {
                        return Math.floor(d.y1)
                    })
                    .attr("y2", function(d) {
                        return Math.floor(d.y2)
                    })
                    .attr("style", "stroke:"+colorActual+"; stroke-width:2"))
            }
            
            console.log(allMyLines)
            console.log("hello")
        }
    }
}

module.exports = StateD3Component;
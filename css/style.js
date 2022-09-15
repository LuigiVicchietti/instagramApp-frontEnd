import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000'
    },

    header: {
        backgroundColor: 'black',
        height: 70,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    logoInsta:{
        marginTop:6,
        marginLeft:10
    },

    atividadesHeader:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:0,
        marginLeft:10
    },

    imgInsta: {
        width:120,
        height:60,
    },

    iconesHeaderPostar: {
        width:35,
        height:35,
        marginTop:21,
        marginRight:3,
        marginLeft:3
    },

    iconesHeaderLike: {
        width:45,
        height:45,
        marginTop:16,
        marginLeft:3
    },

    iconesHeaderDirect: {
        width:50,
        height:50,
        marginTop:9,
        marginRight:3,
    },


    viewStories: {
        flexDirection:'row',
        justifyContent:'center',
        height:90,
    },

    scrollviewstories:{
        justifyContent:'center',
    },

    textStories: {
        fontSize:10,
        fontFamily:'Arial',
        color:'white',
        textAlign:'center'
    },

    storiePlus: {
        flexDirection:'column',
        justifyContent:'center',
        marginTop:1,
        marginLeft:20,
        marginRight:25
    },

    elementsStoriePlus:{
        flexDirection:'row'
    },

    imgPlus: {
        width:60,
        height:60,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000000',
        overflow:'hidden',
        marginBottom:2
    },

    imgPlusIcone:{
        width:17,
        height:17,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000000',
        overflow:'hidden',
        marginTop:43,
        marginLeft:-18
    },

    stories:{
        flexDirection:'column',
        justifyContent:'center',
        marginTop:1,
        marginLeft:7,
        marginRight:10
    },

    backgroundStories: {
        width:60,
        height:60,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:3,
        borderColor:'#EB7732',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    },

    imgStories:{
        width:50,
        height:50,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000000',
        overflow:'hidden',
        marginTop:2,
        marginBottom:2
    },

    viewPosts:{
        flexDirection:'column',
        justifyContent:'center',
    },

    headerPosts:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        marginTop:5,
        marginBottom:5
    },

    autorPosts:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:5
    },

    autorPost:{
        width:40,
        height: 40,
        marginLeft:15,
        marginRight:5,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },

    backgroundStoriesPost: {
        width:40,
        height:40,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:3,
        borderColor:'#EB7732',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
        marginRight:5,
    },

    autorStoriesPost:{
        width:32,
        height:32,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#000000',
        overflow:'hidden',
        marginTop:2,
        marginBottom:2,
        
    },

    nomeAutor:{
        fontSize:14,
        fontFamily:'Arial',
        fontWeight:'bold',
        color:'white',
        marginTop:13,
        marginLeft:3,
        textAlign:'center'
    },

    tresPontos:{
        width:50,
        height:50,
        marginTop:5,
        marginRight:3,
    },

    postPadrao:{
        width:413,
        height:350
    },

    postPadrao2:{
        width:413,
        height:420
    },

    postAlternativo:{
        width:413,
        height:250
    },

    atividadesPosts:{
        flexDirection:'column',
        justifyContent:'flex-start'
    },

    funcoesPosts:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:48
    },

    interacoesPosts:{
        flexDirection:'row',
        justifyContent:'center',
    },

    iconeLikePost:{
        width:45,
        height:50,
        marginRight:3,
    },

    iconeComentarPost:{
        width:35,
        height:40,
        marginTop:5,
        marginRight:3,
    },

    iconeEnviarPost:{
        width:45,
        height:45,
        marginTop:2,
        marginRight:3,
    },

    iconeSalvar:{
        width:55,
        height:55,
        marginRight:3,
    },

    curtidas:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft:5
    },

    descricaoPost:{
        margin:5,

    },

    textBold:{
        fontSize:12,
        fontFamily:'Arial',
        fontWeight:'bold',
        color:'white',
    },

    textDescricao:{
        fontSize:12,
        fontFamily:'Arial',
        color:'white',
        textAlign:'auto'
    },

    textResposta:{
        fontSize:12,
        fontFamily:'Arial',
        color:'white',
        textAlign:'auto',
        marginLeft:17
    },

    textCinza:{
        fontSize:12,
        fontFamily:'Arial',
        color:'#696969',
        textAlign:'auto'
    },

    textLink:{
        fontSize:12,
        fontFamily:'Arial',
        color:'#87CEFA',
    },

    footer: {
        backgroundColor: 'black',
        height: 60,
        flexDirection:'row',
        justifyContent: 'center'
    },

    atividadesFooter: {
        flexDirection:'row',
        justifyContent:'space-around'
    },

    iconesFooter:{
        width:35,
        height:35,
        marginTop:10,
        marginRight:30,
        marginLeft:20
    },

    iconesFooterHome: {
        width:30,
        height:30,
        marginTop:10,
        marginRight:30,
    },

    iconesFooterShop: {
        width:37,
        height:37,
        marginTop:6,
        marginRight:30,
        marginLeft:15
    },

    perfilFooter: {
        width:30,
        height: 30,
        marginTop:10,
        marginLeft:5,
        borderRadius:50,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center'
    }
});
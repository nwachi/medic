import {useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,SafeAreaView,ImageBackground,Image,TouchableOpacity}from 'react-native'; 
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../components/themes';




export function Profile({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    
    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Questrial_400Regular });
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
     
    return (
       <SafeAreaView style={styles.areaView}>
         <View style={styles.Container}>
            
            <ImageBackground 
                        source={require('../../assets/images/googleMap.jpg')}
                        resizeMode='cover'
                        style={styles.headerBg}
                        >
                <View style={styles.cont}>
                    <View style={styles.imgContainer}>
                        <Image 
                          source={require('../../assets/images/doctorpic.jpg')}
                          style={styles.proImage}
                        />
                    </View>
                
                        <View style={styles.drArea}>
                          <Text style={styles.drName}>Dr.Cren Steve</Text>
                          <Text style={styles.drScope}>Endochrinologist</Text>
                        </View>

                        
                 </View>
            </ImageBackground>

             <View style={styles.iconsBlock}>
                    <TouchableOpacity style={{borderWidth:1,borderRadius:10,paddingHorizontal:6,paddingVertical:6,marginRight:18}}>
                     <FontAwesomeIcon
                        mode='contained' 
                        icon={faPhone} 
                        size={28} 
                        color='darkBlue'
                        
                        /></TouchableOpacity>

                        <TouchableOpacity style={{paddingLeft:30,borderWidth:1,borderRadius:10,paddingHorizontal:6,paddingVertical:6,marginRight:17}}>
                     <FontAwesomeIcon 
                        icon={faMessage} 
                        size={28} 
                        color='blue'
                     
                        /></TouchableOpacity>

                      <TouchableOpacity style={{paddingLeft:30,borderWidth:1,borderRadius:10,paddingHorizontal:6,paddingVertical:6}}>
                     <FontAwesomeIcon 
                        icon={faWallet} 
                        size={28} 
                        color='orange'
                        
                        /></TouchableOpacity>
                </View> 

                <View style={styles.textBlock}>
                    <View style={{paddingLeft:30,borderRightWidth:1}}>
                        <Text style={styles.text1}>Patients</Text>
                        <Text style={styles.text2}>1000+</Text>
                    </View>

                    <View style={{paddingLeft:31,borderRightWidth:1}}>
                    <Text style={styles.text1}>Experience</Text>
                    <Text style={styles.text2}>4 years</Text>
                    </View>

                    <View style={{paddingLeft:31}}>
                    <Text style={styles.text1}>Reviews</Text>
                    <Text style={styles.text2}>5.0</Text>
                    </View>
                </View>
                <View style={{paddingTop:20,paddingLeft:30,paddingBottom:20}}>
                    <Text style={styles.text1}>Description</Text>
                </View>

                <View style={{paddingLeft:30,paddingRight:30}}>
                   <Text style={{color:'darkbrown',fontSize:19,}} >
                    He was born in india where he grew up till the age of 12 afterwhich he lived in
                    Hamiltan Ontario.He obtained his Bachelors of Sciences in Life Sciences at Queens University in <Text style={{color:'blue'}}>More...</Text>
                   </Text>
                </View>

                <View style={{paddingTop:20,paddingLeft:30,paddingBottom:20}}>
                    <Text style={styles.text1}>His Specialties</Text>
                </View>

              <View style={styles.lastBlock}>

               <View style={styles.block1}>
                 <View style={styles.no1}><Text style={{color:'white',fontWeight:'bold',paddingRight:20}}>Endochrinology</Text></View>
                 <View style={styles.regBlock}><Text style={styles.blockText}>biology</Text></View>
                 <View style={styles.regBlock}><Text style={styles.blockText}>surgery</Text></View>
               </View>


                <View style={styles.block2}>
               <View style={styles.regBlock}><Text style={styles.blockText}>psychology</Text></View>
               <View style={styles.regBlock}><Text style={styles.blockText}>Genetics</Text></View>
               <View style={styles.regBlock}><Text style={styles.blockText}>Anatomy</Text></View>
               </View> 

              </View>

              <TouchableOpacity style={styles.orgBlock}><Text style={{color:'white',fontWeight:'bold',paddingLeft:50,fontSize:18}}>Request for Appointment</Text></TouchableOpacity>
 
         </View>
       </SafeAreaView>
    )
   }
   const styles = StyleSheet.create({
    cont:{
        flexDirection:'row'
    },
      areaView:{
        flex:1,
        backgroundColor:'#FAE5D3'
      },
      Container:{
        flex:1,
        
      },
      headerBg:{
        height:220
      },
      
      drArea:{
        marginTop:150,
        paddingLeft:25
    },
      drName:{
        fontSize:30,
        fontWeight:Theme.fonts.fontWeights.medium,
        color:'darkbrown'
      },
      drScope:{
        fontSize:Theme.fonts.fontSize.body,
        fontWeight:Theme.fonts.fontWeights.regular,
        color:'darkbrown'
      },
      proImage:{
        width:130,
        height:173,
        borderRadius:10
      },
      imgContainer:{
        marginTop:100,
        paddingLeft:30
      },
      iconsBlock:{
        flexDirection:'row',
        paddingLeft:200,
        marginTop:26,
      },
      textBlock:{
        flexDirection:'row',
        paddingTop:20
      },
      text1:{
        paddingRight:16,
        fontSize:20,
        color:'darkbrown'
      },
      text2:{
        paddingRight:16,
        fontSize:19,
        color:'blue',
        paddingLeft:15
      },
      lastBlock:{
        paddingLeft:33,
        flexDirection:'row',
        
      },
      no1:{
        marginRight:20,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:17,
       paddingLeft:30,
       height:40,
       width:130,
       borderShown:'true',
       bordercolor:'black',
       borderWidth:1,
       borderRadius:20,
       backgroundColor:'blue',
      },
      regBlock:{
        alignItems:'center',
        justifyContent:'center',
        borderShown:'true',
        marginBottom:17,
       paddingLeft:30,
       height:40,
       width:130,
       borderWidth:1,
       bordercolor:'black',
       borderRadius:20,
       backgroundColor:'white',
      },
      block2:{
        paddingLeft:45
      },
      blockText:{
        alignSelf:'center',
        fontSize:16,
        marginRight:20,
        fontWeight:'bold'
      },
      orgBlock:{
        width:300,
        height:40,
        backgroundColor:'orange',
        justifyContent:'center',
        marginLeft:48,
        borderRadius:20,
        borderShown:'true',
        marginTop:20,
        borderWidth:1,
       bordercolor:'black',
       borderRadius:20,
      },
   })
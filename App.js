import * as React from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, Touchable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabScreen() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#FFFFFF'}}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="home" color={focused ? "#4982C1" : "#DADADA"} size={26}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Transaction History" 
      component={TransactionHistoryScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="exchange" color={focused ? "#4982C1" : "#DADADA"} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="user" color={focused ? "#4982C1" : "#DADADA"} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name= "Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="goHome" component={HomeTabScreen} />
        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#005690',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Account Registration" 
        component={AccountRegistration} />

        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#005690',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Top Up" 
        component={TopUp} />

        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#005690',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="QR Payment" 
        component={QRPayment} />

        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#005690',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Transfer" 
        component={Transfer} />

        <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#005690',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Payment Confirmation" 
        component={QRPayConfirm} />

      <Stack.Screen options={{headerShown: false}} name="Top Up Succes" component={TopUpSucces} />
      <Stack.Screen options={{headerShown: false}} name="Pay Succes" component={PaySuccesScreen} />
      <Stack.Screen options={{headerShown: false}} name="Transfer Succes" component={TransferSucces} />

      <Stack.Screen 
        options={{    
          headerStyle: {
          backgroundColor: '#005690',
          elevation: null
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#fff'
        }} 
        name="Transfer  " 
        component={CheckTransfer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  return (
    <View>
      <View style={{alignItems: 'center', paddingTop: 60}}>
        <Image source={require('./assets/logo/ewallet.png')} style={{height: 170, width: '50%'}} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#4982C1', fontSize: 35, fontWeight: 'bold'}}> e-wallet </Text>
      </View>
      <View style={{paddingHorizontal: 25, paddingTop: 20}}>
        <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
        placeholder= "Email"
        onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={{paddingHorizontal: 25, paddingTop: 20}}>
        <TextInput secureTextEntry={true} style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
        placeholder= "Password"
        onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{ paddingHorizontal: 45, paddingTop: 35}}>
        <Button title="Login" color='#4982C1' 
          onPress={()=> {
          navigation.navigate('goHome')
        }}
        />
      </View>
      <View style={{marginTop: 25, alignItems: 'center'}}>
        <Text onPress={()=> { navigation.navigate('Account Registration')}}> Registration </Text>
      </View>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={{paddingHorizontal: 25, backgroundColor: '#FFFFFF'}}>
        <View>
          <Text style={{paddingTop: 35, fontSize: 18, color:'#484848'}}>Your Balance :</Text>
          <Text style={{paddingTop: 15, fontSize: 40, color:'#575757', fontWeight: 'bold'}}>Rp. 1.234.567.000</Text>    
        </View>
      </View>
      <View style={{paddingHorizontal: 25, backgroundColor: '#E5E5E5', paddingTop: 15}}>
        <View style={{flexDirection: 'row', backgroundColor: '#4982C1', borderRadius: 6}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> { navigation.navigate('Top Up')}}>
              <Image source={require('./assets/icon/topup.png')} style={{height: 55, width: 55, marginTop: 20, marginBottom: 8}}/>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Top Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> { navigation.navigate('QR Payment')}}>
              <Image source={require('./assets/icon/qrpay.png')} style={{height: 55, width: 55, marginTop: 20, marginBottom: 8}} />
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: 8}}>QR Pay</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> { navigation.navigate('Transfer')}}>
              <Image source={require('./assets/icon/transfer.png')} style={{height: 55, width: 55, marginTop: 20, marginBottom: 8}} />
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingTop: 45}}>
          <Text style={{fontSize: 15, fontWeight: '400'}}>5 Latest Transaction</Text>
        </View>
        <View style={{paddingTop: 15}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25, marginBottom: 70}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function AccountRegistration({ navigation }) {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [name, setName] = React.useState()
  const [phone, setPhone] = React.useState()
  return (
    <View style={{}}>
      <View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Email"
          onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput secureTextEntry={true} style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Password"
          onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Name"
          onChangeText={text => setName(text)}
          />
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 45}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "No Handphone"
          onChangeText={text => setPhone(text)}
          />
        </View>
      </View>
      <View>
        <View style={{ paddingHorizontal: 45, paddingTop: 65}}>
          <Button title="Submit" color='#4982C1' 
            onPress={()=> {
            navigation.navigate('Login')
          }}
          />
        </View>
      </View>
    </View>
  );
}

function TransactionHistoryScreen() {
  return (
    <View style={{paddingHorizontal: 25}}>
      <View style={{paddingTop: 45}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{backgroundColor: '#FFFFFF', paddingLeft: 15, flexDirection: 'row', paddingBottom: 10}}>
            <Image source={require('./assets/icon/transaksi.png')} style={{height: 35, width: 35, marginVertical: 15}} />
            <View style={{alignItems: 'flex-start', paddingTop: 10, paddingLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight: '300'}}>Rp. 80.000</Text>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>Transfer to 082240206861</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}>
              <Text style={{paddingTop: 10, fontSize: 15, fontWeight: '300'}}>20/08/2020</Text>
            </View>
          </View>
        </View>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <View style={{ height: '45%', backgroundColor: '#005690'}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('./assets/icon/lingkaran.png')} style={{height: 100, width: 100, marginVertical: 15}} />
        </View>
        <View style={{paddingTop: 25, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>R. Rogers Dwiputra Setiady</Text>
          <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 15}}>082240206862</Text>
        </View>
      </View>
      <View style={{paddingBottom: 10, paddingHorizontal: 50}}>
        <TouchableOpacity style={{backgroundColor: '#4982C1' , borderRadius: 4, marginTop: 45, height: 55, justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CHANGE PROFILE</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingBottom: 10, paddingHorizontal: 50}}>
        <TouchableOpacity style={{backgroundColor: '#4982C1' , borderRadius: 4, marginTop: 45, height: 55, justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingBottom: 10, paddingHorizontal: 50}}>
        <TouchableOpacity style={{backgroundColor: '#4982C1' , borderRadius: 4, marginTop: 45, height: 55, justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TopUp({ navigation }) {
  const [topUp, setTopUp] = React.useState()
  return (
    <View>
      <View style={{paddingTop: 50, alignItems: 'center'}}>
        <Image source={require('./assets/icon/dompet.png')} style={{height: 175, width: 175}} />
      </View>
      <View style={{paddingTop: 25, alignItems: 'center'}}>
        <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal', backgroundColor:'#FFF', width: 350}}
          placeholder= "Nominal Top Up"
          onChangeText={text => setTopUp(text)}
        />
      </View>
      <View style={{paddingHorizontal: 45, paddingTop: 35}}>
        <Button title="Submit" color='#4982C1' 
              onPress={()=> {
              navigation.navigate('Top Up Succes')
            }}
            />
      </View>
    </View>
  );
}

function TopUpSucces({ navigation }) {
  return (
    <View>
      <View style={{paddingTop: 70, alignItems: 'center'}}>
        <Image source={require('./assets/icon/dompet.png')} style={{height: 175, width: 175}} />
      </View>
      <View style={{paddingTop: 25, alignItems: 'center'}}>
        <View style={{paddingTop: 20}}>
          <Text style={{fontSize: 28}}>Top Up Complete</Text>
        </View>
        <View style={{paddingTop: 20, paddingBottom: 30}}>
          <Text style={{fontSize: 28}}>Rp. 60,000</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 35, height: 100, backgroundColor: '#4982C1', alignItems: 'center'}}>
        <View style={{paddingTop: 15}}>
          <Text style={{fontSize: 20, color: '#FFF'}}>20 August 2020</Text>
        </View>
        <View style={{paddingTop: 15}}>
          <Text style={{fontSize: 20, color: '#FFF'}}>VA Mandiri</Text>
        </View>
      </View>
      <View style={{paddingTop: 35, paddingHorizontal: 35, borderRadius: 6}}>
        <Button title="FINISH" color='#4982C1' 
          onPress={()=> {
          navigation.navigate('goHome')
          }}
        />
      </View>
    </View>
  );
}

function QRPayment({ navigation }) {
  return (
    <View style={{paddingTop: 100, alignContent: 'center', paddingLeft: 18, paddingTop: 150}}>
      <TouchableOpacity onPress={()=> { navigation.navigate('Payment Confirmation')}}>
        <View style={{backgroundColor: '#C4C4C4', height: '85%', width: '95%', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./assets/icon/camera.png')} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function QRPayConfirm({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <Image source={require('./assets/icon/konfirmasi-pembayaran.png')} style={{height: 250, width: 250}} />
      </View>
      <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, marginHorizontal: 35, borderColor: '#B2B2B2'}}>
          <Text style={{fontSize: 28, textAlign: 'center'}}>Rp. 60,000</Text>
      </View>
      <View style={{backgroundColor: '#4982C1', marginHorizontal: 35, marginTop: 25, height: 150, borderRadius: 6}}>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '200', paddingTop: 13}}>Payment To :</Text>
        <Text style={{textAlign: 'center', fontSize: 28, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Basicschool</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '300', paddingTop: 2}}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <View style={{marginHorizontal: 35, marginTop: 25}}>
        <Button title="SUBMIT" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("Pay Succes")
          }}
        />
      </View>
    </View>
  );
}

function PaySuccesScreen({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <Image source={require('./assets/icon/konfirmasi-pembayaran.png')} style={{height: 250, width: 250}} />
      </View>
      <View>
        <Text style={{fontSize: 28, textAlign: 'center'}}>Payment Complete!</Text>
      </View>
      <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, marginHorizontal: 35, borderColor: '#B2B2B2'}}>
          <Text style={{fontSize: 28, textAlign: 'center'}}>Rp. 60,000</Text>
      </View>
      <View style={{backgroundColor: '#4982C1', marginHorizontal: 35, marginTop: 25, height: 150, borderRadius: 6}}>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '400', paddingTop: 13}}>20 August 2020</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Merchant : Basicschool</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <View style={{marginHorizontal: 35, marginTop: 25}}>
        <Button title="FINISH" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("goHome")
          }}
        />
      </View>
    </View>
  );
}


function Transfer({ navigation }) {
  const [number, setRecaiverNumber] = React.useState()
  return (
    <View style={{flex:1, alignItems: 'center', backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 45}}>
        <Image source={require('./assets/icon/proses-transfer.png')} style={{height: 200, width: 300}} />
      </View>
      <View style={{width: 300, paddingTop: 70}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Receiver Phone Number"
          onChangeText={text => setRecaiverNumber(text)}
          />
        </View>
      <View style={{width: 300, marginTop: 35}}>
        <Button title="CHECK NUMBER" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("Transfer  ")
          }}
        />
      </View>
    </View>
  );
}

function CheckTransfer({ navigation }) {
  const [number, setRecaiverNumber] = React.useState()
  return (
    <View style={{flex:1, backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <Image source={require('./assets/icon/proses-transfer.png')} style={{height: 250, width: 350}} />
      </View>
      <View style={{ paddingTop: 70, paddingHorizontal: 35}}>
          <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: "#C3C3C3", fontSize: 16, fontWeight: 'normal'}}
          placeholder= "Receiver Phone Number"
          onChangeText={text => setRecaiverNumber(text)}
          />
        </View>
      <View>
        <View style={{paddingTop: 15}}>
          <Text style={{fontSize: 18, fontWeight: '400', textAlign: 'center'}}>Receiver : </Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: '300', textAlign: 'center'}}>Dendy Aditya</Text>
        </View>
      </View>
      <View style={{marginTop: 35, paddingHorizontal: 35}}>
        <Button title="TRANSFER" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("Transfer Succes")
          }}
        />
      </View>
    </View>
  );
}

function TransferSucces({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor: '#FFF'}}>
      <View style={{alignItems: 'center', paddingTop: 25}}>
        <Image source={require('./assets/icon/proses-transfer.png')} style={{height: 250, width: 350}} />
      </View>
      <View>
        <View style={{paddingTop: 15}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Transfer Succes</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Rp. 100,000</Text>
        </View>
      <View style={{backgroundColor: '#4982C1', marginHorizontal: 35, marginTop: 25, height: 150, borderRadius: 6}}>
        <Text style={{textAlign: 'center', fontSize: 24, color:'#FFF', fontWeight: '400', paddingTop: 13}}>20 August 2020</Text>
        <Text style={{textAlign: 'center', fontSize: 24, color:'#FFF', fontWeight: '400', paddingTop: 13}}>Receiver : Dendy aditya</Text>
        <Text style={{textAlign: 'center', fontSize: 24, color:'#FFF', fontWeight: '400', paddingTop: 2}}>082240206XXX</Text>
      </View>
      </View>
      <View style={{marginTop: 35, paddingHorizontal: 35}}>
        <Button title="FINISH" color='#4982C1' 
          onPress={()=> {
          navigation.navigate("goHome")
          }}
        />
      </View>
    </View>
  );
}


export default App;

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from '@env';
import RazorpayCheckout from 'react-native-razorpay';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;

  const amount = 1000;
  const currency = "INR";
 
  const handlePayment = () => {
    var options = {
      description: 'Buy BMW CAR',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: razorpayKeyId,
      amount: amount * 100,
      name: 'test order',
      order_id: "https://api.razorpay.com/v1/orders", 
      prefill: {
        email: 'anishkumarak8686@gmail.com',
        contact: '8870208686',
        name: 'User 1'
      },
      theme: { color: '#F37254' }
    };

    if (RazorpayCheckout) {
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        console.log(error);
        alert(`Error: ${error.code} | ${error.description}`);
      });
    } else {
      alert("RazorpayCheckout is not initialized properly");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePayment}>
        <View style={{ backgroundColor: 'green', padding: 10, margin: 10 }}>
          <Text style={{ color: 'white' }}>Pay Now</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

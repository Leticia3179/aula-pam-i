import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
       container: {
        borderWidth: RFPercentage(0.5),
        borderColor: 'orange',
       padding: RFPercentage(1.5),
       borderRadius:RFPercentage(1.5),
       alignItems:'center',
       width: '90%',
       },

})

export default styles;
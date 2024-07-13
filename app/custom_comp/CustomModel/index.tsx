import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  modelVisible:boolean
   Children: React.ReactNode 
   setModelVisible:(modelVisible:boolean)=>void;
}

const CustomModel = ({ modelVisible, Children, setModelVisible }: Props) => {
  return (
    <Modal
      visible={modelVisible}
      transparent
      animationType="slide"
      hardwareAccelerated
    >
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          flex: 1,
          justifyContent: "center",
          alignItems:"center"
        }}
        onPress={() => {
          setModelVisible(!modelVisible);
        }}
      >
        <Text>{Children}</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModel;

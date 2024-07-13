import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardTypeOptions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

// type FormName = {
//   name: FieldPath;
// };

type InputType = {
  label?: string;
  name?: string;
  placeholder?: string;
  icon?: JSX.Element;
  iconPostion?: string;
  value?: string;
  onChangeText?: (text?:any) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  primary?: boolean;
  whiteBg?: boolean;
  width?: number;
  error?: string;
  multiline?: boolean;
};

const CustomInput = ({
  label,
  icon,
  iconPostion,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  primary,
  whiteBg,
  error,
  multiline,
}: // width,
InputType) => {
  const [focused, setFocused] = React.useState(false);
  // const width = 60

  const getFlexDirection = () => {
    if (!icon && !iconPostion) {
      return "flex-row";
    }
    if (icon && iconPostion) {
      if (iconPostion === "left") {
        return "flex-row";
      } else {
        if (iconPostion === "right") {
          return "flex-row-reverse";
        }
      }
    }
  };

  const getBgColor = () => {
    if (primary) return "bg-[#F8F9FB] border border-[#E5E5E7]";
    if (whiteBg) return "bg-[#Ffff] border border-[#D3D3D3]";
  };
  return (
    <>
      <View className="py-1">
        {label && (
          <Text className="mb-2 font-normal text-xs  ">
            {label}
          </Text>
        )}
        <View
          className={`h-14 rounded-lg ${getBgColor()}  items-center px-3 ${getFlexDirection()}`}
        >
          <View>{icon && icon}</View>
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            keyboardType={keyboardType as KeyboardTypeOptions}
            onBlur={() => {
              setFocused(false);
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onChangeText={onChangeText}
            value={value}
            // style={{ backgroundColor: "blue" }}
            className="flex-1 h-11 px-2 "
          />
        </View>
        {error && (
          <Text className=" text-red-500 text-[8px] ">
            {error}
          </Text>
        )}
      </View>
      {/* {multiline && <Text>Hello</Text>} */}
    </>
  );
};

export default CustomInput;
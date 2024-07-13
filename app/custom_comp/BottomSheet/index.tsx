import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";


type BottomType = {
  message: React.ReactNode;
  height: number;
  closeOnDragDown: boolean;
  // ref: RBSheetProps;
};

const CustomBottomSheet = React.forwardRef(
  ({ message, height, closeOnDragDown }: BottomType, ref) => {
    return (
      <RBSheet
        ref={ref}
        height={height}
        openDuration={250}
        closeOnDragDown={closeOnDragDown}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
          },
        }}
      >
        {message}
        {/* <TimelineBottomSheet /> */}
      </RBSheet>
    );
  }
);
export default CustomBottomSheet;

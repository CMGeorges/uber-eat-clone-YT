import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const ViewCart = ({ props }) => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  const totalShowed = () => {
    switch (props.location.city) {
      case "US":
        const totalUSD = total.toLocalString("en", {
          style: "currency",
          currency: "USD",
        });
        return totalUSD;
      case "CA":
        const totalCAD = total.toLocalString("en", {
          style: "currency",
          currency: "CAD",
        });
        return totalCAD;
      case "EU":
        const totalEUR = total.toLocalString("fr", {
          style: "currency",
          currency: "EUR",
        });
        return totalEUR;
      case "IN":
        const totalINR = total.toLocalString("en", {
          style: "currency",
          currency: "INR",
        });
        return totalINR;
      case "AU":
        const totalAUD = total.toLocalString("en", {
          style: "currency",
          currency: "AUD",
        });
        return totalAUD;
      case "JP":
        const totalJPY = total.toLocalString("en", {
          style: "currency",
          currency: "JPY",
        });
        return totalJPY;
      case "HK":
        const totalHKD = total.toLocalString("en", {
          style: "currency",
          currency: "HKD",
        });
        return totalHKD;
      case "SG":
        const totalSGD = total.toLocalString("en", {
          style: "currency",
          currency: "SGD",
        });
        return totalSGD;
      case "MY":
        const totalMYR = total.toLocalString("en", {
          style: "currency",
          currency: "MYR",
        });
        return totalMYR;
      case "TH":
        const totalTHB = total.toLocalString("en", {
          style: "currency",
          currency: "THB",
        });
        return totalTHB;
      case "PH":
        const totalPHP = total.toLocalString("en", {
          style: "currency",
          currency: "PHP",
        });
        return totalPHP;
      case "ID":
        const totalIDR = total.toLocalString("en", {
          style: "currency",
          currency: "IDR",
        });
        return totalIDR;
      case "VN":
        const totalVND = total.toLocalString("en", {
          style: "currency",
          currency: "VND",
        });
        return totalVND;
      case "KR":
        const totalKRW = total.toLocalString("en", {
          style: "currency",

          currency: "KRW",
        });
        return totalKRW;
      default:
        return totalCAD;
    }
  };

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 130,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                VIEWCART
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                {totalShowed}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

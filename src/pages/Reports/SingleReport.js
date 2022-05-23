import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  PDFDownloadLink
} from "@react-pdf/renderer";
import RalewayRegular from "../../assets/fonts/Raleway-Regular.ttf";
// Font.register({
//   family: "Raleway",
//   fonts: [
//     {
//       src: '../../assets/fonts/Raleway-Regular.ttf'
//     }
//   ]
// });
Font.register({
  family: "SourceSansPro",
  fonts: [
    {
      src:
        "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
    }, // font-style: normal, font-weight: normal
    {
      src:
        "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap",
      fontWeight: 600
    }
  ]
});
const SingleReport = () => {
  const fullName = useSelector(state => state.user.name);
  const username = useSelector(state => state.user.username);
  const region = useSelector(state => state.user.region);
  const token = useSelector(state => state.user.access_token);
  const userId = useSelector(state => state.user.userId);
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  console.log(location.state);

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      display: "flex",
      alignContent: "space-around",
      justifyContent: "space-around",
      fontSize: 14,
      marginTop: "100px"
    },
    header: {
      fontSize: "12px",
      fontWeight: "heavy",
      fontFamily: "SourceSansPro",
      width: 150
    },
    headerTwo: {
      fontSize: "12px",
      fontWeight: "heavy",
      fontFamily: "SourceSansPro",
      width: 100,
      textAlign: "center"
    }
  });
  const MyDocument = data =>
    <Document>
      <Page
        style={{ paddingHorizontal: 40, paddingVertical: 20, marginTop: 50 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.header}>
            Custodian: {fullName}
          </Text>

          <Text style={styles.header}>
            Region Name: {region}
          </Text>
          <Text style={styles.header}>
            Week: {location.state.week}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px",
            marginTop: "50px"
          }}
        >
          <Text style={styles.header}>DETAILS OF WEEK</Text>
          <Text style={styles.headerTwo}>PREVIOUS WEEK</Text>
          <Text style={styles.headerTwo}> CURRENT WEEK</Text>
          <Text style={styles.headerTwo}>CHANGE</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}># of TPMs Deployed</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.deployed}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.active}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>

        {/* active */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}># of TPMs Deployed</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.deployed}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.active}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>

        {/* inactive */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}># of TPMs Deployed</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.deployed}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            h1
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>
        {/* TICKET */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>TOTAL TICKET SALES</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.deployed}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            h7
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>

        {/* avg */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>AVG ACTIVE TS per TPM</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.avg.$numberDecimal}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            h9
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>
        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
          Retailers
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>Name</Text>
          <Text style={styles.headerTwo}>Retailers</Text>
          <Text style={styles.headerTwo}>Amount</Text>
          <Text style={styles.headerTwo}>% Contribution</Text>
        </View>
        {location.state.retailers.map(ele => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <Text style={styles.header}>
                {ele.name}
              </Text>
              <Text style={styles.headerTwo}>
                {ele.retailer}
              </Text>
              <Text style={styles.headerTwo}>
                {ele.amount}
              </Text>
              <Text style={styles.headerTwo}>
                {ele.contribution}
              </Text>
            </View>
          );
        })}

        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
          RETAILER INTERACTION - PROVIDE RETAILER TRANSACTION
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px",
            marginTop: "10px"
          }}
        >
          <Text style={styles.header}>ACTIVITY</Text>
          <Text style={styles.headerTwo}>PREVIOUS WEEK</Text>
          <Text style={styles.headerTwo}> CURRENT WEEK</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>CALL</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.call}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.call}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>VISITATION</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.visitation}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.visitation}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px",
            marginTop: "50px"
          }}
        >
          <Text style={styles.header}>#DETAILS</Text>
          <Text style={styles.headerTwo}>PREVIOUS WEEK</Text>
          <Text style={styles.headerTwo}> CURRENT WEEK</Text>
          <Text style={styles.headerTwo}>CHANGE</Text>
        </View>

        {/* day1 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>1 30 to 59 Days</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.day1}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.day1}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>

        {/* day2 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>2 60 to 89 Days</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.day2}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.day2}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>

        {/* day3*/}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Text style={styles.header}>3 90 to 179 Days</Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFEDED",
              borderColor: "#FFEDED",
              color: "#D00000",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.day3}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              color: "#006052",
              backgroundColor: "#D2FFD0",
              borderColor: "#D2FFD0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            {location.state.day3}
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: "#FFF9E0",
              color: "#9D7E00",
              borderColor: "#FFF9E0",
              borderRadius: "18px",
              width: 100,
              textAlign: "center",
              fontFamily: "SourceSansPro",
              fontSize: "10px"
            }}
          >
            H9
          </Text>
        </View>

      {/* day4 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <Text style={styles.header}>4 180 to 359 Days</Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFEDED",
            borderColor: "#FFEDED",
            color: "#D00000",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          {location.state.day4}
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            color: "#006052",
            backgroundColor: "#D2FFD0",
            borderColor: "#D2FFD0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          {location.state.day4}
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFF9E0",
            color: "#9D7E00",
            borderColor: "#FFF9E0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          H9
        </Text>
      </View>

      {/* day5 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <Text style={styles.header}>5 360 to 719 Days</Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFEDED",
            borderColor: "#FFEDED",
            color: "#D00000",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          {location.state.day5}
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            color: "#006052",
            backgroundColor: "#D2FFD0",
            borderColor: "#D2FFD0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          {location.state.day5}
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFF9E0",
            color: "#9D7E00",
            borderColor: "#FFF9E0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          H9
        </Text>
      </View>

      {/* day6 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <Text style={styles.header}>6 720 and above</Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFEDED",
            borderColor: "#FFEDED",
            color: "#D00000",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          {location.state.day6}
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            color: "#006052",
            backgroundColor: "#D2FFD0",
            borderColor: "#D2FFD0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          {location.state.day6}
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFF9E0",
            color: "#9D7E00",
            borderColor: "#FFF9E0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          H9
        </Text>
      </View>

      {/* total */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <Text style={styles.header}>Total</Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFEDED",
            borderColor: "#FFEDED",
            color: "#D00000",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          -
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            color: "#006052",
            backgroundColor: "#D2FFD0",
            borderColor: "#D2FFD0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          -
        </Text>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            backgroundColor: "#FFF9E0",
            color: "#9D7E00",
            borderColor: "#FFF9E0",
            borderRadius: "18px",
            width: 100,
            textAlign: "center",
            fontFamily: "SourceSansPro",
            fontSize: "10px"
          }}
        >
          -
        </Text>
      </View>


      </Page>
      
    </Document>;

  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Entries">
        <div className="accounts-wrapper">
          <div className="custodian-wrapper">
            <div className="custodian-grid">
              <div className="custom-input-wrapper">
                <label htmlFor="name">Region: </label>
                <br />
                <input
                  className="auth-input auto"
                  type="text"
                  placeholder={region}
                  disabled
                />
              </div>
              <div className="custom-input-wrapper">
                <label htmlFor="name">Custodian</label>
                <br />
                <input
                  className="auth-input auto"
                  type="text"
                  placeholder={fullName}
                  disabled
                />
              </div>
            </div>
            <div className="custom-input-wrapper">
              <label htmlFor="name">Week: </label>
              <br />
              <input
                readOnly
                value={location.state.week}
                type="week"
                required
              />
            </div>
          </div>
          <div className="details">
            <div className="details-line">
              <p className="detail-header ">DETAILS OF WEEK</p>
              <p className="detail-header center">PREVIOUS WEEK</p>
              <p className="detail-header center">CURRENT WEEK</p>
              <p className="detail-header center">CHANGE</p>
            </div>
            <div className="details-line">
              <p className="detail-header"># of TPMs Deployed</p>
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                value={location.state.deployed}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header"># of Active TPMs</p>
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.active}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header"># of InActive TPMs</p>
              <input
                readOnly
                defaultValue={location.state.inactive}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.inactive}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">TOTAL TICKET SALES</p>
              <input
                readOnly
                value={location.state.totalTickets}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.totalTickets}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">AVG ACTIVE TS per TPM</p>
              <input
                readOnly
                // defaultValue={location.state.$numberDecimal}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.avg.$numberDecimal}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
          </div>
          <div className="top-tier-wrapper-full">
            <div className="form-info">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th style={{ textAlign: "center" }}>Retailer #</th>
                    <th style={{ textAlign: "center" }}>Amount</th>
                    <th style={{ textAlign: "center" }}>% Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {location.state.retailers.map((ele, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          {ele.name}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {ele.retailer}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {ele.amount}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {ele.contribution}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="retailer-interaction">
            <p className="detail-header ">
              RETAILER INTERACTION - PROVIDE RETAILER TRANSACTION
            </p>
            <div className="ri-line">
              <p className="detail-header ">ACTIVITY</p>
              <p className="detail-header center">PREVIOUS WEEK</p>
              <p className="detail-header center">CURRENT WEEK</p>
            </div>
            <div className="ri-line">
              <p className="detail-header">CALL</p>
              <input
                readOnly
                value={location.state.call}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.call}
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="ri-line">
              <p className="detail-header">VISITATION</p>
              <input
                readOnly
                value={location.state.visitation}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.visitation}
                className="auth-input auto"
                type="text"
              />
            </div>
          </div>
          <div className="details">
            <div className="details-line">
              <p className="detail-header ">#DETAILS</p>
              <p className="detail-header center">PREVIOUS WEEK</p>
              <p className="detail-header center">CURRENT WEEK</p>
              <p className="detail-header center">% CHANGE</p>
            </div>
            <div className="details-line">
              <p className="detail-header">1 30 to 59 Days</p>
              <input
                readOnly
                value={location.state.day1}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.day1}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">2 60 to 89 Days</p>
              <input
                readOnly
                value={location.state.day2}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                value={location.state.day2}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">3 90 to 179 Days</p>
              <input
                readOnly
                value={location.state.day3}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.day3}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">4 180 to 359 Days</p>
              <input
                readOnly
                value={location.state.day4}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.day4}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">5 360 to 719 Days</p>
              <input
                value={location.state.day5}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.day5}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">6 720 and above</p>
              <input
                readOnly
                value={location.state.day6}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.day6}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
            <div className="details-line">
              <p className="detail-header">Total</p>
              <input
                readOnly
                value={location.state.total}
                disabled
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                value={location.state.total}
                className="auth-input auto"
                type="text"
              />
              <input
                readOnly
                disabled
                className="auth-input auto"
                type="text"
              />
            </div>
          </div>
          <div className="button-wrapper">
            <PDFDownloadLink
              document={<MyDocument />}
              fileName="reports.pdf"
              style={{
                background: "#111",
                border: "0",
                width: "300px",
                padding: "10px",
                borderRadius: "5px",
                outline: "none",
                margin: "auto",
                fontFamily: '"SourceSansPro", sans-serif',
                fontWeight: "bold",
                cursor: "pointer",
                color: "white",
                padding: "15px",
                margin: "auto",
                display: "flex",
                justifyContent: "center"
              }}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download Pdf"}
            </PDFDownloadLink>
          </div>
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};
export default SingleReport;

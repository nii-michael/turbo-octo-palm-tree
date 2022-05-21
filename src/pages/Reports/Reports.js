import React, { useEffect, useState } from "react";
import DashboardMainWrapper from "../../components/DashboardMainWrapper";
import DashboardWrapper from "../../components/DashboardWrapper";
import { Document, Page, Text, View, StyleSheet, Font , PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from "react-redux";
import axios from "axios";
import Raleway from '../../assets/fonts/Raleway-Regular.ttf'
const Reports = () => {
  const [prevWeek, setPrevWeek] = useState([]);
  Font.register({ family: 'Raleway', src: Raleway });

  // Create styles

  const fullName = useSelector((state) => state.user.name);
  const username = useSelector((state) => state.user.username);
  const region = useSelector((state) => state.user.region);
  const token = useSelector((state) => state.user.access_token);
  const userId = useSelector((state) => state.user.userId);


  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/details/${username}/user/prev`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.avg.$numberDecimal);
        setPrevWeek(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
    },
    header: {
      fontSize: "15px", fontWeight: "700", fontFamily: "Raleway"
    }
  });

  const MyDocument = () => (
    <Document>
      <Page style={{ paddingHorizontal: 40, paddingVertical: 20 }}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text style={styles.header}>Custodian: {fullName}</Text>

          <Text style={styles.header}>Region Name: {region}</Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
          marginTop: "50px"
        }}>
          <Text style={styles.header}>DETAILS OF WEEK</Text>
          <Text style={styles.header}>PREVIOUS WEEK</Text>
          <Text style={styles.header}> CURRENT WEEK</Text>
          <Text style={styles.header}>CHANGE</Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"

        }}>
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
              fontFamily: "Raleway",
              fontSize: "10px",
            }}
          >
            {prevWeek.deployed}
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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            {prevWeek.active}
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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            H9
          </Text>
        </View>

        {/* active */}
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"

        }}>
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
              fontFamily: "Raleway",
              fontSize: "10px",
            }}
          >
            {prevWeek.deployed}
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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            {prevWeek.active}
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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            H9
          </Text>
        </View>

{/* inactive */}

<View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"

        }}>
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
              fontFamily: "Raleway",
              fontSize: "10px",
            }}
          >
            {prevWeek.deployed}
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
              fontFamily: "Raleway",
              fontSize: "10px",

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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            H9
          </Text>
        </View>
        {/* TICKET */}
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"

        }}>
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
              fontFamily: "Raleway",
              fontSize: "10px",
            }}
          >
            {prevWeek.deployed}
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
              fontFamily: "Raleway",
              fontSize: "10px",

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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            H9
          </Text>
        </View>

        {/* avg */}
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px"

        }}>
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
              fontFamily: "Raleway",
              fontSize: "10px",
            }}
          >
            hh
            {/* {prevWeek.avg.$numberDecimal} */}
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
              fontFamily: "Raleway",
              fontSize: "10px",

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
              fontFamily: "Raleway",
              fontSize: "10px",

            }}
          >
            H9
          </Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <DashboardWrapper>
      <DashboardMainWrapper name="Reports">
        <div className="accounts-wrapper" >
          <PDFDownloadLink
            document={<MyDocument data={prevWeek} />}
            fileName="reports.pdf"
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a"
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download Pdf"
            }
          </PDFDownloadLink>
        </div>
      </DashboardMainWrapper>
    </DashboardWrapper>
  );
};

export default Reports;

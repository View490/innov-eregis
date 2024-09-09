import axios from "axios";
import {NextRequest, NextResponse} from "next/server";



export async function GET(req: NextRequest) {
    console.log("START CALLING GET RESERVATION DETAIL");

    let token = await getToken();
    console.log("SUCCESSFULLY GETTING TOKEN");

    let { searchParams } = new URL(req.url);
    let hotelId = searchParams.get("hotel_id");
    let reservationId = searchParams.get("reservation_id");

    let data = await getReservationDetail(hotelId!, reservationId!, token);
    console.log("SUCCESSFULLY GETTING RESERVATION DETAIL");

    return NextResponse.json(data);
}

async function getToken() {
    console.log("Calling External GET TOKEN");

    const apiUrl = `${process.env.ORACLE_URL_HOST_NAME}/oauth/v1/tokens`;

    const headers = {
        "x-app-key": process.env.ORACLE_X_API_KEY!,
        
    };
    

    const params = new URLSearchParams({
        "username": process.env.ORACLE_USERNAME!,
        "password": process.env.ORACLE_PASSWORD!,
        "grant_type": process.env.ORACLE_GRANT_TYPE!
    });


    try {
        let response = await axios.post(apiUrl ,params, {
            headers
        })

        console.log("response", response)
        console.log("response headers", response.headers)

        // if (!response.ok) {
        //     throw new Error(`Failed to fetch data: ${response.statusText}`);
        // }

        // return await response.json();
        return response.data;
    } catch (error) {
        console.error("Error fetching data from external API:", error);
        return { error: "Failed to fetch data from external API" };
    }
}

async function getReservationDetail(hotelId: string, reservationId: string, token: any){
    console.log("Calling External GET RESERVATION DETAIL");
    console.log("hotelId", hotelId);
    console.log("reservationId", reservationId);
    console.log("get Reservation Detail by using token: ", token);

    const hostName = process.env.ORACLE_URL_HOST_NAME
    let apiUrl = `${hostName}/rsv/v1/hotels/${hotelId}/reservations/${reservationId}`;

    let headers = {
        "x-app-key": process.env.ORACLE_X_API_KEY!,
        "Authorization": `${token.token_type} ${token.access_token}`,
        "x-hotelid": hotelId!,
    };

    try {
        // Fetch data from the external API
        let response = await fetch(apiUrl, {
            method: "GET",
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data from external API:", error);
        return { error: `Failed to fetch data from external API" ${error}`};
    }
}

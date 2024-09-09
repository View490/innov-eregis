import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    console.log("Calling GET token");

    const hostName = `https://mtca2ua.hospitality-api.ap-singapore-1.ocs.oc-test.com`
    const apiUrl = `${hostName}/oauth/v1/tokens`;

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
        // "Pragma": "no-cache",
        "x-app-key": "ec99e39d-a011-43bb-b592-5915f07e961d"
        
    };

    const body = new URLSearchParams({
        "username": "MHG_INNOVATION",
        "password": "yFp2pYtB43qu7Nt0qvz6oWM%", // Replace with actual client ID
        "grant_type": "password" // Replace with actual client secret
    });


    try {
        // Fetch data from the external API
        // const response = await fetch(apiUrl, {
        //     method: "POST",
        //     headers: headers,
        //     body: body.toString(),
        //     cache: 'no-cache'
        // })
        const response = await axios.post(apiUrl , {headers , body , } )

        

        // if (!response.ok) {
        //     throw new Error(`Failed to fetch data: ${response.statusText}`);
        // }
        // const data = await response.json();


        // console.log("Get Token Response" , JSON.stringify(data));
        // Return the fetched data as the response
        // return NextResponse.json(data);
        return response.data
    } catch (error) {
        console.error("Error fetching data from external API:", error);
        return NextResponse.json({ error: "Failed to fetch data from external API" }, { status: 500 });
    }
}
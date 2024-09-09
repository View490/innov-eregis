"use client";

import { useState } from "react";

type Animal = {
    [key : string] : {
        fly?: number
        walk?:number
        run?:number
        eat: number
    }
}

export function SignBox({ hotelId, reservationId }: { hotelId: string, reservationId: string }) {
    const [loadedData, setLoadedData] = useState<any>();
    console.log("SignBox component rendered");

    const loadData = async (hotelId: string, reservationId: string) => {
        console.log("loadData function called");

        const registrationResponse = await fetch(`api/hotels/get-registration?hotel_id=${hotelId}&reservation_id=${reservationId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    

        const registration = await registrationResponse.json();
        console.log("registrationResponse", JSON.stringify(registration));

        return registration;
    };


    const handleClick = async () => {
        console.log("Clicked load data");
        const data = await loadData(hotelId, reservationId);
        setLoadedData(data);
        console.log("res", data);
    };

    return (
        <div className="border p-2 bg-red-50 text-red-500 text-lg font-bold">
            <button onClick={handleClick}>Load data</button>
            data: {JSON.stringify(loadedData)}
        </div>
    );
}
import { SignBox } from "./SignBox";

export default function Folder1Page(res: any) {
    const searchParams = res?.searchParams;
    const hotelId = searchParams?.hotel_id;
    const reservationId = searchParams?.reservation_id;

    return (
        <div>
            <div className="p-4">
                {!hotelId && <>Missing hotelId and reservationId search param</>}
                {(hotelId && reservationId) && <>
                    <div>Welcome to Hotel {hotelId} and reservation number {reservationId}</div>
                    <SignBox hotelId={hotelId}  reservationId={reservationId}/>
                </>}
            </div>
        </div>
    );
}
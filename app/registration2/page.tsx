import {SignBox} from "./SignBox";

export default function Folder1Page(res:any) {

    const searchParams = res?.searchParams

    const customerId = searchParams?.customer_id
    return <div>Page in /folder1 sdfd
  <div className=" p-4">

      {!customerId &&
          <>
        Missing customer_id search param
      </> }


      {customerId && <>
    <div>welcome customer {customerId}</div>
    <SignBox />
      </>
      }


  </div>
        {JSON.stringify(res)}
    </div>
}
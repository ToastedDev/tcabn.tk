import Page from "components/Page";
import moment from "moment";
import ms from "ms";
import { useEffect, useState } from "react";

export default function NotFound() {
  const d = new Date();
  const [userDate, setUserDate] = useState("Loading...");

  const diff = 8.0 * 60 + d.getTimezoneOffset();
  const offset = diff * 60 * 1000;
  var tcaD = new Date(new Date().getTime() + offset);
  const [tcaDate, setTcaDate] = useState("Loading...");

  const [timeDiff, setTimeDiff] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      setUserDate(moment(d).format("MMMM Do YYYY, h:mm:ss A"));
      setTcaDate(moment(tcaD).format("MMMM Do YYYY, h:mm:ss A"));
      setTimeDiff(
        d.getTime() - tcaD.getTime() === 0
          ? "Same time"
          : ms(d.getTime() - tcaD.getTime(), { long: true })
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Page title="Time">
      <div className="flex flex-col justify-center items-center text-center h-screen">
        <h3 className="underline decoration-4 underline-offset-[6px] font-bold text-2xl">
          Your Time
        </h3>
        <p className="mt-2">{userDate}</p>
        <h3 className="underline decoration-4 underline-offset-[6px] font-bold text-2xl">
          TCA&apos;s Time
        </h3>
        <p className="mt-2">{tcaDate}</p>
        <h3 className="underline decoration-4 underline-offset-[6px] font-bold text-2xl">
          Difference
        </h3>
        <p className="mt-2">{timeDiff}</p>
      </div>
      <div className="fixed left-0 bottom-0 p-4 text-sm text-right">
        <p>Updated every second.</p>
      </div>
    </Page>
  );
}

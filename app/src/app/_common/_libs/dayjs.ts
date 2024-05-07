import dayjs from "dayjs";
import en from "dayjs/locale/en";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

function getDayJs() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);
  dayjs.locale(en);
  dayjs.tz.setDefault("Asia/Tokyo");
  return dayjs;
}

export default getDayJs;

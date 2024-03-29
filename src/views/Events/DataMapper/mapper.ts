import { getLastElementOfArray } from "#utils/array";
import { reverseFormatDateTime } from "#utils/dateUtils";

export const eventListMapper = (data: any) => {
  return data.map((i:any) => ({
    id: i?.id,
    picture: i?.picture ? `${process.env.VITE_BASE_URL}${i?.picture}` : "",
    venue_time: i?.venue_time || "",
    name: i?.name || "",
    attendees:
      i?.attendees.length > 0
        ? i?.attendees.map((attendee:any) => ({
            ...attendee,
            profile_pic: attendee?.profile_pic
              ? `${process.env.VITE_BASE_URL}${attendee?.profile_pic}`
              : "",
          }))
        : [],
    created_by: i?.created_by ? Number(i.created_by) : null,
  }));
};

export const eventMapper = (data: any, dateStringToDate: boolean) => {
  return {
    id: data?.id,
    picture: data?.picture
      ? `${process.env.VITE_BASE_URL}${data?.picture}`
      : "",
    venue_time: data?.venue_time
      ? dateStringToDate
        ? reverseFormatDateTime(data?.venue_time)
        : data?.venue_time
      : "",
    name: data?.name || "",
    attendees: data?.attendees || [],
    description: data?.description || "",
    location: data?.location || "",
  };
};

export const eventStateToPayloadMapper = (
  formData: any,
  dateTime: string,
  user: any
) => {
  const payload = {
    name: formData.name,
    description: formData.description,
    location: formData.location,
    picture:
      getLastElementOfArray(
        formData?.picture?.split(process.env.VITE_BASE_URL)
      ) || "",
    venue_time: dateTime || "",
    created_by: user?.userId,
  };
  return payload;
};

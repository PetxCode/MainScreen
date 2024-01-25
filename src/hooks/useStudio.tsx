import useSWR from "swr";
import {
  allStudioAPI,
  allStudioBookingsAPI,
  allUserAPI,
  getSingleStudioAPI,
  getSingleStudioByStudioNameAPI,
} from "../api/studioAPI/studioAPI";

export const useAllClients = () => {
  const { data } = useSWR(`/all-user/`, () => {
    return allUserAPI().then((res) => {
      return res.data;
    });
  });

  return { data };
};

export const useAllStudios = () => {
  const { data } = useSWR(`/all-studio/`, () => {
    return allStudioAPI().then((res) => {
      return res.data;
    });
  });

  return { data };
};

export const useAllStudioBookings = () => {
  const { data } = useSWR(`/view-studio-bookings/`, () => {
    return allStudioBookingsAPI().then((res) => {
      return res.data;
    });
  });

  return { data };
};

export const useSingleStudioBookings = (studioID: string) => {
  const { data: studio } = useSWR(`/one-studio/${studioID}`, () => {
    return getSingleStudioAPI(studioID).then((res) => {
      return res.data;
    });
  });

  return { studio };
};

export const useSingleStudioBookingName = (studioName: string) => {
  const { data: studioNameData } = useSWR(
    `/one-studio-one/${studioName}`,
    () => {
      return getSingleStudioByStudioNameAPI(studioName).then((res) => {
        return res.data;
      });
    }
  );

  return { studioNameData };
};

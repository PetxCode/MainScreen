import { viewMember, viewMemberDetail } from "../api/memberAPI";
import useSWR from "swr";
import { getUserAPI } from "../api/studioAPI/studioAPI";

export const useUser = (userID: string) => {
  const { data: user } = useSWR(
    `/one-user/${userID}`,
    () => {
      return getUserAPI(userID).then((res) => {
        return res.data;
      });
    }
    // { refreshInterval: 5000 }
  );

  return { user };
};

export const useOtherUser = (userID: string) => {
  const { data: otherUser } = useSWR(`/view-member-detail/${userID}`, () => {
    return viewMemberDetail(userID).then((res) => {
      return res.data;
    });
  });

  return { otherUser };
};

export const useViewMember = (userID: string) => {
  const { data: myMember } = useSWR(
    `view-member/${userID}`,
    () => {
      return viewMember(userID).then((res: any) => {
        return res.data.members;
      });
    },
    { refreshInterval: 3000 }
  );

  return { myMember };
};

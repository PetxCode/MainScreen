import axios from "axios";

// const URL: string = "http://localhost:3300/api/v1";
const URL: string = "http://localhost:3300/api/v1";

export const allUserAPI = async () => {
  try {
    return axios
      .get(`${URL}/all-user`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const deleteUserAPI = async (userID: string) => {
  try {
    return axios
      .delete(`${URL}/delete-user/${userID}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const allStudioAPI = async () => {
  try {
    return axios
      .get(`${URL}/view-all-studio/`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const allStudioBookingsAPI = async () => {
  try {
    return axios
      .get(`${URL}/view-studio-bookings`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const getUserAPI = async (userID: string) => {
  try {
    return axios
      .get(`${URL}/one-user/${userID}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const getSingleStudioAPI = async (studioID: string) => {
  try {
    return axios
      .get(`${URL}/view-studio/${studioID}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const getSingleStudioByStudioNameAPI = async (studioName: string) => {
  try {
    return axios
      .get(`${URL}/view-studio-one/${studioName}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const createArticleAPI = async (data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return axios
      .post(`${URL}/create-article/`, data, config)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const readArticleAPI = async () => {
  try {
    return axios
      .get(`${URL}/read-article/`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

export const readOneArticleAPI = async (articleID: string) => {
  try {
    return axios
      .get(`${URL}/read-one-article/${articleID}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return err;
      });
  } catch (error) {
    return error;
  }
};

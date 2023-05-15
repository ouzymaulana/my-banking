export default function CheckInsertCard(cookie) {
  if (cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return undefined;
}
export function CheckCookieInsertCardInLoginPage(cookies) {
  if (!cookies) {
    return {
      redirect: {
        destination: "/insert-card",
        permanent: false,
      },
    };
  }
}
export function CheckInsertCardAndLogin(idEnterCard, isLogin) {
  if (!idEnterCard) {
    return {
      redirect: {
        destination: "/insert-card",
        permanent: false,
      },
    };
  } else if (isLogin === false) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return undefined;
}

export function CheckInsertCardAndLoginTwo(idEnterCard, isLogin) {
  if (!idEnterCard) {
    return {
      redirect: {
        destination: "/insert-card",
        permanent: false,
      },
    };
  } else if (isLogin === true) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

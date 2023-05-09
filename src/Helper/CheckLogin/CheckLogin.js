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
export function CheckInsertCardInLoginPage(cookie) {
  if (!cookie) {
    return {
      redirect: {
        destination: "/insert-card",
        permanent: false,
      },
    };
  }
  return undefined;
}
